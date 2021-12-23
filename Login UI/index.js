//ways of selectiong DoM
// var toggleButtonz = document.getElementsByClassName("toggle-color");
// var toggleButtonH = document.querySelector(".toggle-color-h");
// var toggleButtonC = document.querySelector(".toggle-color-c");

//HEADER
var logo = document.querySelector(".logo");
var header = document.querySelector(".header");
var logoLink = document.querySelector(".logo-link");
var navLink = document.querySelectorAll(".nav-link");

//LOGIN PAGE
var submit = document.getElementById("submit");
var container = document.querySelector(".container");
var dform = document.querySelector(".dform");
var h2 = document.querySelector("h2");
var formInput = document.querySelectorAll(".form-input");
var txt = document.querySelectorAll(".label, .signup, .chh");
var ltoplogo = document.querySelector(".ltop-logo-link");
var ltopnav = document.querySelector(".ltop-nav-link");
var conimg = document.querySelector(".container-h");

function clickh(){
    header.classList.toggle("lg-header");
    logo.classList.toggle("lg-logo");
    logoLink.classList.toggle("lg-txt");
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.toggle("lg-txt");   
    }
    if (conimg.style.filter == "hue-rotate(0deg)") {
        conimg.style.filter = "hue-rotate(180deg)"
    } else{
        conimg.style.filter = "hue-rotate(0deg)"
    }
}

function clickc(){
    submit.classList.toggle("lg-submit");
    container.classList.toggle("lg-container");
    dform.classList.toggle("lg-dform");
    h2.classList.toggle("lg-darktxt");
    for(i=0; i<txt.length; i++){
        txt[i].classList.toggle("lg-darktxt");
    }
    for (j=0; j<formInput.length; j++) {
        formInput[j].classList.toggle("lg-input");
    }
    ltoplogo.classList.toggle("lg-ltop");
    ltopnav.classList.toggle("lg-ltop");
}