let button = document.querySelector('.hide-menu')
const menu = document.querySelector('.aside')

function hideNav() {
  console.log("hideNav")
  menu.classList.toggle("show")
}


button.addEventListener('click', hideNav);
// menu.addEventListener('transitionend', noneNav);

