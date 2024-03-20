'use strict';

const outputH2 = document.querySelector('h2');
const outputH3 = document.querySelector('.output h3');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const setAlarm = document.querySelector('.set-alarm');
const alarmIcon = document.querySelector('li');
const outpoutError = document.querySelector('.alert p');

const alarmSound = new Audio('./assets/audio/alarm.mp3')
alarmSound.type = 'audio/mp3'

// UPDATE AND DISPLAY CURRENT TIME
function updateCurrentTime() {
  const today = new Date();
  const currentHour = today.getHours().toString().padStart(2, '0');
  const currentMinute = today.getMinutes().toString().padStart(2, '0');
  const current = `${currentHour}:${currentMinute}`;
  outputH2.innerText = current;
}
document.addEventListener('DOMContentLoaded', () => {
  updateCurrentTime(); 
  setInterval(updateCurrentTime, 1000);
  outpoutError.innerText = '';
});

// DISPLAY INPUT
function displaySelectedTime() {
  let hourValue = hour.value.toString().padStart(2, '0');  // padStart() two digits  
  let minuteValue = minute.value.toString().padStart(2, '0');

  outputH3.innerText = `${hourValue}:${minuteValue}`;
}

// LIMIT INPUT TO TWO PLACES
function limitInput() {                            // first time seeing a "quick fix"
  if (this.value.length > this.maxLength) {
      this.value = this.value.slice(0, this.maxLength);
  }
}
hour.addEventListener("input", limitInput);
minute.addEventListener("input", limitInput);

// ERROR MESSAGES AND ICON VISIBILITY
setAlarm.addEventListener('click', function() {
  if (hour.value === '' || minute.value === '') { // dont display icon if input empty
    outpoutError.innerText = 'Please input hour and minute.'
    return;

  } else if (hour.value > 24 || hour.value < 0) { // check if hour is out of range
      outpoutError.innerText = 'Hour must be between 0 and 24.';
      return;

  } else if (minute.value > 59 || minute.value < 0) {
      outpoutError.innerText = 'Minute must be between 0 and 59.';
      return;

  } else {
      displaySelectedTime()

      alarmIcon.classList.add("visible");
      
      
      outpoutError.innerText = ''
      alarmIcon.classList.add('anim');
      setTimeout(() => {alarmIcon.classList.remove('anim')}, 800);
  }
});

// PLAY SOUND IF CURRENT TIME === INPUT TIME
function playSound() {  
  const today = new Date();
  const currentHour = today.getHours().toString().padStart(2, '0');
  const currentMinute = today.getMinutes().toString().padStart(2, '0');
  const current = `${currentHour}:${currentMinute}`;

  let hourValue = hour.value.toString().padStart(2, '0');  // padStart() two digits  
  let minuteValue = minute.value.toString().padStart(2, '0');
  let currentInput = `${hourValue}:${minuteValue}`

  if (current === currentInput) {
    alarmSound.play();
  }
}