#!/bin/bash

# Navigate to the app directory
cd ~/medapps

# Pull the latest code from GitLab
git pull origin master

# Activate virtual environment
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Restart your uWSGI or Flask app
uwsgi --ini medapps.ini

