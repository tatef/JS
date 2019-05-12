window.addEventListener("DOMContentLoaded", () => {
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
  info = document.querySelector('.info-header'),
  tabContent = document.querySelectorAll('.info-tabcontent');
  const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);
  const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
  info.addEventListener("click", (event) => {
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')){
      for( let i =0; i < tab.length; i++){
        if (target == tab[i]){
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  let deadline = '2018-10-21';
  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000*60*60)));
    return{
      'totul' : t,
      'hours' : hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(upDateClock, 1000);
    function upDateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);
      if (t.totul <= 0) {
        clearInterval(timeInterval);
      }
      if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
      function addZero(endtime) {
        if (endtime >= 0 && endtime < 10) {
          return '0' + endtime;
        } else {
          return endtime;
        }
      }
    }
  }
  setClock('timer', deadline);
  //modal
  let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionBtn = document.querySelectorAll(".description-btn");
const showModal = () => {
  more.addEventListener("click", () => {
    overlay.style.display = "block";
    more.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });
  descriptionBtn.forEach(descriptionBtn => {
    descriptionBtn.addEventListener("click", () => {
      overlay.style.display = "block";
      more.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
  });
}
const hideModal = () => {
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
}
showModal();
hideModal();
});
