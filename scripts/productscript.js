console.log("himmm");

// Productfoto's carousel
const productImgBig = document.querySelector("main > section:nth-of-type(2) > figure img");
const productImg1 = document.querySelector("main > section:nth-of-type(2) > ul li:first-of-type img");
const productImg1Src = document.querySelector("main > section:nth-of-type(2) > ul li:first-of-type img").src;

const productImg2 = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(2) img");
const productImg2Src = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(2) img").src;

const productImg3 = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(3) img");
const productImg3Src = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(3) img").src;

const productImg4 = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(4) img");
const productImg4Src = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(4) img").src;

const productImg5 = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(5) img");
const productImg5Src = document.querySelector("main > section:nth-of-type(2) > ul li:nth-of-type(5) img").src;

var lastClickedImg;
var lastClickedImgSrc;


// Productspecificaties openen
const buttonSpecsOpenen = document.querySelector("main > section:nth-of-type(4) button");
const tableSpecs = document.querySelector("main > section:nth-of-type(4) > section");
const ButtontableSpecsSluiten = document.querySelector("main > section:nth-of-type(4) > section button");

buttonSpecsOpenen.addEventListener("click", specsMenu);
ButtontableSpecsSluiten.addEventListener("click", specsMenu)

function specsMenu() {
    console.log("kaas");
    if (tableSpecs.classList.contains("specsOpen")) {
        tableSpecs.classList.remove("specsOpen");
    } else {
        tableSpecs.classList.add("specsOpen");
    }
}

productImg1.addEventListener("click", productImg1click);
productImg2.addEventListener("click", productImg2click);
productImg3.addEventListener("click", productImg3click);
productImg4.addEventListener("click", productImg4click);
productImg5.addEventListener("click", productImg5click);

function productImg1click() {

    lastClickedImg = productImg1;
    lastClickedImgSrc = productImg1Src;

    showImageBig();
}

function productImg2click() {

    lastClickedImg = productImg2;
    lastClickedImgSrc = productImg2Src;

    showImageBig();
}

function productImg3click() {

    lastClickedImg = productImg3;
    lastClickedImgSrc = productImg3Src;

    showImageBig();
}

function productImg4click() {

    lastClickedImg = productImg4;
    lastClickedImgSrc = productImg4Src;

    showImageBig();
}

function productImg5click() {

    lastClickedImg = productImg5;
    lastClickedImgSrc = productImg5Src;

    showImageBig();
}

function showImageBig() {
    productImgBig.src = lastClickedImgSrc;

}