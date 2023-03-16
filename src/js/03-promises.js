import Notiflix from "notiflix";

const form = document.querySelector('.form');


// function createPromise(position, delay) {
//   return new Promise ((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay) 
//   });  
// }

form.addEventListener('submit', onFormSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}



function onFormSubmit(event) {
  event.preventDefault();
  
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    // const promiseDelay = delay;
    const promiseDelay = delay + (i - 1) * step;
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
            timeout: 5000,
          });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
            timeout: 5000,
          });
      });
  }
  // event.target.reset();
}
 










// const form = document.querySelector('.form');
// const delayInput = form.elements.delay;
// const stepInput = form.elements.step;
// const amountInput = form.elements.amount;

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const delay = Number(delayInput.value);
//   const step = Number(stepInput.value);
//   const amount = Number(amountInput.value);

//   for (let i = 1; i <= amount; i++) {
//     createPromise(i, delay + (i - 1) * step)
//       .then(({ position, delay }) => {
//         notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
