
import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


Notiflix.Notify.init({
  width: '380px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  cssAnimationStyle: 'from-left', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
});

const refs = {
  input: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
}
// console.log(refs.startButton);

refs.startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      // alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.startButton.disabled = false;

      refs.startButton.addEventListener('click', (event) => {
        const intervalId = setInterval(() => {
          refs.startButton.disabled = true;
          const deltaTime = selectedDates[0].getTime() - Date.now();
          const { days, hours, minutes, seconds } = convertMs(deltaTime);
          // console.log(convertMs(deltaTime));

          refs.dataDays.textContent = days;
          refs.dataHours.textContent = hours;
          refs.dataMinutes.textContent = minutes;
          refs.dataSeconds.textContent = seconds;

        //   if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        //     clearInterval(intervalId);
        //   }
        // }, 1000);

        if (deltaTime < 1000) {
          clearInterval(intervalId);
        }
        }, 1000);

        //  if ( Number(deltaTime / 1000) <= 0.5) {
        //   clearInterval(intervalId);
        // }
        // });
        
      })
    }
  }
}

flatpickr(refs.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}



        







        
 

// ------------------------------------------------------

// import Notiflix from "notiflix";
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";


// Notiflix.Notify.init({
//   width: '380px',
//   position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
//   cssAnimationStyle: 'from-left', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
// });

// const TIMER_STEP = 1000;
// let intervalId = null;
// let date = null;
// let deltaTime = 0;

// const refs = {
//   input: document.querySelector('#datetime-picker'),
//   startButton: document.querySelector('[data-start]'),
//   dataDays: document.querySelector('[data-days]'),
//   dataHours: document.querySelector('[data-hours]'),
//   dataMinutes: document.querySelector('[data-minutes]'),
//   dataSeconds: document.querySelector('[data-seconds]'),
// }
// // console.log(refs.startButton);

// refs.startButton.disabled = true;
// refs.startButton.addEventListener('click', onStartButtomTimer);

// flatpickr(refs.input, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     date = selectedDates[0];
//     onStartButtomTimerRun();
//   },
// });

// function onStartButtomTimerRun() {
//   const currentDate = Date.now();
//   const selectedDate = new Date(date).getTime();
//   if (selectedDate < currentDate) {
//     Notiflix.Notify.warning("Please choose a date in the future");
// refs.startButton.disabled = true;
// date = 0;
//     return;
//   }
//   refs.startButton.disabled = false;
//   deltaTime = selectedDate - currentDate;
//   }

// function onStartButtomTimer() {
//   refs.startButton.disabled = true;

//   intervalId = setInterval(() => {
//     deltaTime -= TIMER_STEP;
//     const timeComponents = convertMs(deltaTime);

//     if (deltaTime < 0) {
//       clearInterval(intervalId);

//       return;
//     }

//     updateClockFace(timeComponents);
//   }, TIMER_STEP);
// }
  
// function updateClockFace(values) {
//   const { days, hours, minutes, seconds } = values;
//   refs.dataDays.textContent = days;
//   refs.dataHours.textContent = hours;
//   refs.dataMinutes.textContent = minutes;
//   refs.dataSeconds.textContent = seconds;
// }
 


// // flatpickr(refs.input, options);

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }


// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }








// import Notiflix from "notiflix";
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// Notiflix.Notify.init({
//   width: '380px',
//   position: 'center-top',
//   cssAnimationStyle: 'from-left',
// });

// const TIMER_STEP = 1000;

// class Timer {
//   constructor() {
//     this.intervalId = null;
//     this.date = null;
//     this.deltaTime = 0;
//     this.refs = {
//       input: document.querySelector('#datetime-picker'),
//       startButton: document.querySelector('[data-start]'),
//       dataDays: document.querySelector('[data-days]'),
//       dataHours: document.querySelector('[data-hours]'),
//       dataMinutes: document.querySelector('[data-minutes]'),
//       dataSeconds: document.querySelector('[data-seconds]'),
//     };
//     this.refs.startButton.disabled = true;
//     this.refs.startButton.addEventListener('click', this.onStartButtonTimer.bind(this));
//     flatpickr(this.refs.input, {
//       enableTime: true,
//       time_24hr: true,
//       defaultDate: new Date(),
//       minuteIncrement: 1,
//       onClose: (selectedDates) => {
//         this.date = selectedDates[0];
//         this.onStartButtonTimerRun();
//       },
//     });
//   }

//   onStartButtonTimerRun() {
//     const currentDate = Date.now();
//     const selectedDate = new Date(this.date).getTime();
//     if (selectedDate < currentDate) {
//       Notiflix.Notify.warning("Please choose a date in the future");
//       return;
//     }
//     this.refs.startButton.disabled = false;
//     this.deltaTime = selectedDate - currentDate;
//   }

//   onStartButtonTimer() {
//     this.refs.startButton.disabled = true;
//     this.intervalId = setInterval(() => {
//       this.deltaTime -= TIMER_STEP;
//       const timeComponents = this.convertMs(this.deltaTime);
//       if (this.deltaTime < 0) {
//         clearInterval(this.intervalId);
//         return;
//       }
//       this.updateClockFace(timeComponents);
//     }, TIMER_STEP);
//   }

//   updateClockFace(values) {
//     const { days, hours, minutes, seconds } = values;
//     this.refs.dataDays.textContent = days;
//     this.refs.dataHours.textContent = hours;
//     this.refs.dataMinutes.textContent = minutes;
//     this.refs.dataSeconds.textContent = seconds;
//   }

//   addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const days = Math.floor(ms / day);
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
//     return { days, hours, minutes, seconds };
//   }
// }

// const timer = new Timer();
