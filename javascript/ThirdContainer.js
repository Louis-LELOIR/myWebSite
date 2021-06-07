//using AJAX to get HTML component and put it into index.html
let requestThirdContainer = new XMLHttpRequest();
requestThirdContainer.open("GET", "HTML/thirdContainer/thirdContainer.html", true);
requestThirdContainer.send();
requestThirdContainer.onreadystatechange = () => { 
    if (requestThirdContainer.readyState === 4 && requestThirdContainer.status === 200) {
        document.getElementsByClassName("secondContainer")[0].insertAdjacentHTML('afterend', requestThirdContainer.responseText);
        //============================================================
    }
};