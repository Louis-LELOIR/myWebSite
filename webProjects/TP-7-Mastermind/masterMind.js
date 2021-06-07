let container = document.getElementsByClassName("container");
let nbTrials = document.getElementById("nbEssais");
let row = document.getElementsByClassName("row");
let check = document.getElementsByClassName("increment");
let progressionDroite = document.getElementsByClassName("progressionDroite");
let progressionGauche = document.getElementsByClassName("progressionGauche");
let blocCouleur = document.getElementsByClassName("blocCouleur");
let lancerPartie = document.getElementsByClassName("lancerPartie");
//----------------------------------------------------
let paletteColors = ['blue', 'red', 'yellow', "white", "black", "green"];
let colorsAnswer = [];
let colorsChoosen = [];
shuffle = (list) => {
  for(var j, x, i = list.length ; i ; j = parseInt(Math.random() * i), x = list[--i], list[i] = list[j], list[j] = x);
    return list;
};
paletteColors = shuffle(paletteColors);
for(i = 0 ; i <= 3 ; i++) {
  colorsAnswer.push(paletteColors[i]);
};
//----------------------------------------------------
checkIfActualRowIsEnabled = () => {
  for(let i=0 ; i<row.length ; i++) {
    check[0].setAttribute("disabled", "true");
    if (row[i].classList.contains(parseInt(nbTrials.textContent))) {
      row[i].style.opacity = "1";
      row[i].removeAttribute("disabled");
      row[i].style.cursor = "pointer";
      for (let b=0 ; b<row[i].children.length; b++) {
        let blocCouleur = row[i].children[b];
        blocCouleur.removeAttribute("disabled");
      }
    } 
    else {
      row[i].setAttribute("disabled", "true");
      row[i].style.opacity = "0.3";
      row[i].style.cursor = "not-allowed";
      for (let b=0 ; b<row[i].children.length; b++) {
        let blocCouleur = row[i].children[b];
        blocCouleur.setAttribute("disabled", "true");
      }
    }
  }
};
checkIfActualRowIsEnabled();
//----------------------------------------------------
lancerPartie[0].addEventListener('click', () => {
  history.go(0);
});
//----------------------------------------------------
check[0].addEventListener('click', () => {
  
  let trial = parseInt(nbTrials.textContent);
  //verifier les couleurs pour tirer les languettes rouges et blanches
  let numberChangeLanguetteRouge = getNumberOfRightColorsInTheRightPosition(colorsChoosen, colorsAnswer);
  let numberChangeLanguetteBlanche = getNumberOfRightColorsWhateverThePosition(colorsChoosen, colorsAnswer);
  //----------------------------------------------------
  progressionDroite[progressionDroite.length-trial].classList.add(`change${numberChangeLanguetteBlanche}`);
  progressionDroite[progressionDroite.length-trial].textContent = `${numberChangeLanguetteBlanche}`;
  //----------------------------------------------------
  progressionGauche[progressionGauche.length-trial].classList.add(`change${numberChangeLanguetteRouge}`);
  progressionGauche[progressionGauche.length-trial].textContent = `${numberChangeLanguetteRouge}`;  
  //----------------------------------------------------
  //en cas de victoire
  if ((numberChangeLanguetteRouge == 4) && (numberChangeLanguetteBlanche == 4)) {
    check[0].setAttribute("disabled", "true");
    nbTrials.innerHTML = "<strong>Vous avez gagné ! </strong>";
    let audio = new Audio("../TP-7-Mastermind/songs/mixkit-winning-chimes-2015.mp3");
    audio.play();
    lancerPartie[0].removeAttribute("hidden");
  }
  //en cas d'echec
  else {
    if (trial == 12) {
      check[0].setAttribute("disabled", "true");
      nbTrials.innerHTML = "<strong>Vous avez perdu ! </strong>";
      //let audio = new Audio("../TP-7-Mastermind/songs/mixkit-winning-chimes-2015.mp3");
      //audio.play();
      lancerPartie[0].removeAttribute("hidden");
    } 
    else {
      check[0].setAttribute("disabled", "true");
      trial += 1 ;
      nbTrials.textContent = trial;
      checkIfActualRowIsEnabled();
    }
    
  }
  colorsChoosen.splice(0, colorsChoosen.length);
});
//----------------------------------------------------
for (let i=0 ; i<blocCouleur.length; i++) {
  blocCouleur[i].addEventListener("click", ()=>{
    if (blocCouleur[i].hasAttribute('disabled') == false) {
      if (blocCouleur[i].classList.contains("0")) {
        let randomColor = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        blocCouleur[i].style.background = randomColor;
        colorsChoosen[0] = randomColor;
      }
      else if (blocCouleur[i].classList.contains("1")) {
        let randomColor = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        blocCouleur[i].style.background = randomColor;
        colorsChoosen[1] = randomColor;
      }
      else if (blocCouleur[i].classList.contains("2")) {
        let randomColor = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        blocCouleur[i].style.background = randomColor;
        colorsChoosen[2] = randomColor;
      }
      else if (blocCouleur[i].classList.contains("3")) {
        let randomColor = paletteColors[Math.floor(Math.random() * paletteColors.length)];
        blocCouleur[i].style.background = randomColor;
        colorsChoosen[3] = randomColor;
      }
    }
    checkIfColorIsAlreadyInUserList();
  })
};
//===================================================
//--------------FUNCTIONS----------------------------
//===================================================
// obtenir un tableau de booleans peu importe la position
getNumberOfRightColorsWhateverThePosition = (userColorsArray, computerColorsArray) => {
  const result = userColorsArray.map(b => computerColorsArray.includes(b));
  let IsColorInPaletteWhateverThePosition = 0;
  for (let i in result) {
      if (result[i]) {
          IsColorInPaletteWhateverThePosition +=1;
      }
  };
  return IsColorInPaletteWhateverThePosition;
};
//===================================================
// obtenir un tableau de booleans en tenant compte de la position
getNumberOfRightColorsInTheRightPosition = (userColorsArray, computerColorsArray) => {
  const result = userColorsArray.map(e => computerColorsArray.indexOf(e));
  let IsColorInPaletteInTheRightPosition = 0;
  for (let i in result) {
      if (i == result[i]) {
          IsColorInPaletteInTheRightPosition +=1;
      }
  };
  return IsColorInPaletteInTheRightPosition;
};
//===================================================
checkIfColorIsAlreadyInUserList = () => {
  if (colorsChoosen[0] && colorsChoosen[1] && colorsChoosen[2] && colorsChoosen[3]) {
    if ((colorsChoosen[0] != colorsChoosen[1]) && (colorsChoosen[0] != colorsChoosen[2]) && (colorsChoosen[0] != colorsChoosen[3]) && (colorsChoosen[1] != colorsChoosen[0]) &&    (colorsChoosen[1] != colorsChoosen[2]) && (colorsChoosen[1] != colorsChoosen[3]) && (colorsChoosen[2] != colorsChoosen[0]) && (colorsChoosen[2] != colorsChoosen[1]) && (colorsChoosen[2] != colorsChoosen[3]) && (colorsChoosen[3] != colorsChoosen[0]) && (colorsChoosen[3] != colorsChoosen[1]) && (colorsChoosen[3] != colorsChoosen[2])) {
      check[0].removeAttribute("disabled");
    }
    else {
      check[0].setAttribute("disabled", "true");
    }
  }
};
//====================================================