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


Solution qui effectue tout le temps le calcul :

```
DEBUT
    ECRIRE "Convertir degrés Celsius vers Fahrenheit ?"
    LIRE <- conversion
	ECRIRE "Saisir température : "
	LIRE <- temperature
    SI (conversion == "Oui")
        res <- (temperature * 9/5) + 32
        ECRIRE res + " Fahrenheit"
    SINON
        res <- (temperature - 32) * 5/9
        ECRIRE res + " Celsius"
    FINSI
FIN
```

Solution qui peut ne rien faire, en fonction de la saisie utilisateur :

```
DEBUT
    ECRIRE "Entrez 1 pour convertir des degrés Celsius en Farenheit ou 2 pour convertir des degrés Farenheit en degrés Celsius"
    LIRE <- choixUtilisateur
    ECRIRE "Entrez la température à convertir"
    LIRE <- TemperatureUtilisateur
	SI (choixUtilisateur == 1) Alors
		temperatureUtilisateur <- (temperatureUtilisateur*1.8)+32
		Ecrire "La temperature convertie est " + temperatureUtilisateur + "F°"
	SINON SI (choixUtilisateur == 2)
		temperatureUtilisateur <- (temperatureUtilisateur-32)*(5/9)
		Ecrire "La temperature convertie est " + temperatureUtilisateur + "C°"
	FINSI
FIN
```