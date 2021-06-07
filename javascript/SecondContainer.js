//using AJAX to get HTML component and put it into index.html
let requestSecondContainer = new XMLHttpRequest();
requestSecondContainer.open("GET", "HTML/secondContainer/secondContainer.html", true);
requestSecondContainer.send();
requestSecondContainer.onreadystatechange = () => { 
    if (requestSecondContainer.readyState === 4 && requestSecondContainer.status === 200) {
        document.getElementsByClassName("firstContainer")[0].insertAdjacentHTML('afterend', requestSecondContainer.responseText);
        //============================================================
    }
};