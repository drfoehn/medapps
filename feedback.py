from flask import Blueprint, render_template, request, redirect, url_for, flash, session, current_app
from datetime import datetime
from functools import wraps
import os
import logging
from logging.handlers import RotatingFileHandler
from dotenv import load_dotenv

# Lade Umgebungsvariablen
load_dotenv()

feedback_bp = Blueprint('feedback', __name__)

# Konfiguration aus .env
ADMIN_PASSWORD = os.getenv('FEEDBACK_ADMIN_PASSWORD')
FEEDBACK_CODE = os.getenv('FEEDBACK_CODE')
FEEDBACK_FILE = 'feedback_messages.txt'

# Log-Konfiguration
LOG_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'logs')
os.makedirs(LOG_DIR, exist_ok=True)  # Erstellt das logs-Verzeichnis, falls es nicht existiert
FAILED_ATTEMPTS_LOG = os.path.join(LOG_DIR, 'failed_loginattempts_feedback.log')

# Logger Setup
logger = logging.getLogger('feedback_security')
logger.setLevel(logging.INFO)
handler = RotatingFileHandler(FAILED_ATTEMPTS_LOG, maxBytes=10000, backupCount=5)
handler.setFormatter(logging.Formatter('%(asctime)s - %(message)s'))
logger.addHandler(handler)

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            return redirect(url_for('feedback.admin'))
        return f(*args, **kwargs)
    return decorated_function

def log_failed_attempt(code, ip):
    logger.warning(f'Fehlgeschlagener Zugriff - IP: {ip}, Versuchter Code: {code}')
    
    # Prüfen auf mehrere Fehlversuche in kurzer Zeit
    recent_failures = 0
    with open(FAILED_ATTEMPTS_LOG, 'r') as f:
        for line in f.readlines()[-10:]:  # Letzte 10 Einträge prüfen
            if ip in line and (datetime.now() - datetime.strptime(line[:19], '%Y-%m-%d %H:%M:%S')).seconds < 3600:
                recent_failures += 1
    
    # Bei mehr als 5 Fehlversuchen in einer Stunde: Admin benachrichtigen
    if recent_failures >= 5:
        logger.error(f'WARNUNG: Mehrere Fehlversuche von IP {ip}')
        # Hier könnte man noch eine Email-Benachrichtigung einbauen

@feedback_bp.route('/', methods=['GET'])
def feedback():
    return render_template('feedback.html')

@feedback_bp.route('/submit', methods=['POST'])
def submit():
    message = request.form.get('message')
    code = request.form.get('code')
    ip = request.remote_addr
    
    if not message or not code:
        flash('Bitte füllen Sie alle Felder aus.', 'error')
        return redirect(url_for('feedback.feedback'))
    
    if code != FEEDBACK_CODE:
        log_failed_attempt(code, ip)
        flash('Ungültiger Code.', 'error')
        return redirect(url_for('feedback.feedback'))
    
    # Speichern der Nachricht mit Zeitstempel
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with open(FEEDBACK_FILE, 'a', encoding='utf-8') as f:
        f.write(f'{timestamp}\n{message}\n---\n')
    
    flash('Ihre Mitteilung wurde erfolgreich gesendet.', 'success')
    return redirect(url_for('feedback.feedback'))

@feedback_bp.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        password = request.form.get('password')
        if password == ADMIN_PASSWORD:
            session['admin_logged_in'] = True
            return redirect(url_for('feedback.view'))
        flash('Ungültiges Passwort', 'error')
    return render_template('admin_login.html')

@feedback_bp.route('/view')
@admin_required
def view():
    messages = []
    if os.path.exists(FEEDBACK_FILE):
        with open(FEEDBACK_FILE, 'r', encoding='utf-8') as f:
            content = f.read().split('---\n')
            for entry in content:
                if entry.strip():
                    lines = entry.strip().split('\n', 1)
                    if len(lines) == 2:
                        timestamp, message = lines
                        messages.append({'timestamp': timestamp, 'message': message})
    
    return render_template('view_feedback.html', messages=messages) 