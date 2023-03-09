import { removeAllShow } from "./aside"

let buttons = document.querySelectorAll('.feedback-button')
const menu = document.querySelector('.feedback')

function  flexNav() {
  removeAllShow()
  menu.classList.toggle("show")
}

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", flexNav);
}
