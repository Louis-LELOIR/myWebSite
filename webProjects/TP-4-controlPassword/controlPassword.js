const inputEmail = document.getElementsByClassName("form__inputEmail");

const imgMin3Chiffres = document.getElementsByClassName("imgMin3Chiffres");
const imgMin3LettresMin = document.getElementsByClassName("imgMin3LettresMin");
const imgMin1LetterMaj = document.getElementsByClassName("imgMin1LetterMaj");
const imgMin1SpecialCaracter = document.getElementsByClassName("imgMin1SpecialCaracter");

const sendBtn = document.getElementsByClassName("form__sendBtn");
const form__barreDeProgression = document.getElementsByClassName("form__barreDeProgression");


inputEmail[0].addEventListener("input", (event) => {
    let pass = event.target.value;
    checkStrength(pass);
});

checkStrength = (password) => {
    let strength = 0;
    //if password contains at least 3 numbers
    if (password.match(/^(?=(?:.*?[0-9]){3}).{3,}$/g)) {
        strength += 1;
        imgMin3Chiffres[0].removeAttribute("style");
        imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
    } else {
        imgMin3Chiffres[0].removeAttribute("style");
        imgMin3Chiffres[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
    }

    //if password contains at least 3 minuscul letters
    if (password.match(/^(?=(?:.*?[a-z]){3}).{3,}$/g)) {
        strength += 1;
        imgMin3LettresMin[0].removeAttribute("style");
        imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
    } else {
        imgMin3LettresMin[0].removeAttribute("style");
        imgMin3LettresMin[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
    }

    //if password contains at least 1 majuscul letter
    if (password.match(/^(?=.*?[A-Z]).{1,}$/g)) {
        strength += 1;
        imgMin1LetterMaj[0].removeAttribute("style");
        imgMin1LetterMaj[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
    } else {
        imgMin1LetterMaj[0].removeAttribute("style");
        imgMin1LetterMaj[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
    }

    //if password contains at least 1 special caracter
    if (password.match(/^(?=(?:.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]){1}).{1,}$/g)) {
        strength += 1;
        imgMin1SpecialCaracter[0].removeAttribute("style");
        imgMin1SpecialCaracter[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
    } else {
        imgMin1SpecialCaracter[0].removeAttribute("style");
        imgMin1SpecialCaracter[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
    }

    //check the password's strenght
    if(strength == 0) {
        checkIfNumberChangeIsPresent();
        form__barreDeProgression[0].classList.add(`change0`);
        sendBtn[0].setAttribute("disabled", "true");
    }
    else if (strength == 1) {
        checkIfNumberChangeIsPresent();
        form__barreDeProgression[0].classList.add(`change1`);
        sendBtn[0].setAttribute("disabled", "true");
    }
    else if (strength == 2) {
        checkIfNumberChangeIsPresent();
        form__barreDeProgression[0].classList.add(`change2`);
        sendBtn[0].setAttribute("disabled", "true");
    }
    else if (strength == 3) {
        checkIfNumberChangeIsPresent();
        form__barreDeProgression[0].classList.add(`change3`);
        sendBtn[0].setAttribute("disabled", "true");
    }
    else if (strength == 4) {
        checkIfNumberChangeIsPresent();
        form__barreDeProgression[0].classList.add(`change4`);
        sendBtn[0].removeAttribute("disabled");
    }
}

checkIfNumberChangeIsPresent = () => {
    for(let i = 0 ; i <= 4 ; i++) {
        if (form__barreDeProgression[0].classList.contains(`change${i}`)) {
            form__barreDeProgression[0].classList.remove(`change${i}`);
        }
    }
}