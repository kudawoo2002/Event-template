// Navigation
const navbarEl = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbarEl.classList.add("sticky");
  } else {
    navbarEl.classList.remove("sticky");
  }
});
// End of Navigation

// Event Time
let hoursEl = document.querySelector(".hours");
let minutesEl = document.querySelector(".minutes");
let secondsEl = document.querySelector(".seconds");
console.log(minutesEl);
let minute = 0;
let hour = 0;
function getTime() {
  const timeToday = new Date();
  let seconds = timeToday.getSeconds();

  if (seconds > 0) {
    if (seconds < 10) {
      secondsEl.textContent = `0${seconds}`;
    } else {
      secondsEl.textContent = seconds;
    }
  } else {
    minute = minute + 1;
    if (minute < 10) {
      minutesEl.textContent = `0${minute}`;
    } else {
      minutesEl.textContent = minute;
    }
  }
  if (minute >= 59) {
    hour = hour + 1;
    if (minute < 10) {
      hoursEl.textContent = `0${hour}`;
    } else {
      hour.textContent = hour;
    }
  }
}
setInterval(() => {
  getTime();
}, 1000);
// end f Event Time
