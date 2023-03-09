let button = document.querySelector('.menu-button')
const menu = document.querySelector('.aside')

function  flexNav() {
  console.log("flexNav")
  menu.classList.toggle("show")
}

button.addEventListener('click', flexNav);
