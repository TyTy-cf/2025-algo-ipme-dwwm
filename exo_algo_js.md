
## Exercices

Faites une fonction par exercices...

/!\.PENSEZ.AU.CONSOLE.LOG.C.EST.VOTRE.MEILLEUR.AMI./!\

### 1. Algorithme de prédiction d'avenir

Il demande à l'utilisateur de donner une heure et des minutes (séparemment)

Si l'utilisateur saisie : 
- Heure : 11
- Minutes : 13
L'algo doit écrire : "Dans 1 minute il sera 11h14"

(Bonus : pour ceux qui trouve comment afficher réellement qu'il est 11h14, 1 min après !)

### 2. Le magasin de reprographie

```
- Nom de la fonction : "calculPriceBy"
- Paramètres :
  - "copy", un entier
```
- Par défaut le prix est de 0.11€
- De 10 à 49 copies, alors le prix unitaire est de 0.10€
- De 50 à 99 copies, alors le prix unitaire est de 0.09€
- Au delà de 100 copies, alors le prix unitaire est de 0.08€

### 3. Le calcul d'âge

```
- Nom de la fonction : "getAge"
- Paramètres :
  - "year", un entier
```

La fonction doit renvoyer l'age de l'utilisateur à partie de l'année de naissance passée en paramètre

### 4. On compte !

```
- Nom de la fonction : "countUpToTen"
- Paramètres :
  - "startFrom", un entier
```


La fonction doit compter depuis le nombre "startFrom" + 10, et afficher les différents chiffres.
Par exemple, si je lui passe "17", la fonction doit afficher les nombres de "18 à 27".

### 5. La table de multiplication

```
- Nom de la fonction : "displayMultiply"
- Paramètres :
  - "digit", un entier
```

La fonction doit afficher la table de multiplication du paramètre "digit", jusqu'à 12.

Par exemple pour digit = 3 :
```
1 x 3 = 3 
2 x 3 = 6 
3 x 3 = 9 
...
12 x 3 = 36
 ```

### 6. Calcul somme

```
- Nom de la fonction : "addUpTo"
- Paramètres :
  - "max", un entier
```

La fonction doit addition tous les chiffres jusqu'à "max", le paramètre et afficher le résultat.
Exemple pour max = 5
```
1 + 2 + 3 + 4 + 5 = 15
La fonction affiche donc "15"
 ```

### 7. Les voyelles

```
- Nom de la fonction : "displayVowels"
- Paramètres :
  - Aucun
```

La fonction doit créer un tableau des voyelles de notre alphabet, et l'afficher.

### 8. Calcul de la moyenne

```
- Nom de la fonction : "getAverage"
- Paramètres :
  - "grades", un tableau de nombre (entier ou à virgules)
```

Reprennez cet algorithme pour l'adapter en Javascript :

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

### 9. Ajout de tableau

```
- Nom de la fonction : "addArray"
- Paramètres :
  - "first", un tableau d'entier
  - "second", un tableau d'entier
```

Les deux tableaux doivent être de longueur égales, si ce n'est pas le cas, la fonction ne fait rien.
Si les tableaux sont de longueur identique, alors on les parcours et on ajoute leur index respectifs, dans un nouveau tableau en sortie.
 
On affiche le nouveau tableau, exemple :
![img.png](img.png)

### 10. Les doublons

```
- Nom de la fonction : "removeDuplicate"
- Paramètres :
  - "array", un tableau d'entier ou de string, ou de char
```

La fonction doit créer un nouveau tableau, n'ayant plus les éléments en doublons du tableau initial.
(Sans utiliser de fonction native à Javascript, autre que le ".length")

Par exemple :
```
[1, 1, 1, 2, 5, 8, 7, 5]
La fonction affiche donc [1, 2, 5, 8, 7]
 ```

### 11. Inversement de mot

```
- Nom de la fonction : "inverseWord"
- Paramètres :
  - "str", une chaine de caractères
```

La fonction doit afficher la chaine de caractères inverses de celle passée en paramètres.
(Sans utiliser de fonction native à Javascript, autre que le ".length")

Exemple avec : "espion" :
```
La fonction affiche "noipse"
 ```

### 12. Le mot de passe sécurisé

```
- Nom de la fonction : "isSecuredPassword"
- Paramètres :
  - "password", une chaine de caractères corespondant au mot de passe
```

La fonction doit vérifier si le mot de passe est sécurisé ou non, un mot de passe est considéré sécurisé si :
- Il contient un @ ou un !
- Il fait au moins 9 caractères

### 13. Fonction de "excerpt"

```
- Nom de la fonction : "excerpt"
- Paramètres :
  - "str", une chaine de caractères
  - "algo", un entier, par défaut à 15
- Retour : une chaine de caractère
```

La fonction effectue le traitement suivant :
    - Si la chaine excède 15 caractères, alors on affiche la chaîne coupée jusqu'à 15 caractères puis '...'
    - Sinon elle renvoie simplement la chaîne de caractères

Exemple :
```
- Paramète "str" : 'Lorem quisque class vestibulum'
- Retour : 'Lorem quisque c...'
 ```

### 14. Fonction de "pangram"

```
- Nom de la fonction : "isPangram"
- Paramètres :
  - "str", une chaine de caractères
- Retour : un booléen
```

La fonction indique si la chaine de caractère est un pangram, autrement dit si la chaine de caractères contient toutes les lettres de l'alphabet latin, au moins une fois.

Exemple :
```
- Paramètre "str" : "The quick brown fox jumps over the lazy dog."
- Retour : true
 ```

### 15. Fonction de "getRange"

```
- Nom de la fonction : "getRange"
- Paramètres :
  - "anArray", un tableau d'entier
- Retour : un entier
```

La fonction retourne l'écart entre la plus petite valeur du tableau, et la plus grande

Exemple :
```
- Paramètre "anArray" : [15, 78, 45, 96, 12, 32, 65, 78, 91]
- Retour : 84 (écart entre 96 et 12)
 ```

### 16. Fonction de palindromes

```
- Nom de la fonction : "isPalindrome"
- Paramètres :
  - "str", une chaine de caractères
- Retour : un booléen
```

La fonction retourne vrai si le mot est un palindrome, faux, sinon

Exemple :
```
- Paramètre "str" : "ressasser"
- Retour : true

- Paramètre "str" : "rêver"
- Retour : true

- Paramètre "str" : "toto"
- Retour : false
 ```

### 17. Fonction de calcul de points au Scrabble

```
- Nom de la fonction : "getScrabbleScore"
- Paramètres :
  - "str", une chaine de caractère
- Retour : un entier
```

La fonction retourne le nombre de points réalisés par la chaine de caractères "str" passée en paramètre.

Valeurs des lettres :

- 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
- 2 points: "D", "G",
- 3 points: "B", "C", "M", "P",
- 4 points: "F", "H", "V", "W", "Y",
- 5 points: "K",
- 8 points: "J", "X",
- 10 points: "Q", "Z",

Exemple :
```
- Paramètre "str" : "lazy"
- Retour : 16
 ```

### 18. Transformation de mot...

```
- Nom de la fonction : "changeSentences"
- Paramètres :
  - "sentences" : une chaine de caractères
```

La fonction doit, pour chaque voyelle présente dans le mot, ajouter "fe" après elle, et répéter la voyelle.
Exemple avec : "chat" :
```
La fonction affiche "chafeat"
 ```

### 19. Algorithme de "César"

```
- Nom de la fonction : "encrypt"
- Paramètres :
  - "str" : une chaine de caractères
  - "gap" : un entier
- Retour : la chaine cryptée
```

La fonction doit permet de crypter la chaine de caractères "str", passée en paramètre, en utilisant le "gap" et renvoyer la chaine cryptée.
L'algorithme de césar crypte en se basant sur un décalage de l'alphabet, par exemple si j'ai un "gap" de 6, on transforme les "a" en "g", les "b" en "h", etc 

Exemple :
```
- Paramètre "str" : "chat"
- Paramètre "gap" : 3
- Retour : "fkdw"
 ```

On a crypté, maintenant, on aimerai pouvoir décrypter aussi :

```
- Nom de la fonction : "decrypt"
- Paramètres :
  - "str" : une chaine de caractères crypté
  - "gap" : un entier
- Retour : la chaine décryptée
```





