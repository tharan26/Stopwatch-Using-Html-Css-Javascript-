let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    interval;

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapList = document.getElementById('laps');

function startTimer() {
    interval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function lapTimer() {
    const lapItem = document.createElement('li');
    lapItem.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    lapList.appendChild(lapItem);
}

function updateDisplay() {
    displayHours.innerText = formatTime(hours);
    displayMinutes.innerText = formatTime(minutes);
    displaySeconds.innerText = formatTime(seconds);
    displayMilliseconds.innerText = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${Math.floor(time / 10)}` : Math.floor(time / 10);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);
