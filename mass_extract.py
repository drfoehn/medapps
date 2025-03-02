import os
import logging
from logging.handlers import RotatingFileHandler
from flask import Blueprint, request, render_template, jsonify, url_for, send_from_directory, current_app
import fitz  # PyMuPDF
import shutil
from werkzeug.utils import secure_filename
import re
from decimal import Decimal
from datetime import datetime

mass_extract = Blueprint('mass_extract', __name__)

# Configuration
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'mass_extract_uploads')
ARCHIVE_FOLDER = os.path.join(BASE_DIR, 'static', 'mass_extract_archive')
ALLOWED_EXTENSIONS = {'pdf'}
LOG_FILE = os.path.join(BASE_DIR, 'logs', 'mass_flaskapp.log')

# Ensure directories exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ARCHIVE_FOLDER, exist_ok=True)
os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)

# Set up logging
handler = RotatingFileHandler(LOG_FILE, maxBytes=10000, backupCount=1)
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# Set up logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
logger.addHandler(handler)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def extract_date_from_pdf(text):
    date_match = re.search(r'(\d{1,2}/\d{1,2}/\d{4})', text)
    if date_match:
        date_str = date_match.group(1)
        date_obj = datetime.strptime(date_str, '%m/%d/%Y')
        return date_obj.strftime('%d.%m.%y')
    return ''

""" def extract_data_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    results = []
    date = ''

    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        
        if page_num == 0:  # Extract date from the first page
            date = extract_date_from_pdf(text)
        
        table_sections = re.findall(r"Item\s+Min\s+Max\s+Actual\s+Status\n(.*?)(?=Item\s+Min\s+Max\s+Actual\s+Status|\Z)", text, re.DOTALL)
        
        for section in table_sections:
            mass = re.search(r"Mass \(Da\)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)", section)
            resolution = re.search(r"Resolution\s+([\d]+)\s+([\d]+)\s+([\d]+)", section)
            sum_intensity = re.search(r"Sum Intensity[^)]*\)\s+([\d.]+)\s+([\d.e+]+)\s+([\d.e+]+)", section)
            
            if mass and (resolution or sum_intensity):
                result = {"Mass": mass.group(3)}
                if resolution:
                    result["Resolution"] = resolution.group(3)
                if sum_intensity:
                    result["Sum Intensity"] = sum_intensity.group(3)
                results.append(result)

    doc.close()
    return results, date """

def extract_data_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    results = []
    date = ''

    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        
        if page_num == 0:  # Extract date from the first page
            date = extract_date_from_pdf(text)
        
        table_sections = re.findall(r"Item\s+Min\s+Max\s+Actual\s+Status\n(.*?)(?=Item\s+Min\s+Max\s+Actual\s+Status|\Z)", text, re.DOTALL)
        
        for table_num, section in enumerate(table_sections, 1):
            mass = re.search(r"Mass \(Da\)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)", section)
            resolution = re.search(r"Resolution\s+([\d]+)\s+([\d]+)\s+([\d]+)", section)
            sum_intensity = re.search(r"Sum Intensity[^)]*\)\s+([\d.]+)\s+([\d.e+]+)\s+([\d.e+]+)", section)
            
            if mass and (resolution or sum_intensity):
                result = {
                    "page": page_num + 1,
                    "table": table_num,
                    "Mass": mass.group(3)
                }
                if resolution:
                    result["Resolution"] = resolution.group(3)
                if sum_intensity:
                    result["Sum Intensity"] = sum_intensity.group(3)
                results.append(result)

    doc.close()
    return results, date

def convert_to_whole_number(value):
    try:
        return str(int(Decimal(value)))
    except:
        return value

def process_data(data):
    for item in data:
        if 'Sum Intensity' in item:
            item['Sum Intensity'] = convert_to_whole_number(item['Sum Intensity'])
    return data

