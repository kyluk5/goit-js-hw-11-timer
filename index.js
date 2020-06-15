const timer = document.querySelector("#timer-1");
const spanDay = timer.querySelector('span[data-value="days"]');
const spanHover = timer.querySelector('span[data-value="hours"]');
const spanMin = timer.querySelector('span[data-value="mins"]');
const spanSec = timer.querySelector('span[data-value="secs"]');

function timeOut() {
  setInterval(() => {
    const curentTime = Date.now();
    const timeLeft = new Date("Jul 17, 2020") - curentTime;
    timeCalculate(timeLeft);
  }, 1000);
}

timeOut();

function pad(value) {
  return String(value).padStart(2, "0");
}

function timeCalculate(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return (
    (spanDay.textContent = `${days}`),
    (spanHover.textContent = `${hours}`),
    (spanMin.textContent = `${mins}`),
    (spanSec.textContent = `${secs}`)
  );
}
