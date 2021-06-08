//using AJAX to get HTML component and put it into index.html
/*
let requestPresentation = new XMLHttpRequest();
requestPresentation.open("GET", "HTML/Presentation/presentation.html", true);
requestPresentation.send();
requestPresentation.onreadystatechange = () => { 
    if (requestPresentation.readyState === 4 && requestPresentation.status === 200) {
        document.getElementsByClassName("navBar")[0].insertAdjacentHTML('afterend', requestPresentation.responseText);
        //============================================================
        scrollAnimation();
    }
};
*/
scrollAnimation();