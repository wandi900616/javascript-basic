const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

console.log(items);

let futureDate = new Date(2021, 10, 1, 14, 53, 10);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours} ${minutes}am `;

// format time

const formatTime = (time) => {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
};

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureDate.getTime() - today;
  if (t < 0) {
    console.log(timeInterval);
    clearInterval(timeInterval);
    deadline.innerHTML = `<div>
              <h3>end of offer</h3>
          </div>`;
    return;
  }
  // console.log(t);
  // values in ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate

  let days = t / oneDay;
  let hours = (t % oneDay) / oneHour;

  let minutes = (t % oneHour) / oneMinute;
  let seconds = (t % oneMinute) / 1000;
  // hours left in ms
  const timeArray = [days, hours, minutes, seconds].map((time) =>
    Math.floor(time)
  );

  timeArray.forEach((time, index) => {
    items[index].textContent = formatTime(time);
  });
  console.log(timeArray);
  // let hours = ((days % Math.floor(days)) * oneDay) / oneHour;
  // let minutes;

  // console.log((days - Math.floor(days)) * oneDay, hours);
};

const timeInterval = setInterval(getRemainingTime, 1000);

// getRemainingTime();
