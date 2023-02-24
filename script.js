const minDisplay = document.getElementById("minute-hand");
const secDisplay = document.getElementById("second-hand");
const secondsDisplay = document.getElementById("sec");
const minutesDisplay = document.getElementById("min");
const millisecondsDisplay = document.getElementById("milli");
const startbtn = document.getElementById("start");
const clearbtn = document.getElementById("clear");

let min = 0;
let sec = 0;
let milli = 0;
let timerInterval;

function updateTimer() {
    milli+=10;
    if (milli >= 1000) {
        sec++;
        milli = 0;
    }
    if (sec >= 60) {
        min++;
        sec = 0;
    }
    minutesDisplay.innerText = min.toString().padStart(2, "0");
    secondsDisplay.innerText = sec.toString().padStart(2, "0");
    millisecondsDisplay.innerText = milli.toString().substring(0,2);
    secDisplay.style.transform = "rotate(" + sec*6 + "deg)";
    minDisplay.style.transform = "rotate(" + min*6 + "deg)";
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 10);
    startbtn.innerText = "Pause";
    startbtn.removeEventListener("click", startTimer);
    startbtn.addEventListener("click", pauseTimer);
}

function pauseTimer() {
    clearInterval(timerInterval);
    startbtn.innerText = "Resume";
    startbtn.removeEventListener("click", pauseTimer);
    startbtn.addEventListener("click", startTimer);
}

function clearTimer() {
    clearInterval(timerInterval);
    min = 0;
    sec = 0;
    milli = 0;
    minutesDisplay.innerText = "00";
    secondsDisplay.innerText = "00";
    millisecondsDisplay.innerText = "00";
    secDisplay.style.transform = "rotate(" + sec*60 + "deg)";
    minDisplay.style.transform = "rotate(" + min*6 + "deg)";
    startbtn.innerText = "Start";
    startbtn.removeEventListener("click", pauseTimer);
    startbtn.addEventListener("click", startTimer);
}

startbtn.addEventListener("click", startTimer);
clearbtn.addEventListener("click", clearTimer);