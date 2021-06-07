//using AJAX to get HTML component and put it into index.html
let requestNavbar = new XMLHttpRequest();
requestNavbar.open("GET", "HTML/NavBar/NavBar.html", true);
requestNavbar.send();
requestNavbar.onreadystatechange = () => { 
    if (requestNavbar.readyState === 4 && requestNavbar.status === 200) {
        document.getElementsByClassName("header")[0].insertAdjacentHTML('afterend', requestNavbar.responseText);
    }
};