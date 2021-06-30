const inputEmail = document.getElementsByClassName("form__inputEmail");
const isMessageCorrect = document.getElementsByClassName("form__isMessageCorrect");
const sendBtn = document.getElementsByClassName("form__sendBtn");



isRegexValidBis = (word) => {
    return /^[a-z0-9._!-]{1,18}@[a-z]{1,7}\.[a-z]{2,5}$/i.test(word);
};

inputEmail[0].addEventListener("input", (event) => {
    if(isRegexValidBis(event.target.value)) {
        isMessageCorrect[0].setAttribute("src", "../TP-3-REGEX/images/checked.png");
        sendBtn[0].removeAttribute("disabled");
    } else {
        isMessageCorrect[0].setAttribute("src", "../TP-3-REGEX/images/wrong.png");
        sendBtn[0].setAttribute("disabled", "true");
    }
})