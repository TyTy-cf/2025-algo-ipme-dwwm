//1//

let heure = prompt("Quel heure est-il");
let minutes = prompt("Combien de minutes ?");
minutes = minutes + 1;

console.log("Dans 1 minutes il sera " + heure + "h" + minutes);

//2//

let nbCopie = prompt("Indiquez le nombre de copie ?");

if (nbCopie <= 10) {
    console.log("Le prix unitaire des copies est de 0.10€ ");
} else if (nbCopie <= 100) {
    console.log("Le prix unitaire des copies est de 0.08€ ");
} else {
    console.log("Le prix unitaire des copies est de 0.09€ ");
}
