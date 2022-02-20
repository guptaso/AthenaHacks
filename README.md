# Yogi Break
With this ever drawn-out pandemic, many of us have succumbed to the long hours at our desks behind a monitor. As we are by our lonesome selves, we work and work and work; we have forgotten to take breaks to not only get a mental reprieve, but also strengthen our muscles. Yogi Break offers to be our companion in these challenging times by providing consistent reminders to try a new yoga pose that will reinforce our muscles and mind.
  
## What it does
Navigate to Yogi Break and set the timer based on how often you want to get up and do a yoga pose. Are you constantly switching windows? No problem, you have the option to have the alerts go to your phone or your laptop. 
  
## Getting Started 
TODO

## How we built it 
- [Google Cloud](https://cloud.google.com/) was used to host our application
- [Flask](https://flask.palletsprojects.com/en/2.0.x/) is the application framework used
- [Twilio Messaging Service](https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1) is used to send messages to users 
- [Lightning Yoga Api](https://lightning-yoga-api.herokuapp.com/) is used to provide the yoga data 

## Challenges we ran into
Since we are all beginners (and first-time hackers), we found some of the semantics challenging. However, the biggest challenge we faced was the original idea we had proposed. Using Twilio we wanted to add a chat bot pop up on the web page instead of an alert, as well as adding the actual picture of the Yoga pose on both the webpage and text alerts. Unfortunately, the format of the pictures on the API were incompatible with Twilio. But, not to worry, this will definitely be a future feature on the app!

## Accomplishments that we're proud of
Everything! We all had a collective vision for Yogi Break and we feel like there’s a piece of each of us in our project.

## What we learned
We learned how different technologies come together by utilizing Google Cloud Platform to host our web-app and Flask to serve our application. Furthermore, we were able to draw from two API's (Twilio and Yogo Poses Dataset) to add even more functionality. It was also really fun playing with Bootstrap (theres soooo many neat aesthetics!).

## What's next for Yogi Break
As mentioned before, adding the yoga images to the alerts is a definite must add. Furthermore, we would like to transition our Yoga images library to GIFs of the poses. To take it to the next level, we would love to add the Spotify API, so can funnel some soothing and relaxing music while you are working away!

## Creators
- Jacqueline Dominguez (jd00993@usc.edu)
- Kaitlyn Werden (werden@usc.edu)
- Pratha Kulkarni (prathaku@usc.edu)
- Sonica Gupta (sonicagu@usc.edu)
