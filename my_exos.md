
## Exos Algo 19/05/2025


### Algo papier français


#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

```
DEBUT
    ECRIRE "Quel est ton nom ?"
    LIRE <- name
    ECRIRE "Bonjour " + name
FIN
```

#### 2. On demande son âge et on lui dit en quelle année il est né

```
DEBUT
    ECRIRE "Quel est ton âge ?"
    LIRE <- age
    ECRIRE "Tu es né.e en " + (YEAR(DATE()) - age)
FIN
```

### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !
### On demande le sens de la conversion (libre à vous de choisir comment)
### Ecoute de la réponse de l'utilisateur
### On demande la température à convertir
### En fonction de la demande de conversion de l'utilisateur on affiche le résultat (avec la bonne unité !)

debut
 <!-- F = 1,8 * C + 32  -->
ecrire "une temperature en degré "
lire <- temperature
ecrire " convertire la temperature en fahrenheit:" + ( F = 1,8 * "temperature" + 32 ) "
lire <- conversion agit
fin