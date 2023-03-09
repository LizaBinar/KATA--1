let button = document.querySelector('.feedback__hide')
const menu = document.querySelector('.feedback')

function  flexNav() {
  menu.classList.toggle("show")
}

button.addEventListener('click', flexNav);
