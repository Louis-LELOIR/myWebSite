const firstArr = ["blue", "green", "white", "pink"];
const secondArr = ["blue","green","pink","green"];


// obtenir un tableau de booleans peu importe la position
getNumberOfRightColorsWhateverThePosition = (userColorsArray, computerColorsArray) => {
    const result = userColorsArray.map(b => computerColorsArray.includes(b));
    //console.table(result);
    let IsColorInPaletteWhateverThePosition = 0;
    for (let i in result) {
        if (result[i]) {
            //console.log(`Il y a bien la couleur ${userColorsArray[i]} dans la palette de couleur.`);
            IsColorInPaletteWhateverThePosition +=1;
        }
        else {
            //console.log(`Il n'y a pas la couleur ${userColorsArray[i]} dans la palette de couleur.`);
        }
    };
    return IsColorInPaletteWhateverThePosition;
};

// obtenir un tableau de booleans en tenant compte de la position
getNumberOfRightColorsInTheRightPosition = (userColorsArray, computerColorsArray) => {
    const result = userColorsArray.map(e => computerColorsArray.indexOf(e));
    //console.table(result);
    let IsColorInPaletteInTheRightPosition = 0;
    for (let i in result) {
        if (i == result[i]) {
            //console.log(`Il y a bien la couleur ${userColorsArray[i]} dans la palette de couleur au bon endroit.`);
            IsColorInPaletteInTheRightPosition +=1;
        }
        else if (result[i] == -1) {
            //console.log(`La couleur ${userColorsArray[i]} n'est pas dans la palette.`);
        }
        else if (i != result[i]) {
            //console.log(`La couleur ${userColorsArray[i]} est dans la palette de couleur mais n'est pas au bon endroit.`);
        }
    };
    return IsColorInPaletteInTheRightPosition;
};
//console.log(`Au final, il y a ${getNumberOfRightColorsWhateverThePosition(firstArr, secondArr)} couleur(s) présente(s) dans la combinaison (en ne tenant pas compte de leur position exacte).`);

//console.log(`Au final, il y a ${getNumberOfRightColorsInTheRightPosition(firstArr, secondArr)} couleur(s) présente(s) dans la combinaison (en tenant compte de leur position exacte).`);


let paletteColors = ['blue', 'red', 'yellow', "white", "black", "green"];
let colorsAnswer = [];

function shuffle(o) {
    for(var j, x, i = o.length ; i ; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


paletteColors = shuffle(paletteColors);
console.log(paletteColors);

for(i = 0 ; i <= 3 ; i++) {
    colorsAnswer.push(paletteColors[i]);
};
console.log(colorsAnswer);
