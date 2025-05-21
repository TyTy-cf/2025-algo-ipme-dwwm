//1

function predictFuture() {
    let heure = prompt("Quel heure est-il");
    let minutes = prompt("Combien de minutes ?");
    heure = parseInt(heure);
    minutes = parseInt(minutes);

    minutes = minutes + 1;
    if (minutes === 60) {
        minutes = 0;
        heure++;
    }
    if (heure === 24) {
        heure = 0;
    }

    console.log("Dans 1 minutes il sera " + heure + "h" + minutes);
}

//predictFuture();

//2

function calculByPrice() {
    let nbCopie = prompt("Indiquez le nombre de copie ?");
    nbCopie = parseInt(nbCopie);
    let prixUnitaire = 1;

    if (nbCopie <= 10) {
        prixUnitaire = 0.1;
        console.log("Le prix unitaire des copies est de 0.10€ ");
    } else if (nbCopie <= 100) {
        prixUnitaire = 0.08;
        console.log("Le prix unitaire des copies est de 0.08€ ");
    } else {
        prixUnitaire = 0.09;
        console.log("Le prix unitaire des copies est de 0.09€ ");
    }
    let prixTotal = prixUnitaire * nbCopie;
    console.log("Le prix total des copies est de " + prixTotal + "€");
}

// calculByPrice();

//3

function getAge() {
    let anneeNaissance = prompt("Quel est votre année de naissance ?");
    anneeNaissance = parseInt(anneeNaissance);
    const anneeActuel = new Date().getFullYear();

    let age = anneeActuel - anneeNaissance;
    console.log("Vous avez " + age + "ans");
}

// getAge();

//4

function countUpToTen() {
    let startFrom = prompt("De quel chiffre voulez vous partir ?");
    startFrom = parseInt(startFrom);
    for (let i = startFrom + 1; i <= startFrom + 10; i++) {
        console.log(i);
    }
}

// countUpToTen();

//5

function displayMultiply() {
    let digit = prompt("Choisissez un entier");
    digit = parseInt(digit);
    for (let i = 1; i <= 12; i++) {
        console.log(i + " x " + digit + "=" + digit * i);
    }
}

//displayMultiply();

//6

function addUpTo() {
    let max = prompt("Choisissez un entier");
    max = parseInt(max);
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum = sum + i;
    }
    console.log("La somme de i est " + sum);
}

addUpTo();

//7

function displayVowels() {
    let voyelles = ["A", "E", "I", "O", "U", "Y"];
    console.log(voyelles);
}

//displayVowels();

//8

function getAverage() {
    let grades = [10, 15, 15, 12, 18];
}

//getAverage([10, 15, 15, 12, 18]);
//getAverage([14, 16, 17, 13, 10]);
//getAverage([14, 16, 17, 13, 18, 2, 14]);
