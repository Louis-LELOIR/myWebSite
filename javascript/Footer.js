//using AJAX to get HTML component and put it into index.html
let requestFooter = new XMLHttpRequest();
requestFooter.open("GET", "HTML/footer/footer.html", true);
requestFooter.send();
requestFooter.onreadystatechange = () => { 
    if (requestFooter.readyState === 4 && requestFooter.status === 200) {
        document.getElementsByClassName("fourthContainer")[0].insertAdjacentHTML('afterend', requestFooter.responseText);
        //============================================================
    }
};