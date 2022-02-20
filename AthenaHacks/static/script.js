var min = document.getElementById('minSelect'); //grabs the id for select bar
var input1 = min.options[min.selectedIndex].value; //grabs the actual value

let time;
const countDown = document.getElementById('timerDisplay');

var xhr = new XMLHttpRequest();
var homeLink = "https://ah2022.uw.r.appspot.com/";

//main countdown timer function
function updateCount() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    new_time = minutes.toString() + ':' + seconds.toString();

    if (new_time[0] == '-'){
      sendMsg();
      startTimer();
    } else {
      countDown.innerHTML = new_time
      time--;
    }
}

//function for start button
function startTimer() {
  if (document.getElementById("sms").checked && document.getElementById("phone").value.length < 2) {
      alert("Oops, you forgot to enter your digits ")
  } else {
    var input1 = min.options[min.selectedIndex].value;
      time = input1 * 60;
      secTimer = setInterval(updateCount, 1000);
  }
}

//function for reset button
function reset() {
    clearInterval(secTimer);
    var dropDown = document.getElementById('minSelect');
    dropDown.selectedIndex = 0;
    countDown.innerHTML = "0:00";
    location.reload();
}

function web_check() {
    document.getElementById("alert").checked = true;
    document.getElementById("sms").checked = false;
    document.getElementById("phone").style.display = "none";
    document.getElementById("phone_label").style.display = "none";
}

function sms_check() {
    document.getElementById("alert").checked = false;
    document.getElementById("sms").checked = true;
    document.getElementById("phone").style.display = "inline";
    document.getElementById("phone_label").style.display = "inline";
}

function sendMsg(){
  if (document.getElementById("sms").checked){
    sendSMS();
  } else {
    sendAlert();
  }
}

async function sendSMS() {
    num = document.getElementById("phone").value.replace(/\D/g, '');
    phoneNum = "+1" + num

    var link = homeLink + '/sendsms?phone=' + phoneNum

    const response = await fetch(link, {
        method: 'GET',
        mode: 'cors',
    });
    let d = await response.text();

}

async function sendAlert() {
    var link = homeLink + '/sendalert'

    const response = await fetch(link, {
        method: 'GET',
        mode: 'cors',
    });
    let d = await response.text();

    alert(d)
}
