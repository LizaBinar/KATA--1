export function removeAllShow() {
  let elements = document.querySelectorAll('.show')
  for(let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("show");
  }
  const mainPage = document.querySelector(".main-page")
  mainPage.classList.remove("none-scroll")
}

let buttonsHide = document.querySelectorAll('.hide')

for(let i = 0; i < buttonsHide.length; i++) {
  buttonsHide[i].addEventListener("click", removeAllShow);
}

let glassElements = document.querySelectorAll('.glass')

for(let i = 0; i < glassElements.length; i++) {
  glassElements[i].addEventListener("click", removeAllShow);
}

