let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (!isRunning) {
        startTimer();
        document.getElementById('startStopButton').innerText = 'Stop';
    } else {
        stopTimer();
        document.getElementById('startStopButton').innerText = 'Start';
    }
}

function startTimer() {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function reset() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStopButton').innerText = 'Start';
}
