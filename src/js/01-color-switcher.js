const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');

startEl.addEventListener('click', () => {
  startEl.disabled = true;
  switcherId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.classList.add('background-color');
    document.body.style.backgroundColor = color;
  }, 1000);
});

stopEl.addEventListener('click', () => {
  clearInterval(switcherId);
  startEl.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
