const button = document.querySelector('.services__expand')
const buttonText = button.querySelector('span')
const buttonImg = button.querySelector('img')
const listElements = document.querySelector('.services__list')

button.onclick = () => {
    if (button.dataset.click === "false") {
        button.dataset.click = "true";
        buttonText.textContent = "Скрыть"
        buttonImg.style.transform = "rotate(180deg)"
        listElements.style = "height: auto !important;"
    } else {
        button.dataset.click = "false";
        buttonText.textContent = "Показать все"
        buttonImg.style.transform = "rotate(0deg)"
        listElements.style = "height: 165px !important;"
    }
}

