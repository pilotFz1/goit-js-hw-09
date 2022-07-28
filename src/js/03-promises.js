import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const amount = refs.amount.value;
  const delay = refs.delay.value;
  const step = refs.step.value;

  for (let i = 1; i <= amount; i += 1) {
    setTimeout(() => {
      const position = i;
      const newdelay = (i - 1) * step + +delay;
      createPromise(position, newdelay)
        .then(value => {
          Notiflix.Notify.success(`${value}`);
        })
        .catch(error => {
          Notiflix.Notify.failure(`${error}`);
        });
    }, i * step);
  }
  evt.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(delay);
  const promise = new Promise((resolve, reject) => {
    console.log(position);
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
}

/* Емитация введеных данных */
/* const amount = 5;
const position = 0;
const firstDelay = 1000;
const delayStep = 1500;
const delay = 0; */

/* const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
}; */

/* setInterval(test, delayStep); */
/* function createPromise(position, delay) {
  return new Promise((fulfill, reject) => {
    for (let i = 0; i < amount; i++) {
      position++;
      delay += delayStep;

      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          fulfill(
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
          );
        } else {
          reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
        }
      }, delayStep);
    }
  });
}

createPromise(position, delay)
  .then(sacses => {
    sacses;
  })

  .catch(error => {
    error;
  });
 */
