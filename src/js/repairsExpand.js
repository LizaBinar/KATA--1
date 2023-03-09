import { buttonReact } from "./expand"

const button = document.querySelector('.repairs__expand')
button.addEventListener('click', buttonReact.bind(button, '.repairs__list'))
