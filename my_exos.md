
## Exos Algo 19/05/2025


### Algo papier français


#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

'''
DEBUT
    LIRE nom de l'utilisateur
    ECRIRE "Bonjour"
FIN
'''

#### 2. On demande son âge et on lui dit en quelle année il est né
'''
DEBUT
    LIRE âge
    année de naissance <- année actuelle-âge
    ECRIRE "année de naissance"
FIN
'''

### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !
### On demande le sens de la conversion (libre à vous de choisir comment)
### Ecoute de la réponse de l'utilisateur
### On demande la température à convertir
### En fonction de la demande de conversion de l'utilisateur on affiche le résultat (avec la bonne unité !)

'''
DEBUT
    ECRIRE "C to F ou F to C ?"
    LIRE <- conversionChoice
    ECRIRE "Température"
    LIRE <- temperature
    SI (conversionChoise == "C to F") ALORS,
        ECRIRE (temperature * 9/5 + 32)+"C"
    SINON 
        ECRIRE (5/9(temperature-32))+"F"
    FINSI
    
FIN
'''
