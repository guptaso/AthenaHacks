var min = document.getElementById('minSelect'); //grabs the id for select bar
var input1 = min.options[min.selectedIndex].value; //grabs the actual value

let time;
const countDown = document.getElementById('timerDisplay');

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
    alert("Enter a phone number")
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
}

function sendMsg(){
  if (document.getElementById("sms").checked){
    sendSMS();
  } else {
    sendAlert();
  }
}
