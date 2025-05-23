
## Algo Javascript

### Variables

```js
// const => constante, on ne peut pas changer la variable
// let => variable modifiable

const toto = [10, 15, 12, 15];
toto[3] = 12; // Fonctionne malgré que je suis avec un const, car on vient modifier une valeur du tableau, mais pas réaffecter la variable

// Taille d'un tableau
toto.length; // ici c'est 4
toto.push(18); // ajoute un élément en fin de tableau
toto.length; // ici c'est 5
console.log(toto); // [10, 15, 12, 15, 18]

// "Tableau associatif" => tableau dont les index ne commencent pas par 0, on choisit nous-même la valeur de l'index
const pointsByLetter = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 3, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3,
    n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
};

// Pour accéder à la valeur, c'est le même principe
console.log(pointsByLetter[a]) // affichera 1
console.log(pointsByLetter[v]) // affichera 4
```

### Les chaînes de caractères

```js
// Soit vous les écrivez avec les doubles quotes : ""
// Soit vous les écrivez avec les simples quotes : ''

const toto = "L'étang";
const toto2 = 'L\'étang'; // l'anti-slash permet d'échapper le caratère suivant, ici la simple quote afin qu'elle ne détermine pas la fin de la chaine de caractères

// La concaténation de chaînes de caractères en JS est le "+"

let toto3 = toto + " est bleu";

// Récupérer la taille de la chaine de caractères :
toto3.length // ici ça donnerai : 16

// Passer la chaine en minuscule ou en majuscule :
toto3.toUpperCase(); // majuscule
toto3.toLowerCase(); // minuscule
```

### Les conditions

```js
const toto = 9;
if (toto == 100) { // ici on ne vérifit pas le typage, à savoir si ma variable est un entier ou une chaine de caractère ou un booléen
    
}

if (toto == '10') {
  // Oui je passe dans le if !
}

// On utilisera donc que celle-la !
if (toto === 100) { // On prend ne compte le typage ici

}
```

### Les boucles

```js
// Boucle "for"
for (let i = 1; 1 <= 10; i++) {
// for (let i = 1; 1 < 11; i++) {
    console.log(i);
}

// Boucle "while"
let i = 1;
while (i <= 10) {
    console.log(i);
    i++; // i = i + 1;
}

// Boucle "for..of"
for (const letter of str) { // Part forcément de l'index 0 jusqu'à l'index final du tableau
    // letter = str[i]
    // letter est forcément une constante ! ON NE PEUT PAS LA MODIFIER
    if (alphabet.includes(letter) && !existingLetters.includes(letter)) {
        existingLetters += letter;
    }
}

// Boucle "for..in" => au lieu de parcourir directement les valeurs (commme le for..of) il vous donne les index 
for (const i in str) {
    console.log(str[i]);
}
```

### Les fonctions

```js
/**
 * @param max
 * @param startAtZero default "true"
 */
function countTo(max, startAtZero = true) {
    let i = 1;
    if (startAtZero) {
        i = 0;
    }
    for (i; i <= max; i++) {
        console.log(i);
    }
}

countTo(40);
countTo(25, false);
```

#### Le "return"

Le "return" est un moyen pour une fonction de "RETOURNER" une valeur, ce qui permet de l'exploiter en dehors la fonction.

Une fonction qui n'a pas de "return" est considérée comme retournant "void", autrement dit du "vide", rien du tout, et en Javascript cela se montre par "undefined".

Exemple sur la fonction "getAge" :

```js
    function getAge(year) {
        const currentYear = new Date().getFullYear();
        return currentYear - year;
    }

    const age = getAge(2000);
    console.log(age);
```
