import argparse

from twilio.rest import Client

def sendMsg(yoga_pose, number):
    account_sid = 'AC5234bea76c6eafa9ed52f8cb6c7ebb6a'
    auth_token = '92ad39b864499ec7064d30ec1d8e5d63'
    client = Client(account_sid, auth_token)

    notification_msg = "Time for another yoga pose: " + yoga_pose

    message = client.messages.create(
                                  messaging_service_sid='MGe211fcc632ba9b820c19922061a9c550',
                                  body = notification_msg,
                                  to=number
                              )
    return message.sid


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Send a message to user.')
    parser.add_argument('yoga_pose', required = True, help='yogo pose message')
    parser.add_argument('number', required = True, help='sms number')
    args = parser.parse_args()

    ''' Example usage
    yoga_pose = "Boat"
    number = '+1##########'
    '''

    sendMsg(args.yoga_pose, args.number)
