#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

```plaintext
DEBUT
    LIRE <- nom
    ECRIRE "Bonjour " + nom + " !"
FIN
```


#### 2. On demande son âge et on lui dit en quelle année il est né

```plaintext
DEBUT
    ECRIRE "Saisissez l'année actuelle"
    LIRE <- annee

    ECRIRE "Saisissez votre age"
    LIRE <- age

    ECRIRE "Vous êtes né.e en " + (annee - age)
FIN
```

#### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa!

```plaintext
DEBUT
    ECRIRE "Votre température:"
    LIRE <- temp

    SI temp + 0 != temp ALORS
        ECRIRE "La température doit être un nombre"
        FIN
    FINSI

    ECRIRE "(F)ahrenheit ou (C)elsius:"
    LIRE <- unit_user

    SI unit_user != "C" && unit_user != "F" ALORS
        ECRIRE "La température doit être un nombre"
        FIN
    FINSI

    result <- 0
    unit_convert <- ""

    SI unit == "C" ALORS
        result <- (temp * 1.8) + 32
        unit_convert <- "F"
    SINON
        result <-(temp - 32) / 1.8
        unit_convert <- "C"
    FINSI

    ECRIRE temp + "°" + unit_user + " est égal à " + result + "°" + unit_convert
FIN
```
