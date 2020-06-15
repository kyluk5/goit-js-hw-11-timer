class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.ref = {
      spanDay: this.timer.querySelector('span[data-value="days"]'),
      spanHour: this.timer.querySelector('span[data-value="hours"]'),
      spanMin: this.timer.querySelector('span[data-value="mins"]'),
      spanSec: this.timer.querySelector('span[data-value="secs"]'),
    };
    this.timeOut(targetDate);
  }

  timeOut(targetDate) {
    setInterval(() => {
      const curentTime = Date.now();
      const timeLeft = targetDate - curentTime;
      this.timeCalculate(timeLeft);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  timeCalculate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.ref.spanDay.textContent = days;
    this.ref.spanHour.textContent = hours;
    this.ref.spanMin.textContent = mins;
    this.ref.spanSec.textContent = secs;
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020"),
});
