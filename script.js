let time = document.querySelector("h1");
let [milisecond, second, minute, hour] = [0, 0, 0, 0];
let timer = null;

const updateTime = () => {
  milisecond++;
  if (milisecond == 100) {
    milisecond = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
      if (minute == 60) {
        minute = 0;
        hour++;
      }
    }
  }
  let ms = milisecond < 10 ? "0" + milisecond : milisecond;
  let s = second < 10 ? "0" + second : second;
  let m = minute < 10 ? "0" + minute : minute;
  let h = hour < 10 ? "0" + hour : hour;

  time.innerHTML = h + " : " + m + " : " + s + " : " + ms;
};

const startTimer = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(updateTime, 10);
};

const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  [milisecond, second, minute, hour] = [0, 0, 0, 0];
  time.innerHTML = "00 : 00 : 00 : 00";
};
