
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

```
POUR i <- 1 JUSQU'A i <= 10 FAIRE
  ECRIRE i
  i <- i + 1
FINPOUR
```

Écrire une fonction moyenne prenant un tableau en paramètre et retournant la moyenne

```
FONCTION moyenne(grades)
DEBUT
    avg <- 0
    POUR i <- 0 JUSQU'A i < LONGUEUR(grades) FAIRE
       avg <- avg + grades[i] 
       i <- i + 1
    FINPOUR
    RETOUR avg / LONGUEUR(grades)
FIN

moyenne([10, 15, 15, 12, 18])

```







