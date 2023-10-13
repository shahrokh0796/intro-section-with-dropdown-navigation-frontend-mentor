import openNav from "../images/icon-close-menu.svg";
import closeNav from "../images/icon-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";

 
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const burgerImg = navToggle.firstElementChild.children[0];
const navExpanded = navToggle.querySelector("button");
console.log(navExpanded.ariaExpanded);
function addNavBackShadow(ele) {
    let bodey = ele;
    bodey.classList.add("backgroundShadow");
}
function removNavBackShadow(ele) {
    let bodey = ele;
    bodey.classList.remove("backgroundShadow");
}


navToggle.addEventListener("click", (e) => {
    navbar.classList.toggle("responsive");
    if (burgerImg.src === `${openNav}`) {
        burgerImg.src = `${closeNav}`;
        navExpanded.ariaExpanded = false;
        removNavBackShadow(body);
        // removNavBackShadow(main);
    } else {
        burgerImg.src = `${openNav}`;
        navExpanded.ariaExpanded = true;
        addNavBackShadow(body);
        // addNavBackShadow(main);
    }
});
