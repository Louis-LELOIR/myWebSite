const btnTransition = document.querySelector('.transition');
const btnTransitionBis = document.querySelector('.transitionBis');
const reserve = document.querySelector('.reserve');



btnTransition.addEventListener ('click', () => {
    reserve.classList.toggle('change1');
});

btnTransitionBis.addEventListener ('click', () => {
    reserve.classList.toggle('change2');
});



const listOfWords = [
    "anticorruption",
    "vraisemblances",
    "aboiements",
    "boursoufflement"
];

const listOfChanges= [
    "change1",
    "change2",
    "change3",
    "change4",
    "change5",
    "change6",
    "change7",
    "change8",
    "change9"
];


let randomNumber = 2;

let objectIndexLetter = {};


const zoneMotDeterminer__tirets = document.getElementsByClassName("zoneMotDeterminer__tirets");
for (let i = 0 ; i<listOfWords[randomNumber].length ; i++) {
    listOfWords[randomNumber] = listOfWords[randomNumber].toUpperCase();
    let letter = listOfWords[randomNumber].charAt(i);
    //let addLetter = `<span class="lettre${i}">${letter}</span>`;
    let addLetter = document.createElement("span");
    addLetter.setAttribute("class", `lettreToFind ${i}`);
    //addLetter.textContent = `${letter}`;
    addLetter.textContent = ``;
    zoneMotDeterminer__tirets[0].appendChild(addLetter);
    objectIndexLetter[`${i}`] =  `${letter}`;
}
//console.log(objectIndexLetter);

const letter = document.getElementsByClassName('letter');
const spanLetterToFind = document.getElementsByClassName("lettreToFind");
const spanNbErrors = document.getElementById("nbErreurs");


isRegexValid = (letter, word) => {
    let regex = new RegExp(`${letter}`, "i");
    return regex.test(word);
};


let numberErrors = parseInt(spanNbErrors.textContent);

//console.log(objectIndexLetter);

for(let i=0 ; i<letter.length ; i++) {
     letter[i].addEventListener ('click', () => {
        for (const key in objectIndexLetter) {
            if (letter[i].textContent == objectIndexLetter[key]) {
                for (let b=0 ; b < spanLetterToFind.length; b++) {
                    if (spanLetterToFind[b].classList.contains(key)) {
                        spanLetterToFind[b].textContent = letter[i].textContent;
                    }
                }
            } else if (letter[i].textContent != objectIndexLetter[key] && isRegexValid(letter[i].textContent,listOfWords[randomNumber]) == false){
                //console.log("Cette lettre n'est pas dans les valeurs de l'objet");
                console.log(`${key}`);
                reserve.classList.add(`change${numberErrors}`);
                numberErrors ++;
                spanNbErrors. textContent = numberErrors.toString();
            }
        }
    })
}