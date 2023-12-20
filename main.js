// setInterval(count, 1000);
// setInterval(sayHi, 2000);

// Cách tạo ra bộ đếm

const playBtnEl = document.getElementById("play-btn");
const resetBtnEl = document.getElementById("reset-btn");
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const iconEl = document.querySelector("#play-btn .icon");

let counter = 0;
let timerId;

function count() {
  counter = counter + 1;
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor(counter / 60) % 60;
  const seconds = counter % 60;
  secondsEl.textContent = padZero(seconds);
  minutesEl.textContent = padZero(minutes);
  hoursEl.textContent = padZero(hours);
}

playBtnEl.addEventListener("click", function () {
  if (iconEl.name === "play") {
    // Đếm
    timerId = setInterval(count, 1000);
  } else {
    // Ngưng đến
    clearInterval(timerId);
  }

  // UI Logic
  if (iconEl.name === "play") {
    iconEl.name = "stop-circle";
  } else {
    iconEl.name = "play";
  }
});

resetBtnEl.addEventListener("click", function () {
  // reset counter
  counter = 0;
  secondsEl.textContent = "00";
  minutesEl.textContent = "00";
  hoursEl.textContent = "00";
  iconEl.name = "play"
  clearInterval(timerId)
});

function padZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return String(num);
  }
}
