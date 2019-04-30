let menu = document.querySelector('.menu'),
  menuItem = document.getElementsByClassName('menu-item'),
  title = document.querySelector('#title'),
  column = document.querySelectorAll('.column'),
  adv = document.querySelector('.adv'),
  menuItemLi = document.createElement('li'),
  promptt = document.querySelector('#prompt'),
  ff = prompt("Ваше отношение к технике Apple", '');
promptt.textContent = ff;
menuItemLi.classList.add('menu-item');
menu.appendChild(menuItemLi);
menuItemLi.innerHTML = 'Пятый пункт';
title.innerHTML = 'Мы продаем только <strong>подлинную</strong> технику Apple';
adv.remove();
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

menu.insertBefore(menuItem[2], menuItem[1]);