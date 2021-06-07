//Functions file
//============================================================
checkFlickerBtns = () => {
    let flickerBtn = document.getElementsByClassName("flickerBtn");
    let indexBtns = document.getElementById("index");
    let forwardBtn = document.getElementsByClassName("btnForward");
    let backBtn = document.getElementsByClassName("btnBack");
    let experience2021 = document.getElementsByClassName("firstContainer__now");
    let experience2020 = document.getElementsByClassName("firstContainer__expe2020");
    let experience2019 = document.getElementsByClassName("firstContainer__expe2019-2020");
    let experience2018 = document.getElementsByClassName("firstContainer__expe2017-2018");
    for (let i = 0 ; i < flickerBtn.length ; i ++) {
        flickerBtn[i].addEventListener('click', () => {
            if (i == 0) {
                experience2021[0].classList.add("changeAnimation");
                experience2020[0].classList.remove("changeAnimation");  
                experience2019[0].classList.remove("changeAnimation");
                experience2018[0].classList.remove("changeAnimation");
                ajaxRequestToGetExperiencesHTML(i);
                index = parseInt(i);
                indexBtns.textContent = index;
                forwardBtn[0].setAttribute("disabled", "true");
                forwardBtn[0].style.opacity = ".3";
                forwardBtn[0].style.cursor = "auto";
                backBtn[0].removeAttribute("disabled");
                backBtn[0].style.opacity = "1";
                backBtn[0].style.cursor = "pointer";
            }
            else if (i == 1) {
                experience2020[0].classList.add("changeAnimation");
                experience2021[0].classList.remove("changeAnimation");  
                experience2019[0].classList.remove("changeAnimation");
                experience2018[0].classList.remove("changeAnimation");
                ajaxRequestToGetExperiencesHTML(i);
                index = parseInt(i);
                indexBtns.textContent = index;
                backBtn[0].removeAttribute("disabled");
                backBtn[0].style.opacity = "1";
                backBtn[0].style.cursor = "pointer";
                forwardBtn[0].removeAttribute("disabled");
                forwardBtn[0].style.opacity = "1";
                forwardBtn[0].style.cursor = "pointer";
            }
            else if (i == 2) {
                experience2019[0].classList.add("changeAnimation");
                experience2018[0].classList.remove("changeAnimation");  
                experience2020[0].classList.remove("changeAnimation");
                experience2021[0].classList.remove("changeAnimation"); 
                ajaxRequestToGetExperiencesHTML(i);
                index = parseInt(i);
                indexBtns.textContent = index;
                backBtn[0].removeAttribute("disabled");
                backBtn[0].style.opacity = "1";
                backBtn[0].style.cursor = "pointer";
                forwardBtn[0].removeAttribute("disabled");
                forwardBtn[0].style.opacity = "1";
                forwardBtn[0].style.cursor = "pointer";
            }
            else if (i == 3) {
                experience2018[0].classList.add("changeAnimation");
                experience2019[0].classList.remove("changeAnimation");  
                experience2020[0].classList.remove("changeAnimation");
                experience2021[0].classList.remove("changeAnimation");
                ajaxRequestToGetExperiencesHTML(i);
                index = parseInt(i);
                indexBtns.textContent = index;
                backBtn[0].setAttribute("disabled", "true");
                backBtn[0].style.opacity = ".3";
                backBtn[0].style.cursor = "auto";
                forwardBtn[0].removeAttribute("disabled");
                forwardBtn[0].style.opacity = "1";
                forwardBtn[0].style.cursor = "pointer";
            }
        })
    }
};
//============================================================
ajaxRequestToGetExperiencesHTML = (i) => {
    if (i == 3) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2018-exp/2018.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("firstContainer__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("firstContainer__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 2) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2019-exp/2019.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("firstContainer__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("firstContainer__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 1) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2020-exp/2020.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("firstContainer__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("firstContainer__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
    else if (i == 0) {
        let requestHTMLexp = new XMLHttpRequest();
        requestHTMLexp.open("GET", "HTML/FirstContainer/2021-exp/2021.html", true);
        requestHTMLexp.send();
        requestHTMLexp.onreadystatechange = () => { 
            if (requestHTMLexp.readyState === 4 && requestHTMLexp.status === 200) {
                document.getElementsByClassName("firstContainer__descriptif")[0].innerHTML = '';
                document.getElementsByClassName("firstContainer__descriptif")[0].insertAdjacentHTML('afterbegin', requestHTMLexp.responseText);
            }
        }
    }
};
//============================================================
clickOnForwardAndBackBtns = () => {
    let forwardBtn = document.getElementsByClassName("btnForward");
    let backBtn = document.getElementsByClassName("btnBack");
    let indexBtns = document.getElementById("index");
    let experience2021 = document.getElementsByClassName("firstContainer__now");
    let experience2020 = document.getElementsByClassName("firstContainer__expe2020");
    let experience2019 = document.getElementsByClassName("firstContainer__expe2019-2020");
    let experience2018 = document.getElementsByClassName("firstContainer__expe2017-2018");
    //================================================
    forwardBtn[0].addEventListener("click", () => {
        let index = parseInt(indexBtns.textContent);
        index--;
        if (index == 2) {
            experience2019[0].classList.add("changeAnimation");
            experience2018[0].classList.remove("changeAnimation");  
            experience2020[0].classList.remove("changeAnimation");
            experience2021[0].classList.remove("changeAnimation"); 
            ajaxRequestToGetExperiencesHTML(index);
            backBtn[0].removeAttribute("disabled");
            backBtn[0].style.opacity = "1";
            backBtn[0].style.cursor = "pointer";
        }
        else if (index == 1) {
            experience2020[0].classList.add("changeAnimation");
            experience2021[0].classList.remove("changeAnimation");  
            experience2019[0].classList.remove("changeAnimation");
            experience2018[0].classList.remove("changeAnimation");
            ajaxRequestToGetExperiencesHTML(index);
            backBtn[0].removeAttribute("disabled");
            backBtn[0].style.opacity = "1";
            backBtn[0].style.cursor = "pointer";
        }
        else if (index == 0) {
            experience2021[0].classList.add("changeAnimation");
            experience2020[0].classList.remove("changeAnimation");  
            experience2019[0].classList.remove("changeAnimation");
            experience2018[0].classList.remove("changeAnimation");
            ajaxRequestToGetExperiencesHTML(index);
            forwardBtn[0].setAttribute("disabled", "true");
            forwardBtn[0].style.opacity = ".3";
            forwardBtn[0].style.cursor = "auto";
        }
        indexBtns.textContent = index;
    });
    backBtn[0].addEventListener("click", () => {
        let index = parseInt(indexBtns.textContent);
        index++;
        if (index == 1) {
            experience2020[0].classList.add("changeAnimation");
            experience2021[0].classList.remove("changeAnimation");  
            experience2019[0].classList.remove("changeAnimation");
            experience2018[0].classList.remove("changeAnimation");
            ajaxRequestToGetExperiencesHTML(index);
            forwardBtn[0].removeAttribute("disabled");
            forwardBtn[0].style.opacity = "1";
            forwardBtn[0].style.cursor = "pointer";
        }
        else if (index == 2) {
            experience2019[0].classList.add("changeAnimation");
            experience2018[0].classList.remove("changeAnimation");  
            experience2020[0].classList.remove("changeAnimation");
            experience2021[0].classList.remove("changeAnimation"); 
            ajaxRequestToGetExperiencesHTML(index);
            backBtn[0].removeAttribute("disabled");
            backBtn[0].style.opacity = "1";
            backBtn[0].style.cursor = "pointer";
        }
        else if (index == 3) {
            experience2018[0].classList.add("changeAnimation");
            experience2019[0].classList.remove("changeAnimation");  
            experience2020[0].classList.remove("changeAnimation");
            experience2021[0].classList.remove("changeAnimation");
            ajaxRequestToGetExperiencesHTML(index);
            backBtn[0].setAttribute("disabled", "true");
            backBtn[0].style.opacity = ".3";
            backBtn[0].style.cursor = "auto";
        }
        indexBtns.textContent = index;
    });
}
//============================================================
clickOnProjectsBtns = () => {
    let titleProjects = document.getElementsByClassName("projectsNamesMenu__title");
    for(let i = 0 ; i<titleProjects.length ; i++) {
        titleProjects[i].addEventListener("click", () => {
            if (i == 0) {
                titleProjects[0].style.backgroundColor = "#666666";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
            else if (i == 1) {
                titleProjects[1].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
            else if (i == 2) {
                titleProjects[2].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[3].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);

            }
            else if (i == 3) {
                titleProjects[3].style.backgroundColor = "#666666";
                titleProjects[0].style.backgroundColor = "#333333";
                titleProjects[1].style.backgroundColor = "#333333";
                titleProjects[2].style.backgroundColor = "#333333";
                ajaxRequestToGetProjectsHTML(i);
            }
        })
    }
}
//============================================================
ajaxRequestToGetProjectsHTML = (i) => {
    if (i == 3) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/modulesAnalyse/modulesAnalyse.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 2) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/animations-regex/animations-regex.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 1) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/sitesWebFictifs/sitesWebFictifs.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
    else if (i == 0) {
        let requestHTMLproject = new XMLHttpRequest();
        requestHTMLproject.open("GET", "HTML/fourthContainer/mini-jeux/mini-jeux.html", true);
        requestHTMLproject.send();
        requestHTMLproject.onreadystatechange = () => { 
            if (requestHTMLproject.readyState === 4 && requestHTMLproject.status === 200) {
                document.getElementsByClassName("visualFrameProjects")[0].innerHTML = '';
                document.getElementsByClassName("visualFrameProjects")[0].insertAdjacentHTML('afterbegin', requestHTMLproject.responseText);
            }
        }
    }
};
//============================================================