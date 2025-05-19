#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

Debut
ECRIRE "Quel est votre nom ?"
Lire <-- A
Ecrire "Bonjour" + A
Fin

#### 2. On demande son âge et on lui dit en quelle année il est né

Debut  
Ecrire "Entre votre âge"
Lire (int) == A
Lire (int) Annee actuel == B
Variable C "En quelle année il est né" == B - A
Lire "Votre âge est " + C
Fin

### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !

### On demande le sens de la conversion (libre à vous de choisir comment)

### Ecoute de la réponse de l'utilisateur

### On demande la température à convertir

### En fonction de la demande de conversion de l'utilisateur on affiche le résultat (avec la bonne unité !)

````Debut

        ECRIRE "Choisissez le sens de conversion entre Celsius et Fahrenheit"
        SI le sens de conversion est "Fahrenhait en celsius"
            Lire <-- A
            variable Fahrenhait (float) <-- A
            B <-- (A - 32) * 5/9;
            ECRIRE " Votre température Fahrenhait " + A  + " est égale a votre température celsius " + B
        SINON
            Lire <-- B
            variable celsius (float) <-- B
            A <-- B * 9/5 + 32
            ECRIRE " Votre température celsius " + B  + " est égale a votre température Fahrenheit " + A

Fin```
````
