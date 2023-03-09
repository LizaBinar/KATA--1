export function open(className) {
  let element = document.querySelector(className)
  element.style = "height: 100% !important;"
}

export function close(className) {
  let element = document.querySelector(className)
  element.style.height = null;
}

export function buttonReact(classList) {
  const buttonText = this.querySelector('span')
  const buttonImg = this.querySelector('img')
  if (this.dataset.click === "false") {
    this.dataset.click = "true";
    buttonText.textContent = "Скрыть"
    buttonImg.style.transform = "rotate(180deg)"
    open(classList)
  } else {
    this.dataset.click = "false";
    buttonText.textContent = "Показать все"
    buttonImg.style.transform = "rotate(0deg)"
    close(classList)
  }
}

const servicesButton = document.querySelector('.services__expand')
servicesButton.addEventListener('click', buttonReact.bind(servicesButton, '.services__list'))

const repairsButton = document.querySelector('.repairs__expand')
repairsButton.addEventListener('click', buttonReact.bind(repairsButton, '.repairs__list'))

const textButton = document.querySelector('.post__expand')
textButton.addEventListener('click', buttonReact.bind(textButton, '.post__text'))

