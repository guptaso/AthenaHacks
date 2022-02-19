from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
import json
import requests

# create the Flask app
app = Flask(__name__, static_url_path='')
CORS(app)

@app.route("/")
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
