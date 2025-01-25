# MedApps - Flask Applications

MedApps is a collection of laboratory-related applications built with Flask. These applications are designed to assist users in various laboratory tasks, including calculations and data conversions.

## Applications

### 1. Sample Volume Calculator
- **Description**: This application allows users to select lab tests and calculate the required blood volume needed for those tests. It simplifies the ordering process for laboratory tests by providing accurate volume calculations based on user input.

### 2. Excel to JSON Converter
- **Description**: This tool converts laboratory test data from Excel format to JSON. It is useful for users who need to manipulate or integrate lab test data into other applications or systems. Users can upload their Excel files, and the application will generate a JSON representation of the data.

### 3. Bilirubin Calculator
- **Description**: This application provides a way to calculate indirect (unconjugated) bilirubin levels in hemolytic samples. It helps users understand bilirubin levels and their implications in laboratory tests.

### 4. Mass Extractor
- **Description**: A Python script that extracts specific data from PDFs generated by Mass Spectrometers. This tool is designed to streamline the data extraction process for laboratory personnel.

### 5. Nephro Calculator
- **Description**: A tool to calculate the GFR, ACR, fractNa/Hst Excretion and risk categories for patients with kidney disease.

## Features
- User-friendly interface for easy navigation.
- Responsive design for use on various devices.
- Secure handling of user data and file uploads.

## Requirements
- Python 3.x
- Flask
- Pandas
- Other dependencies listed in `requirements.txt`

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/drfoehn/medapps.git
   cd medapps
   ```

2. **Set up a virtual environment** (optional but recommended):
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set the secret key** (if applicable):
   - You can set the secret key using an environment variable:
     ```bash
     export FLASK_SECRET_KEY='your_secret_key_here'
     ```

5. **Run the application**:
   ```bash
   flask run
   ```

6. **Access the application**:
   Open your web browser and go to `http://127.0.0.1:5000` to access the MedApps interface.

## Usage
- Navigate through the applications using the navigation bar.
- Follow the instructions provided within each application for specific tasks.
- For the Excel to JSON Converter, upload your Excel file and click "Convert" to generate the JSON output.

## License
This project is licensed under the GNU General Public License v2.0. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

---

Thank you for using MedApps! I hope these applications assist you in your laboratory tasks.
