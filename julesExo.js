//1

function predictFuture(heure, minutes) {
    // let heure = prompt("Quel heure est-il");
    // let minutes = prompt("Combien de minutes ?");
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
    return "Dans 1 minutes il sera " + heure + "h" + minutes;
}
//const future = predictFuture(23, 44);
//console.log(future);

//2

function calculByPrice(nbCopie) {
    //let nbCopie = prompt("Indiquez le nombre de copie ?");
    let prixUnitaire = 1;
    nbCopie = parseInt(nbCopie);

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

//addUpTo();

//7

function displayVowels() {
    let voyelles = ["A", "E", "I", "O", "U", "Y"];
    console.log(voyelles);
}

//displayVowels();

//8

function getAverage(grades) {
    let sum = 0;
    const sizeArray = grades.length;
    for (let i = 0; i < sizeArray; i++) {
        sum += grades[i];
    }
    return sum / sizeArray;
}

//console.log(getAverage([10, 15, 15, 12, 18]));
//console.log(getAverage([14, 16, 17, 13, 10]));
//console.log(getAverage([14, 16, 17, 13, 18]));

//9

function addArray(first, second) {
    let sum = [];

    if (first.length === second.length) {
        for (let i = 0; i < first.length; i++) {
            sum.push(first[i] + second[i]);
        }
    }
    return sum;
}
//const ajoutTablo = addArray([1, 2, 3], [1, 2, 3]);
//console.log(ajoutTablo);

//10

function removeDuplicate(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const isDuplicate = newArray.includes(element);
        // if (newArray.includes(array[1]))
        if (isDuplicate === false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//const corriger = removeDuplicate([4, 1, 2, 2, 1, 3, 4, 3, 5]);
//console.log(corriger);

//11 (raccourci .reverse)

function inverseWord(str) {
    let strReverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
}

//const inverser = inverseWord("coucou les copinous");
//console.log(inverser);

//12

function isSecuredPassword(password) {
    // let passwordSize = false;
    // let passwordChar = false;

    // if (password.length >= 9) {
    //     passwordSize = true;
    // }
    // for (let i = 0; i >= password.length; i++) {
    //     if (password[i] === "!" || password[i] === "@") {
    //         passwordChar = true;
    //     }
    // }
    // return (
    //     "Le password contient un ! ou @ ? " +
    //     passwordChar +
    //     " Le password fait bien plus de 9 caractères ? " +
    //     passwordSize
    // );
    return (
        password.length >= 9 &&
        (password.includes("@") || password.includes("!"))
    );
}

//const cyber = isSecuredPassword("auvergne6363@");
//console.log(cyber);

//13

function excerpt(str, from) {
    if (str.length >= from) {
        return str.slice(0, from) + "...";
    } else {
        return str;
    }
}

//const short = excerpt("Lorem quisque class vestibulum", 2);
//console.log(short);

//14

function isPangram(str) {
    let pangram = false;
    if (str.includes()) {
        return (pangram = true);
    } else {
        return (pangram = false);
    }
}
