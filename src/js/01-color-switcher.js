const NOTIFICATION = 1000;
let timeoutId = null;

const refs = {
  startBtn: document.querySelector('.start'),
  stopBtn: document.querySelector('.stop'),
};

refs.startBtn.addEventListener('click', () => {
  onChangeColor();
  onClickStartBtn();

  timeoutId = setInterval(() => {
    onChangeColor();
  }, NOTIFICATION);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timeoutId);
  onClickStoptBtn();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color}`);
}

function onClickStartBtn() {
  if (refs.startBtn.disabled) {
    return;
  }
  console.log('Клик обработан.');
  refs.startBtn.disabled = true;
  refs.startBtn.classList.add('disabled');
  refs.stopBtn.removeAttribute('disabled');
  refs.stopBtn.classList.remove('disabled');
}

function onClickStoptBtn() {
  if (refs.stopBtn.disabled) {
    return;
  }
  console.log('Клик обработан.');
  refs.stopBtn.disabled = true;
  refs.stopBtn.classList.add('disabled');
  refs.startBtn.removeAttribute('disabled');
  refs.startBtn.classList.remove('disabled');
}