def create_table_content(data, date, filename):
    # Sortiere die Daten nach Seite und Tabellennummer
    sorted_data = sorted(data, key=lambda x: (x['page'], x['table']))

    table_content = f"""
    <h2>{filename}</h2>
    <table id="data-table" style="border-collapse: collapse; width: 100%;">
        <tr>
            <th style="border: 1px solid black; padding: 8px; text-align: center; background-color: #f2f2f2;">Datum</th>
    """

    # Füge die Masse-Werte als Überschriften hinzu
    for item in sorted_data:
        table_content += f'<th colspan="2" style="border: 1px solid black; padding: 8px; text-align: center; background-color: #f2f2f2;">Masse {item["Mass"]} Da</th>'

    table_content += "</tr><tr>"
    table_content += f'<td style="border: 1px solid black; padding: 8px; text-align: center;">[{date}]</td>'

    # Füge die Untertitel für Resolution und Sum Intensity hinzu
    for _ in sorted_data:
        table_content += '<td style="border: 1px solid black; padding: 8px; text-align: center;">Resolution</td>'
        table_content += '<td style="border: 1px solid black; padding: 8px; text-align: center;">Sum Intensity</td>'

    table_content += "</tr><tr>"
    table_content += f'<td style="border: 1px solid black; padding: 8px; text-align: center;">{date}</td>'

    # Füge die Werte hinzu
    for item in sorted_data:
        resolution = item.get('Resolution', '')
        sum_intensity = item.get('Sum Intensity', '')
        table_content += f'<td style="border: 1px solid black; padding: 8px; text-align: right;">{resolution}</td>'
        table_content += f'<td style="border: 1px solid black; padding: 8px; text-align: right;">{sum_intensity}</td>'

    table_content += "</tr></table>"
    
    # Add the button and JavaScript for copying
    table_content += """
    <button id="copy-button" class="btn btn-primary" style="display: inline;" onclick="copyLastRow()">Copy Last Row</button>
    <p id="copy-message" style="color: green;"></p>
    
    <script>
    function copyLastRow() {
        const table = document.getElementById('data-table');
        const lastRow = table.rows[table.rows.length - 1];
        let rowData = [];
        
        for (let i = 0; i < lastRow.cells.length; i++) {
            rowData.push(lastRow.cells[i].innerText); // Collect cell values
        }
        
        // Join the cell values with tabs for Excel compatibility
        const formattedData = rowData.join('\\t');
        
        navigator.clipboard.writeText(formattedData).then(() => {
            document.getElementById('copy-message').innerText = 'Erfolgreich in den Zwischenspeicher gelegt';
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    }
    </script>
    """
    
    return table_content

def process_pdf(pdf_path):
    try:
        extracted_data, date = extract_data_from_pdf(pdf_path)
        processed_data = process_data(extracted_data)
        filename = os.path.basename(pdf_path)
        table_html = create_table_content(processed_data, date, filename)
        
        return {
            "document_name": filename,
            "extracted_data": processed_data,
            "table_html": table_html,
            "date": date
        }
    except Exception as e:
        logger.error(f"Error processing PDF: {str(e)}")
        raise

@mass_extract.route('/', methods=['GET', 'POST'])
def upload_file():
    print(f"Current routes: {[rule.endpoint for rule in current_app.url_map.iter_rules()]}")
    if request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': 'No selected file'})
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(UPLOAD_FOLDER, filename)
            file.save(file_path)
            
            try:
                results = process_pdf(file_path)
            except Exception as e:
                logger.error(f"Error processing PDF: {str(e)}")
                return jsonify({'error': 'Error processing PDF'})
            
            archive_path = os.path.join(ARCHIVE_FOLDER, filename)
            shutil.move(file_path, archive_path)
            
            file_link = url_for('mass_extract.serve_file', filename=filename, _external=True)
            archive_link = url_for('mass_extract.list_archive', _external=True)
            
            return jsonify({
                'results': results['extracted_data'],
                'table_html': results['table_html'],
                'file_link': file_link,
                'archive_link': archive_link,
                'date': results['date']
            })
        
        return jsonify({'error': 'Invalid file type'})
    
    return render_template('mass_extract/upload.html')

@mass_extract.route('/archive/<path:filename>')
def serve_file(filename):
    return send_from_directory(ARCHIVE_FOLDER, filename)

@mass_extract.route('/archive')
def list_archive():
    files = []
    for filename in os.listdir(ARCHIVE_FOLDER):
        file_path = os.path.join(ARCHIVE_FOLDER, filename)
        file_date = datetime.fromtimestamp(os.path.getmtime(file_path))
        files.append({
            'name': filename,
            'date': file_date.strftime('%d.%m.%Y %H:%M'),
            'path': filename
        })
    # Sortiere nach Datum, neueste zuerst
    files.sort(key=lambda x: x['date'], reverse=True)
    return render_template('mass_extract/archive.html', files=files)

@mass_extract.route('/archive/delete/<path:filename>')
def delete_file(filename):
    try:
        file_path = os.path.join(ARCHIVE_FOLDER, filename)
        if os.path.exists(file_path):
            os.remove(file_path)
            return jsonify({'success': True})
        return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        logger.error(f'Error deleting file: {str(e)}')
        return jsonify({'error': 'Could not delete file'}), 500

@mass_extract.errorhandler(Exception)
def handle_exception(e):
    logger.error(f'Unhandled Exception: {str(e)}')
    return 'Internal Server Error', 500