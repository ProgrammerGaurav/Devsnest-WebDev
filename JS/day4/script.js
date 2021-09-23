function analogClock() {
  const secondHand = document.querySelector(".analog-clock .second");
  const minsHand = document.querySelector(".analog-clock .minute");
  const hourHand = document.querySelector(".analog-clock .hour");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function digitalClock() {
  const second = document.querySelector(".digital-clock .second");
  const minute = document.querySelector(".digital-clock .minute");
  const hour = document.querySelector(".digital-clock .hour");
  const day = document.querySelector(".digital-clock .day");

  const now = new Date();
  var weekday = new Array(7);
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TU";
  weekday[3] = "WED";
  weekday[4] = "TH";
  weekday[5] = "FRI";
  weekday[6] = "SAT";
  day.innerHTML = weekday[now.getDay()];
  hour.innerHTML = now.getHours();
  minute.innerHTML = now.getMinutes();
  second.innerHTML = now.getSeconds();
}

setInterval(analogClock, 1000);
setInterval(digitalClock, 1000);
