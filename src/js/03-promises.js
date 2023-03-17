import Notiflix from "notiflix";

const form = document.querySelector('.form');


function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
        // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
        //     timeout: 5000,
        //   });
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
        //  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        //     timeout: 5000,
        // });
      }
    }, delay) 
  });  
}

const onSucces = (value) => {
  Notiflix.Notify.success(value, { timeout: 5000, });
};

const OnError = (error) => {
  Notiflix.Notify.failure(error, { timeout: 5000, });
};



form.addEventListener('submit', onFormSubmit);


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



function onFormSubmit(event) {
  event.preventDefault();
  
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
   let promiseDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    // let promiseDelay = delay;
    // let promiseDelay = delay + (i - 1) * step;
    createPromise(i, promiseDelay).then(onSucces).catch(OnError);
      // .then(({ position, delay }) => {
      //   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
      //       timeout: 5000,
      //     });
      // })
      // .catch(({ position, delay }) => {
      //   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
      //       timeout: 5000,
      //   });
        
      // });
    promiseDelay += step;
    // console.log(promiseDelay);
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
