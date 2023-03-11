import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
// console.log(email);
const message = document.querySelector('[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};

// message.addEventListener('input', throttle(onMessageInput, 500));
feedbackForm.addEventListener('input', throttle(onMessageInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

populateFeedbackForm();

function onMessageInput(event) {
    // event.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => feedbackFormData[name] = value);
    // console.log(feedbackFormData);

    try {
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormData));
  } catch (error) {
    console.log("Set state error: ", error.message);
  }
    
};

function populateFeedbackForm() {
     try {
    let localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (localStorageData) {
        Object.entries(localStorageData).forEach(([name, value]) => {
            feedbackForm.elements[name].value = value;
        })
    }
  } catch (error) {
    console.log("Set state error: ", error.message);
  }
    
};

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  feedbackFormData.email = email.value;
  feedbackFormData.message = message.value;

  console.log(feedbackFormData);


  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};








// const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input[name="email"]');
// const message = document.querySelector('textarea[name="message"]');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// form.addEventListener(
//   'input',
//   throttle(e => {
//     const objectToSave = { email: email.value, message: message.value };
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
//   }, 500)
// );

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });
//   form.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const storageData = load(LOCALSTORAGE_KEY);
// if (storageData) {
//   email.value = storageData.email;
//   message.value = storageData.message;
// }
