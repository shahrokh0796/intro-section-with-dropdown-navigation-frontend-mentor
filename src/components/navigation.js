import openNav from "../images/icon-close-menu.svg";
import closeNav from "../images/icon-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";


const featuresDropDown = document.querySelector("#menu-products-one");
const companyDropDown = document.querySelector("#menu-products-two");
const featuresImg = document.querySelector(".nav-arrow-first");
const companyImg = document.querySelector(".nav-arrow-second");
const nav = document.querySelector(".nav");
const toggleNav = document.querySelector(".nav-toggle");
const toggleBurger = document.querySelector("#toggle-burger");

function changeArrows (source, elem) {
    let src = source;
    elem.src = src;
    return src;
}

featuresDropDown.addEventListener("mouseover", () => {
    changeArrows (arrowUp, featuresImg);
});

companyDropDown.addEventListener("mouseover", () => {
    changeArrows (arrowUp, companyImg);
});

featuresDropDown.addEventListener("mouseout", () => {
    changeArrows (arrowDown, featuresImg);
});

companyDropDown.addEventListener("mouseout", () => {
    changeArrows (arrowDown, companyImg);
});


function responsiveNav() {
    // debugger;
    if (toggleBurger.src == closeNav) {
        toggleBurger.src = openNav;
        nav.classList.add("responsive");
    } else {
        toggleBurger.src = closeNav;
        nav.classList.remove("responsive");
        console.log("remove");
    }
}
toggleNav.addEventListener("click", responsiveNav);