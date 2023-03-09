let button = document.querySelector('.order-call__hide')
const menu = document.querySelector('.order-call')

function  flexNav() {
  console.log("flexNav")
  menu.classList.toggle("show")
}

button.addEventListener('click', flexNav);
