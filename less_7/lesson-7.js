function main() {
  'use strict';

  let firstInput = document.querySelector("#firstInput"),
    date = new Date();

  function addZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  firstInput.value = (addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()));
}
main();
setInterval(main, 1000);