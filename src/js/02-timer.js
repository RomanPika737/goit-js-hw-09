
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
          // console.log(deltaTime);

          refs.dataDays.textContent = days;
          refs.dataHours.textContent = hours;
          refs.dataMinutes.textContent = minutes;
          refs.dataSeconds.textContent = seconds;

        //   if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        //     clearInterval(intervalId);
        //   }
        // }, 1000);

        if (Number(deltaTime) <= Number(500)) {
          clearInterval(intervalId);
        }
        });
        
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



        



        
        
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const datePicker = flatpickr("#datetime-picker", {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const now = new Date();
//     if (selectedDates[0] < now) {
//       window.alert("Please choose a date in the future");
//       document.querySelector("[data-start]").disabled = true;
//     } else {
//       document.querySelector("[data-start]").disabled = false;
//     }
//   },
// });

// let countdownInterval;

// document.querySelector("[data-start]").addEventListener("click", () => {
//   const countdownDate = datePicker.selectedDates[0].getTime();

//   countdownInterval = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = countdownDate - now;
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

//     document.querySelector("[data-days]").textContent = days;
//     document.querySelector("[data-hours]").textContent = hours;
//     document.querySelector("[data-minutes]").textContent = minutes;
//     document.querySelector("[data-seconds]").textContent = seconds;

//     if (distance < 0) {
//       clearInterval(countdownInterval);
//       document.querySelector(".timer").classList.add("hidden");
//     }
//   }, 1000);
// });
