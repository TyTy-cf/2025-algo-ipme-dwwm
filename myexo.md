
## Exos Algo 19/05/2025


### Algo papier français


#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

```
DEBUT
    Lire <- nomUtilisateur
    Ecrire "Bonjour " + nomUtilisateur
FIN
```


#### 2. On demande son âge et on lui dit en quelle année il est né

```
DEBUT
    Ecrire "Quel est votre âge ?"
    Lire <- âge
    annéeNaissance <- année n - âge
    Ecrire annéeNaissance
FIN
```


### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !
### On demande le sens de la conversion (libre à vous de choisir comment)
### Ecoute de la réponse de l'utilisateur
### On demande la température à convertir
### En fonction de la demande de conversion de l'utilisateur on affiche le résultat (avec la bonne unité !)

```
DEBUT
    ECRIRE "Choisir l'unité à convertir (C ou F)"
    LIRE <- unité
    ECRIRE "Saisir la température à convertir"
    LIRE <- température
    SI (unité == C) ALORS
    (résultat = (température * 1.8) + 32) + " °F"
    SINON SI (unité == F) ALORS
    (résultat = (température - 32) / 1.8) + " °C"
    FINSI
    AFFICHER résultat
FIN
```