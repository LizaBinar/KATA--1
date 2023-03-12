import { removeAllShow } from "./aside"

function  show(menu) {
  console.log(menu)
  removeAllShow()
  menu.classList.toggle("show")
  const mainPage = document.querySelector(".main-page")
  mainPage.classList.add("none-scroll")
}

let buttonsCall = document.querySelectorAll('.phone-button')
const menuCall = document.querySelector('.order-call')

for(let i = 0; i < buttonsCall.length; i++) {
  buttonsCall[i].addEventListener("click", show.bind(buttonsCall[i], menuCall));
}

let buttonsFeedback = document.querySelectorAll('.feedback-button')
const menuFeedback = document.querySelector('.feedback')

for(let i = 0; i < buttonsFeedback.length; i++) {
  buttonsFeedback[i].addEventListener("click", show.bind(buttonsFeedback[i], menuFeedback));
}

let buttonAside = document.querySelector('.menu-button')
const menuAside = document.querySelector('.aside')

buttonAside.addEventListener('click', show.bind(buttonAside, menuAside));

