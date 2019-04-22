'use strict';

let week = ["Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday"];




for (let a = 0; a < 7; a++) {
  if (a < 5) {
    document.write(week[a] + "<br>");
  }
  if (a == 5) {
    document.write("<b>" + week[a] + "</b><br>");

  }
  if (a == 6) {
    document.write("<b><i>" + week[a] + "</i></b><br>");
  }
}



let arr = ['10', '11', '12', '13', '34', '15', '76'];

arr.forEach((item) => {
  if ((item[0] == '3') || (item[0] == '7')) {
    console.log(item);
  }
});
