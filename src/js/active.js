function activeClick (activeClass) {
  const activeElement = document.querySelector("." + activeClass)
  activeElement.classList.remove(activeClass)
  this.classList.add(activeClass)
}

const elementsPosts = document.querySelectorAll(".nav-page__link")
for(let i = 0; i < elementsPosts.length; i++) {
  elementsPosts[i].addEventListener("click", activeClick.bind(elementsPosts[i], "nav-page__link--active"));
}

const elementsAside = document.querySelectorAll(".menu__link")
for(let i = 0; i < elementsAside.length; i++) {
  elementsAside[i].addEventListener("click", activeClick.bind(elementsAside[i], "menu__link--active"));
}

const elementsLanguage = document.querySelectorAll(".language-selection__button")
for(let i = 0; i < elementsLanguage.length; i++) {
  elementsLanguage[i].addEventListener("click", activeClick.bind(elementsLanguage[i], "language-selection__button--active"));
}
