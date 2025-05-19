
## Exos Algo 19/05/2025


### Algo papier français


#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

...
DEBUT

Lire Username
Ecrire "Bonjour"
ECRIRE "Quek est votre nom?"
Lire <- A
Ecrire "Bonjour" + A

FIN
...

#### 2. On demande son âge et on lui dit en quelle année il est né 

...
DEBUT

Lire Age
date_birth <- age + year
Ecrire "date-birth"

FIN
...


### 3.Je souhaite un convertisseur de degrés Celsius en fahrenheit ou vice versa !
### On demande le sens de la conversion (libre à vous de choisir comment)
### Ecoute de la réponse de l'utilisateur
### On demande la température à convertir
### En fonction de la demande de conversion de l'utilisateur on affiche le résultat (avec la bonne unité !)


...
DEBUT

ECRIRE "Souhaitez vous le convertiseur de celsius en fahrenheit"
LIRE <- A
SI A est OUI
ECRIRE " DEGRES FAHRENHEIT"
LIRE <- B
ECRIRE " QUEL EST VOTRE TEMPERATURE?"
LIRE <- C
C <- ((B*1.8) + 32) + F
SINON 
ECRIRE "DEGRES CELSIUS"
C <- ((B -32) *1.8) + C
FINSI

FIN
...
