import { buttonReact } from "./expand"

const button = document.querySelector('.services__expand')

button.addEventListener('click', buttonReact.bind(button, '.services__list'))
