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
};
const hideModal = () => {
  close.addEventListener("click", () => {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
};
showModal();
hideModal();

  // FORM

  let message = {
    loading: "Загрузка...",
    success: "Спасибо. Cкоро мы с вами свяжемся.",
    failure: "Что-то пошло не так."
  };

  let form = document.getElementsByClassName("main-form") [0],
    formBottom = document.getElementById("form"),
    input = document.getElementsByTagName("input"),
    statusMessage = document.createElement("div");
  statusMessage.classList.add("status");
function sendForm(elem){
  elem.addEventListener("submit", function(e) {
    e.preventDefault();
    elem.appendChild(statusMessage);
    let formData = new FormData(form);

    function postData(data) {

      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();

        request.open("POST", "server.php");

        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        request.onreadystatechange =  function() {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if(request.status == 200 && request.status < 300){
              resolve();
          } else {
            reject();
          }
        }
        }
        let obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
      });
    }

    function clearInput () {
      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    };

    postData(formData)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => {
        statusMessage.innerHTML = message.success;
      })
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput)
  });
};

  sendForm(form);
  sendForm(formBottom);
  // Слайдер

  let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  let showSlides = (n) => {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => {
      item.style.display = "none";
    });

    dots.forEach((item) => {
      item.classList.remove("dot-active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  };
  showSlides();

  let plusSlides = (n) => {
    showSlides(slideIndex += n);
  };

  let currentSlide = (n) => {
    showSlides(slideIndex = n);
  };

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });

  next.addEventListener("click", () => {
    plusSlides(1);
  });

  // Решение проблему с точками

  dotsWrap.addEventListener("click", (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains("dot") &&
        event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  // Калькулятор

  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.querySelector("#select"),
    totalValue = document.querySelector("#total"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener("input", function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "" || persons.value == "" ||
      persons.value % 1 !== 0 || restDays.value % 1 !== 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener("input", function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "" || persons.value == "" ||
      persons.value % 1 !== 0 || restDays.value % 1 !== 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  persons.addEventListener("keypress", event => {
    if (!/[\d]/.test(event.key)) {
      event.preventDefault();
    }
  });

  restDays.addEventListener("keypress", event => {
    if (!/[\d]/.test(event.key)) {
      event.preventDefault();
    }
  });

  place.addEventListener("change", function () {
    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  }); 
});
