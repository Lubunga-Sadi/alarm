'use strict';

const outputH2 = document.querySelector('h2');

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