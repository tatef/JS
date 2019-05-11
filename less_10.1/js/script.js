
window.addEventListener("DOMContentLoaded", function () {
  // 'use strict';

  class Options {
    constructor(height = 100, width = 200, bg = "red", fontSize = "20px",
      textAlign = "center") {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    getElement() {
      let newDiv = document.createElement('div'),
        text = "Какой-то текст";

      newDiv.innerHTML = `${text}`;
      document.body.appendChild(newDiv);

      newDiv.style.cssText =
        `border: 1px solid black; margin: auto;` +
        `height: ${this.height}px;` +
        `width: ${this.width}px;` +
        `background-color: ${this.bg};` +
        `font-size: ${this.fontSize}px;` +
        `text-align: ${this.textAlign};`;
    }
  }

  let input = document.querySelector("#input"),
    btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    let arr = input.value.split(", ");
    console.log(arr);
    let result = new Options(...arr);
    result.getElement();
  });
});

