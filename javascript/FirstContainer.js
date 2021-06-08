//using AJAX to get HTML component and put it into index.html
/*
let requestFirstContainer = new XMLHttpRequest();
requestFirstContainer.open("GET", "HTML/FirstContainer/FirstContainer.html", true);
requestFirstContainer.send();
requestFirstContainer.onreadystatechange = () => { 
    if (requestFirstContainer.readyState === 4 && requestFirstContainer.status === 200) {
        document.getElementsByClassName("presentation")[0].insertAdjacentHTML('afterend', requestFirstContainer.responseText);
        //============================================================
        let backBtn = document.getElementsByClassName("btnBack");
        backBtn[0].setAttribute("disabled", "true");
        backBtn[0].style.opacity = ".3";
        backBtn[0].style.cursor = "auto";
        //============================================================
        checkFlickerBtns();
        //============================================================
        clickOnForwardAndBackBtns();
    }
};
*/
//============================================================
let backBtn = document.getElementsByClassName("btnBack");
backBtn[0].setAttribute("disabled", "true");
backBtn[0].style.opacity = ".3";
backBtn[0].style.cursor = "auto";
//============================================================
checkFlickerBtns();
//============================================================
clickOnForwardAndBackBtns();