import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

/* const flatpickr = require('flatpickr'); */
const currentTime = new Date();
const btnStart = document.querySelector('button');
const selector = document.querySelector('input#datetime-picker');

let deadLine = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentTime,
  minuteIncrement: 1,
  onClose,
};

flatpickr(selector, options);

function onClose(selectedDates) {
  if (currentTime > selectedDates[0]) {
    Notiflix.Notify.failure('Please choose a date in the future');
  }
  if (currentTime < selectedDates[0]) {
    deadLine = selectedDates[0];

    removeDisable();
  }
}

function removeDisable() {
  btnStart.removeAttribute('disabled');
}

btnStart.addEventListener('click', () => {
  onClickBtn();
});

function onClickBtn() {
  const daysEl = document.querySelector('.days');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function timer() {
    let today = new Date();
    let delta = deadLine - today;
    const second = pad(Math.floor(delta / 1000) % 60);
    const minute = pad(Math.floor(delta / 1000 / 60) % 60);
    const hour = pad(Math.floor(delta / 1000 / 60 / 60) % 24);
    const day = pad(Math.floor(delta / 1000 / 60 / 60 / 24));
    if (second >= 0 || minute >= 0 || hour >= 0 || day >= 0) {
      daysEl.textContent = day;
      hoursElement.textContent = hour;
      minutesElement.textContent = minute;
      secondsElement.textContent = second;
    } else {
      daysEl.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
    }
  }
  setInterval(timer, 1000);
}
