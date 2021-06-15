let element = document.getElementsByClassName("btnSwitchCheckbox");
let bodyElement = document.getElementsByClassName("body");

element[0].addEventListener('click', ()=> {
    if (bodyElement[0].classList.contains("body--light")) {
        bodyElement[0].classList.replace("body--light", "body--dark");
        //console.log("test Light");
    }else if (bodyElement[0].classList.contains("body--dark")) {
        bodyElement[0].classList.replace("body--dark", "body--light");
        //console.log("test Dark");
    }
})