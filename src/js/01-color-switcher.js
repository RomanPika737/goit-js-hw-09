
const CHANGE_BG_COLOR_DELAY = 1000;

const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop'),
  bodyElem: document.querySelector('body'),
}

let intervalId = null;
refs.stopButton.disabled = true;

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;
  intervalId = setInterval(() => {
    const bgColor = getRandomHexColor();
    refs.bodyElem.style.backgroundColor = bgColor;
  }, CHANGE_BG_COLOR_DELAY);
}

function onStopButtonClick() {
  refs.startButton.disabled = false;
  refs.stopButton.disabled = true;
  clearInterval(intervalId);
  // intervalId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}








