export function timer() {
  let today = new Date();
  today.setHours(today.getHours() + 12);
  let sale = today;

  // const daysVal = document.querySelector('.form__timer-days .form__timer-val');
  const hoursVal = document.querySelector('.product-day__timer-hours .product-day__timer-val');
  const minutesVal = document.querySelector('.product-day__timer-minutes .product-day__timer-val');
  const secondsVal = document.querySelector('.product-day__timer-seconds .product-day__timer-val');

  // const daysText = document.querySelector('.form__timer-days .form__timer-text');
  const hoursText = document.querySelector('.product-day__timer-hours .product-day__timer-text');
  const minutesText = document.querySelector('.product-day__timer-minutes .product-day__timer-text');
  const secondsText = document.querySelector('.product-day__timer-seconds .product-day__timer-text');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = sale - now;

    // let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    // daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    // daysText.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
    hoursText.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
    minutesText.textContent = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
    secondsText.textContent = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
  };

  timeCount();
  setInterval(timeCount, 1000);
}
