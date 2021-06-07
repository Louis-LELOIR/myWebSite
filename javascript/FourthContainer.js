//using AJAX to get HTML component and put it into index.html
let requestFourthContainer = new XMLHttpRequest();
requestFourthContainer.open("GET", "HTML/fourthContainer/fourthContainer.html", true);
requestFourthContainer.send();
requestFourthContainer.onreadystatechange = () => { 
    if (requestFourthContainer.readyState === 4 && requestFourthContainer.status === 200) {
        document.getElementsByClassName("thirdContainer")[0].insertAdjacentHTML('afterend', requestFourthContainer.responseText);
        //============================================================
        clickOnProjectsBtns();
    }
};