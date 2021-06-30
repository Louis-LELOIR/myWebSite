let element = document.getElementsByClassName("btnSwitchCheckbox");
let bodyElement = document.getElementsByClassName("body");
let linkToDownloadCV = document.getElementsByClassName("footer__download");

element[0].addEventListener('click', ()=> {
    if (bodyElement[0].classList.contains("body--light")) {
        bodyElement[0].classList.replace("body--light", "body--dark");
        linkToDownloadCV[0].setAttribute('href', "mockup/CV-LouisPLAQUET--dark.pdf");
    }else if (bodyElement[0].classList.contains("body--dark")) {
        bodyElement[0].classList.replace("body--dark", "body--light");
        linkToDownloadCV[0].setAttribute('href', "mockup/CV-LouisPLAQUET--light.pdf");
    }
})