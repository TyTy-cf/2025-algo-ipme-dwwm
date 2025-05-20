
```
toto <- [5, 14, 78, 10, 89, 15, 75]
ECRIRE toto[2] # 78
toto[3] <- 42
ECRIRE toto # [5, 14, 78, 42, 89, 15, 75]
``` 

Exemple de boucle en pseudo code :

```
POUR (valeur initiale) JUSQU'A (valeur finale) FAIRE
 (instruction)
FINPOUR
```

Exercice comptant de 1 à 10 :

```
ECRIRE 1
ECRIRE 2
ECRIRE 3
ECRIRE 4
ECRIRE 5
ECRIRE 6
ECRIRE 7
ECRIRE 8
ECRIRE 9
ECRIRE 10
```

```js
// <- est un = en JS, affectation de valeur à une variable
// POUR i <- 1 JUSQU'A i <= 10 FAIRE
//   ECRIRE i
//   i <- i + 1 # i++
// FINPOUR

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

Écrire une fonction moyenne prenant un tableau en paramètre et retournant la moyenne

```
FONCTION moyenne(grades)
DEBUT
    sum <- 0
    tailleArray <- LONGUEUR(grades)
    POUR i <- 0 JUSQU'A i < tailleArray FAIRE
       sum <- sum + grades[i]
       i <- i + 1
    FINPOUR
    RETOUR sum / tailleArray
FIN

moyenne([10, 15, 15, 12, 18]) #14
moyenne([14, 16, 17, 13, 10]) #14
moyenne([14, 16, 17, 13, 18, 2, 14]) #14
```

```js

// toto <- 10
// SI toto <= 100, ALORS
// FINSI
const toto = 10;
if (toto <= 100) {
    
}

```





