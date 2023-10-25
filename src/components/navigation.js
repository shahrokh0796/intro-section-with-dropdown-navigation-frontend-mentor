import openNav from "../images/icon-close-menu.svg";
import closeNav from "../images/icon-menu.svg";


 
const navbar = document.querySelector(".navbar");
const backgroundShadow = document.querySelector(".navshadow");
const navToggle = document.querySelector(".nav-toggle");
const dropFeatures = document.querySelector(".btn-dropdown-fe");
const dropCompany = document.querySelector(".btn-dropdown-co");
const subMenus = document.querySelectorAll(".sub-menu");
const burgerImg = navToggle.firstElementChild.children[0];
const navExpanded = navToggle.querySelector("button");



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
        backgroundShadow.classList.add("display-none");
        removNavBackShadow(backgroundShadow);
    } else {
        burgerImg.src = `${openNav}`;
        navExpanded.ariaExpanded = true;
        backgroundShadow.classList.remove("display-none");
        addNavBackShadow(backgroundShadow);
    }
});

function expandAria (elem) {
    elem.ariaExpanded = true;
}

function collapseAria (elem) {
    elem.ariaExpanded = false;
}

function dropdownAccessibility (ele, index) {
    if (ele[index].classList.contains("display-block")) {
        ele[index].classList.remove("display-block");
        collapseAria(dropFeatures);
        collapseAria(dropCompany);
        console.log(dropFeatures.getAttribute("aria-expanded"));
        // ele[index].classList.add("display-none");
        // ele[index].ariaExpanded = "false";
    } else {
        ele[index].classList.add("display-block");
        expandAria(dropFeatures);
        expandAria(dropCompany);
        console.log(dropFeatures.getAttribute("aria-expanded"));
        // ele[index].classList.remove("display-none");
        // ele[index].ariaExpanded ="true";
        // console.log(ele[index].ariaExpanded);
    }
    // if (ele[index].style.display === "block") {
    //     ele[index].style.display = "none";
    //     console.log()
    //     ele[index].ariaExpanded = "false";
    // } else {
    //     ele[index].style.display = "block";
    //     ele[index].ariaExpanded = "true";
    // }
    
}

dropFeatures.addEventListener("click", (e) => {
    dropdownAccessibility(subMenus, 0);
});
dropCompany.addEventListener("click", (e) => {
    dropdownAccessibility(subMenus, 1);
});

