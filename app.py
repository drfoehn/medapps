from flask import Flask, request, jsonify, render_template, send_file, make_response, render_template_string
import pandas as pd
import json
import secrets  # For generating secure filenames
from werkzeug.utils import secure_filename  # For secure file handling
from mass_extract import mass_extract
import logging
from logging.handlers import RotatingFileHandler
import os
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

XLS2JSON_UPLOAD_FOLDER = 'static/xls2json_uploads'
os.makedirs(XLS2JSON_UPLOAD_FOLDER, exist_ok=True)
# Ensure the logs directory exists
LOG_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'logs')
os.makedirs(LOG_DIR, exist_ok=True)

# Logging configuration
if not app.debug:
    log_file = os.path.join(LOG_DIR, 'mass_flaskapp.log')
    file_handler = RotatingFileHandler(log_file, maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)

# Set up a separate logger
log_file = os.path.join(LOG_DIR, 'mass_flaskapp.log')
handler = RotatingFileHandler(log_file, maxBytes=10000, backupCount=1)
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
logger.addHandler(handler)


# Register the mass_extract blueprint
app.register_blueprint(mass_extract, url_prefix='/mass_extract')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/bilirubin_calculator')
def bilirubin_calculator():
    return render_template('bilirubin_calculator.html')

@app.route('/sample_volume_calculator')
def sample_volume_calculator():
    return render_template('sample_volume_calculator.html')

@app.route('/nephro_calculator')
def nephro_calculator():
    results = {
        'gfr': {
            'schwartz': None,  # Initialize with None or appropriate default
            'ckdEpi': None,
            'cysC': None,
            'combined': None,
            'schwartzAbsolute': None,
            'ckdEpiAbsolute': None,
            'cysCAbsolute': None,
            'combinedAbsolute': None
        },
        'excretion': {},
        'acr': None,
        'kdigo': {
            'gfrCategory': None,
            'albuminuriaCategory': None,
            'riskCategory': None
        }
    }
    # ... populate results with actual data as needed ...
    return render_template('nephro_calculator.html', results=results)

@app.route('/mass_extracter')
def mass_extracter():
    # Placeholder for mass_extracter functionality
    return render_template('mass_extract/upload.html')

@app.errorhandler(500)
def internal_error(error):
    app.logger.error('Server Error: %s', error)
    return render_template('500.html'), 500

# New route for Excel to JSON Converter
@app.route('/excel_to_json_converter')
def excel_to_json_converter():
    return render_template('excel_to_json_converter.html')
@app.route('/download_template')

@app.route('/download_template', methods=['GET'])
def download_template():
    file_path = 'static/xls2json_uploads/template.xlsx'  
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return "File not found", 404

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Check if the file is an allowed type
    if file and file.filename.endswith('.xlsx'):
        # Secure the filename and create a unique filename
        filename = secure_filename(file.filename)
        unique_filename = f"{secrets.token_hex(8)}_{filename}"
        file_path = os.path.join(XLS2JSON_UPLOAD_FOLDER, unique_filename)
        file.save(file_path)
        
        # Convert Excel to JSON
        df = pd.read_excel(file_path)
        json_data = df.to_json(orient='records')
        
        # Load the JSON data into a Python object
        json_object = json.loads(json_data)  # Convert string to Python object
        
        # Remove the uploaded file after processing
        os.remove(file_path)
        
        # Render the JSON data in a template with a copy button
        return render_template_string(''' 
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>JSON Output</title>
                <script>
                    function copyToClipboard() {
                        const jsonText = document.getElementById("jsonOutput").innerText;
                        navigator.clipboard.writeText(jsonText).then(() => {
                            alert("JSON copied to clipboard!");
                        }, (err) => {
                            console.error("Could not copy text: ", err);
                        });
                    }
                </script>
            </head>
            <body>
                <h1>JSON Output</h1>
                <button onclick="copyToClipboard()">Copy JSON to Clipboard</button>
                <pre id="jsonOutput">{{ json_data }}</pre>
                
            </body>
            </html>
        ''', json_data=json.dumps(json_object, indent=4))  # Pass the JSON data to the template
    else:
        return jsonify({'error': 'Invalid file format'}), 400
