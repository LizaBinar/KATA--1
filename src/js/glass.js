import { removeAllShow } from "./aside"

let buttons = document.querySelectorAll('.glass')

function  flexNav() {
  console.log("glass")
  removeAllShow()
}

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", flexNav);
}
