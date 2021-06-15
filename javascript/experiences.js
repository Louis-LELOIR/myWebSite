let interupteurs = document.getElementsByClassName("btnSwitchCheckbox");

for (let i = 0 ; i < interupteurs.length ; i++) {
    interupteurs[i].addEventListener("click", () => {
        if (i == 1) {
            //console.log("TEST 2021")
            interupteurs[2].checked = false;
            interupteurs[3].checked = false;
            interupteurs[4].checked = false;
            ajaxRequestToGetExperiencesHTML(i);
        }
        if (i == 2) {
            //console.log("TEST 2020");
            interupteurs[1].checked = false;
            interupteurs[3].checked = false;
            interupteurs[4].checked = false;
            ajaxRequestToGetExperiencesHTML(i);
        }
        if (i == 3) {
            //console.log("TEST 2019");
            interupteurs[1].checked = false;
            interupteurs[2].checked = false;
            interupteurs[4].checked = false;
            ajaxRequestToGetExperiencesHTML(i);
        }
        if (i == 4) {
            //console.log("TEST 2018");
            interupteurs[1].checked = false;
            interupteurs[2].checked = false;
            interupteurs[3].checked = false;
            ajaxRequestToGetExperiencesHTML(i);
        }
    })
}
//============================================================
ajaxRequestToGetExperiencesHTML = (i) => {
    if (i == 4) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2018-exp/2018.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("experiences__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("experiences__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 3) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2019-exp/2019.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("experiences__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("experiences__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 2) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2020-exp/2020.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("experiences__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("experiences__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 1) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2021-exp/2021.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("experiences__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("experiences__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
};