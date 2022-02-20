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
    countDown.innerHTML = minutes.toString() + ':' + seconds.toString();
    time--;
}

//function for start button
function startTimer() {
    var input1 = min.options[min.selectedIndex].value;
    time = input1 * 60;
    secTimer = setInterval(updateCount, 1000);
}

//function for reset button
function reset() {
    clearInterval(secTimer);
    var dropDown = document.getElementById('minSelect');
    dropDown.selectedIndex = 0;
    countDown.innerHTML = "0:00";
}
