export function removeAllShow() {
  let elements = document.querySelectorAll('.show')
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("show");
  }
}


let buttons = document.querySelectorAll('.hide')

function  flexNav() {
  removeAllShow()
}

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", flexNav);
}
