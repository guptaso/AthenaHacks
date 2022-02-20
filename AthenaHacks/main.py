from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
from twilio.rest import Client
import json
import requests
import random
import urllib.request

# create the Flask app
app = Flask(__name__, static_url_path='')
CORS(app)

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route('/sendsms', methods=['GET'])
def sendsms():
    phone = request.args.get('phone')
    msg = 'test_msg'

    account_sid = 'AC5234bea76c6eafa9ed52f8cb6c7ebb6a'
    auth_token = '8635a3973e2b3d8e7f51308abe77bdb4'
    client = Client(account_sid, auth_token)
    msg = retrieveYogaPose()
    notification_msg = "Time for another yoga pose: " + msg

    message = client.messages.create(
        messaging_service_sid='MGe211fcc632ba9b820c19922061a9c550',
        body = msg,
        to=phone
    )
    return message.sid

@app.route('/sendalert', methods=['GET'])
def sendalert():
    return retrieveYogaPose()

def retrieveYogaPose():
    yoga_poses_url = 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
    with urllib.request.urlopen(yoga_poses_url) as url:
        data = json.loads(url.read().decode())
    data = data['items']

    pose_number = random.randint(0, 47)

    data = data[pose_number]

    msg = 'Try this Yoga pose for 5 minutes: '+ data['english_name'] + ' (' + data['sanskrit_name'] + ')\n'
    msg += "Check out an example here: " + data['img_url']
    return msg

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
