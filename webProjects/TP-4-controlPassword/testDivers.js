/*

inputEmail[0].addEventListener("input", (event) => {
    let NbBonsNivxSecurite = parseInt(NbBonnesRep[0].textContent);
    if (event.target.value == "") {
        imgMin3Chiffres[0].style.display = "none";
        imgMin3LettresMin[0].style.display = "none";
        //form__barreDeProgression[0].classList.replace(`change${NbBonsNivxSecurite}`, `change0`);
    } 
    else {
        if ((isRegexValidNumbers(event.target.value) || isRegexValidLettersMin(event.target.value) || isRegexValidLetterMaj(event.target.value) || isRegexValidSpecialChars(event.target.value)) && (NbBonsNivxSecurite === 0 || NbBonsNivxSecurite === 1 || NbBonsNivxSecurite === 2)) {
            imgMin3Chiffres[0].removeAttribute("style");
            imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
            NbBonsNivxSecurite ++;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
            form__barreDeProgression[0].classList.add(`change${NbBonsNivxSecurite}`);
        }
        /*
        if (isRegexValidNumbers(event.target.value) === true && NbBonsNivxSecurite === 0) {
            imgMin3Chiffres[0].removeAttribute("style");
            imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
            NbBonsNivxSecurite ++;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
            form__barreDeProgression[0].classList.add(`change${NbBonsNivxSecurite}`);
        }
        
        else if (isRegexValidNumbers(event.target.value) === false && (NbBonsNivxSecurite === 1 || NbBonsNivxSecurite === 2 || NbBonsNivxSecurite === 3)) {
            imgMin3Chiffres[0].removeAttribute("style");
            imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
            NbBonsNivxSecurite --;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
        }
        /*
        else if (isRegexValidNumbers(event.target.value) === false && NbBonsNivxSecurite === 1) {
            imgMin3Chiffres[0].removeAttribute("style");
            imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
            NbBonsNivxSecurite --;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
        }
        
        else if (isRegexValidNumbers(event.target.value) === false) {
            imgMin3Chiffres[0].removeAttribute("style");
            imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
        }
    }
});

inputEmail[0].addEventListener("input", (event) => {
    let NbBonsNivxSecurite = parseInt(NbBonnesRep[0].textContent);
    if (event.target.value == "") {
        imgMin3Chiffres[0].style.display = "none";
        imgMin3LettresMin[0].style.display = "none";
    } 
    else {
        if (isRegexValidLettersMin(event.target.value) === true && NbBonsNivxSecurite === 1) {
            imgMin3LettresMin[0].removeAttribute("style");
            imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
            NbBonsNivxSecurite ++;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
            form__barreDeProgression[0].classList.add(`change${NbBonsNivxSecurite}`);
        }
        else if (isRegexValidLettersMin(event.target.value) === true && NbBonsNivxSecurite === 0) {
            imgMin3LettresMin[0].removeAttribute("style");
            imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
            NbBonsNivxSecurite ++;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
            form__barreDeProgression[0].classList.add(`change${NbBonsNivxSecurite}`);
        }
        else if (isRegexValidLettersMin(event.target.value) === false && NbBonsNivxSecurite === 2) {
            imgMin3LettresMin[0].removeAttribute("style");
            imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
            NbBonsNivxSecurite --;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
        }
        else if (isRegexValidLettersMin(event.target.value) === false && NbBonsNivxSecurite === 1) {
            imgMin3LettresMin[0].removeAttribute("style");
            imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
            NbBonsNivxSecurite --;
            NbBonnesRep[0].textContent = NbBonsNivxSecurite.toString();
        }
        else if (isRegexValidLettersMin(event.target.value) === false) {
            imgMin3LettresMin[0].removeAttribute("style");
            imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
            form__barreDeProgression[0].classList.remove(`change${NbBonsNivxSecurite}`);
        }
    }
});
*/


/*
isRegexValid = (letter, word) => {
    let regex = new RegExp(`${letter}`, "i");
    return regex.test(word);
};

let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
console.log(strongRegex.test("9La@4555"));
*/
///^(?=(?:[a-z0-9A-Z]*[A-Z]){3})(?=(?:[a-z0-9A-Z]*[a-z]){3})(?=(?:[a-z0-9A-Z]*[0-9]){3})(?=(?:[a-z0-9A-Z]*[!@#\$%\^&\*]){1})[a-zA-Z0-9!@#\$%\^&\*]{8,}$/g
/*
let password = "rL8UaT";
let checkPass = /^(?=(?:[^A-Z]*[A-Z]){3}(?![a-z]*[A-Z]))[A-Za-z0-9]{6,}$/g;
console.log(checkPass.test(password));
console.log(password.match(checkPass));

let password = "rLaBaT";
let checkPass = /^(?=(?:[^A-Z]*[A-Z]){3})[A-Za-z0-9]{6,}$/g;
console.log(checkPass.test(password));
*/
/*
let test = "Hello!test123";
let checkPassBis = /^(?=(?:.*?[a-z]){3})(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){3})(?=(?:.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]){1}).{8,}$/g;
//console.log(checkPassBis.test(test));


FunctionRegexValidNumbers = (word) => {
    return /^(?=(?:.*?[0-9]){3}).{3,}$/g.test(word);
};
FunctionRegexValidLettersMin = (word) => {
    return /^(?=(?:.*?[a-z]){3}).{3,}$/g.test(word);
};
FunctionRegexValidLetterMaj = (word) => {
    return /^(?=.*?[A-Z]).{1,}$/g.test(word);
};
FunctionRegexValidSpecialChars = (word) => {
    return /^(?=(?:.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]){1}).{1,}$/g.test(word);
};

*/