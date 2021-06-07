const btnTransition = document.querySelector('.transition');
const btnTransitionBis = document.querySelector('.transitionBis');
const reserve = document.querySelector('.reserve');
const letter = document.getElementsByClassName('letter');
const spanLetterToFind = document.getElementsByClassName("lettreToFind");
const spanNbErrors = document.getElementById("nbErreurs");
const zoneMotDeterminer__tirets = document.getElementsByClassName("zoneMotDeterminer__tirets");
const nbLettresChoisies = document.getElementById("nbLettresChoisies");
const zoneAlphabet = document.getElementById("zoneAlphabet");

isRegexValid = (letter, word) => {
    let regex = new RegExp(`${letter}`, "i");
    return regex.test(word);
};

const listOfWords = [
    "anticorruption",
    "vraisemblances",
    "aboiements",
    "boursoufflement"
];

let randomNumber = 1;
let objectIndexLetter = {};

for (let i = 0 ; i<listOfWords[randomNumber].length ; i++) {
    listOfWords[randomNumber] = listOfWords[randomNumber].toUpperCase();
    let letter = listOfWords[randomNumber].charAt(i);
    let addLetter = document.createElement("span");
    addLetter.setAttribute("class", `lettreToFind ${i}`);
    addLetter.textContent = ``;
    zoneMotDeterminer__tirets[0].appendChild(addLetter);
    objectIndexLetter[`${i}`] =  `${letter}`;
}

for(let i=0 ; i<letter.length ; i++) {
     letter[i].addEventListener ('click', (event) => {

        if (isRegexValid(event.target.textContent, listOfWords[randomNumber])) {
            for (const key in objectIndexLetter) {
                if (event.target.textContent == objectIndexLetter[key]) {
                    for (let b=0 ; b < spanLetterToFind.length; b++) {
                        if (spanLetterToFind[b].classList.contains(key)) {
                            spanLetterToFind[b].textContent = letter[i].textContent;
                        }
                    }
                }
            }
        } else {
            let numberErrors = parseInt(spanNbErrors.textContent);
            if (numberErrors < 8) {
                numberErrors ++;
                spanNbErrors.textContent = numberErrors.toString();
                reserve.classList.add(`change${numberErrors}`);
                nbLettresChoisies.textContent += `${event.target.textContent}-`
            } else if (numberErrors == 8) {
                numberErrors ++;
                spanNbErrors.textContent = numberErrors.toString();
                reserve.classList.add(`change${numberErrors}`);
                nbLettresChoisies.textContent += `${event.target.textContent}-`
                spanNbErrors.textContent = "Vous avez perdu !";
                zoneAlphabet.style.display = "none";
            }
        }
    })
}