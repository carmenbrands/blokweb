// categoriën hoofdmenu
const buttonNav = document.querySelector("header > button");
const hamburgerNav = document.querySelector("header nav:first-of-type");
const buttonNavClose = document.querySelector("header nav button");

const body = document.querySelector("body");

const navContainer = document.querySelector("header > nav > ul");
const secondNav = document.querySelector("header nav:nth-of-type(2)");
const headerForm = document.querySelector("header form");
const main = document.querySelector("main");
const footer = document.querySelector("footer");



// Functies en eventlisteners
function openMenu() {
    console.log("boe");
    hamburgerNav.classList.add("open");
    body.classList.add("antiScroll");

	navContainer.removeAttribute("inert", true);
	secondNav.setAttribute("inert", true);
	headerForm.setAttribute("inert", true);
	main.setAttribute("inert", true);
	footer.setAttribute("inert", true);
	
	
}

buttonNav.addEventListener("click", openMenu);


function closeMenu() {
    hamburgerNav.classList.remove("open");
    body.classList.remove("antiScroll");

	navContainer.setAttribute("inert", true);
	secondNav.removeAttribute("inert", true);
	headerForm.removeAttribute("inert", true);
	main.removeAttribute("inert", true);
	footer.removeAttribute("inert", true);
}

buttonNavClose.addEventListener("click", closeMenu);