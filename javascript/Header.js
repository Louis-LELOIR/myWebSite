//using AJAX to get HTML component and put it into index.html
let request = new XMLHttpRequest();
request.open("GET", "HTML/Header/Header.html", true);
request.send();
request.onreadystatechange = () => { 
    if (request.readyState === 4 && request.status === 200) {
        document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterbegin', request.responseText);
    }
}