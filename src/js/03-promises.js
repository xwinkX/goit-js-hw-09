const submitForm = document.querySelector('.form');
const delayEl = document.querySelector('[name=delay]');
const steepEl = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');
let position = 0;

submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  setTimeout(() => {
    for (let i = 0; i < amountEl.value; i += 1) {
      const value = +delayEl.value + +steepEl.value * i;
      position = i + 1;
      createPromise(position, value)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  }, delayEl.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
