## Exos Algo 19/05/2025

### Algo papier français

#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

```
Début
    Ecrire "Quel est votre nom?"
    Lire <- A
    Ecrire "Bonjour" + A
Fin
```

#### 2. On demande son âge et on lui dit en quelle année il est né

```
Début
    Ecrire "Quel est votre Age?"
    lire <- age
    Ecrire "Vous êtes né en"+ ((YEAR(DATE())) - age)
Fin
```

### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !

```
Début
    Ecrire "Entrez 1 pour convertir des degrés Celsius en Farenheit ou 2 pour convertir des degrés Farenheit en degrés Celsius"
    Lire <- choixUtilisateur
    Ecrire "Entrez la température à convertir"
    Lire <- TemperatureUtilisateur
        Si (choixUtilisateur == 1) Alors
            temperatureUtilisateur <- (temperatureUtilisateur*1.8)+32
            Ecrire "La temperature convertie est" + temperatureUtilisateur + "F°"
        Sinon (choixUtilisateur == 2)
            temperatureUtilisateur <- (temperatureUtilisateur-32)*(5/9)
            Ecrire "La temperature convertie est" + temperatureUtilisateur + "C°"
        FinSi
Fin
```
