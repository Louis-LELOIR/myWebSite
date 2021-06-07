
let img = document.getElementById("image");
let numberProposed = document.getElementById("numberProposed");
let numberOfTrials= document.getElementById("numberOfTrials");
let btn = document.getElementById("checkPrice");
let debuterPartie = document.getElementsByClassName("debuterPartie");
let startNewGame = document.getElementById("startNewGame?");
let refPartie = document.getElementById("refPartie");
let indice = document.getElementById("indice");


let listofImages = [
    {
        objectTitle: "chaussures",
        objectPrice: Math.floor((Math.random() * 100)),
        objectPath: "../TP-1-justePrix/images/chaussures.png",
        objectMusic: "/TP-1-justePrix/songs/mixkit-winning-chimes-2015.mp3",
    },
    {
        objectTitle: "cendrier",
        objectPrice: Math.floor((Math.random() * 100)),
        objectPath: "../TP-1-justePrix/images/cendrier.png",
        objectMusic: "../TP-1-justePrix/songs/mixkit-winning-chimes-2015.mp3",
    },
    {
        objectTitle: "brosse à dents",
        objectPrice: Math.floor((Math.random() * 100)),
        objectPath: "../TP-1-justePrix/images/brosseDents.png",
        objectMusic: "../TP-1-justePrix/songs/mixkit-winning-chimes-2015.mp3",
    },
    {
        objectTitle: "mug",
        objectPrice: Math.floor((Math.random() * 100)),
        objectPath: "../TP-1-justePrix/images/mug.png",
        objectMusic: "../TP-1-justePrix/songs/mixkit-winning-chimes-2015.mp3",
    },
    {
        objectTitle: "clavier",
        objectPrice: Math.floor((Math.random() * 100)),
        objectPath: "../TP-1-justePrix/images/clavier.png",
        objectMusic: "../TP-1-justePrix/songs/mixkit-winning-chimes-2015.mp3",
    },
];

let createGame = () => {
    refPartie.textContent = Math.floor((Math.random() * listofImages.length));
    img.setAttribute("src", listofImages[parseInt(refPartie.textContent)].objectPath);
    numberOfTrials.textContent = "1";
    debuterPartie[1].setAttribute("disabled", "true");
    numberProposed.setAttribute("value", "1");
    indice.textContent = "Indice : ";
};

debuterPartie[0].addEventListener('click', () => createGame());
debuterPartie[1].addEventListener('click', () => createGame());


let btnCheck = () => {
    let indexPrice = parseInt(refPartie.textContent);
    let number = parseInt(numberProposed.value);
    let numberTrial = parseInt(numberOfTrials.textContent);

    if (numberTrial < 10) {
        if (number === listofImages[indexPrice].objectPrice) {
            indice.textContent = "Félicitations ! Vous avez trouvé le juste prix ! Voulez-vous rejouer ?";
            let audio = new Audio(listofImages[indexPrice].objectMusic);
            audio.play();
            debuterPartie[1].removeAttribute("disabled");
        } else if (number > listofImages[indexPrice].objectPrice) {
            indice.textContent = "Indice : c'est moins !";
            numberTrial ++;
            numberOfTrials.textContent = numberTrial.toString();
        } else if (number < listofImages[indexPrice].objectPrice) {
            indice.textContent = "Indice : c'est plus !";
            numberTrial ++;
            numberOfTrials.textContent = numberTrial.toString();
        }
    } else if (numberTrial === 10) {
        if (number === listofImages[indexPrice].objectPrice) {
            indice.textContent = "Félicitations ! Vous avez trouvé le juste prix ! Voulez-vous rejouer ?";
            let audio = new Audio(listofImages[indexPrice].objectMusic);
            audio.play();
            debuterPartie[1].removeAttribute("disabled");
        } else {
            numberOfTrials.textContent = "terminé";
            indice.textContent = "Perdu ! Vous avez atteint le NB max d'essais. Veuillez débuter une nouvelle partie.";
            debuterPartie[1].removeAttribute("disabled");
        }
    }
};

btn.addEventListener('click', () => btnCheck());