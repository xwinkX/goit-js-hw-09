import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.getElementsByClassName('timer')[0].style.display = 'flex';
document.getElementsByClassName('timer')[0].style.marginTop = '20px';
for (let i = 0; i <= 3; i += 1) {
  document.getElementsByClassName('field')[i].style.display = 'flex';
  document.getElementsByClassName('field')[i].style.flexDirection = 'column';
  document.getElementsByClassName('field')[i].style.marginRight = '10px';
  document.getElementsByClassName('value')[i].style.fontSize = '45px';
  document.getElementsByClassName('value')[i].style.textAlign = 'center';
  document.getElementsByClassName('label')[i].style.fontSize = '25px';
}

const startEl = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const currentDate = new Date();
// let selectedDates = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      startEl.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startEl.disabled = false;
      startEl.addEventListener('click', timer(selectedDates[0]));
    }
  },
};

flatpickr(input, options);

const timer = targetDate => {
  return function () {
    setInterval(() => {
      const delta = new Date(targetDate) - new Date();
      renderTimer(delta);
    }, 1000);
  };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

const renderTimer = string => {
  let { days, hours, minutes, seconds } = convertMs(string);
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
};
