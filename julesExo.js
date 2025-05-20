//1//

let heure = prompt("Quel heure est-il");
let minutes = prompt("Combien de minutes ?");
heure = parseInt(heure);
minutes = parseInt(minutes);
minutes = minutes + 1;

console.log("Dans 1 minutes il sera " + heure + "h" + minutes);

//2//

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
