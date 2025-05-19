
## Exos Algo 19/05/2025


### Algo papier français


#### 1. On demande le nom de l’utilisateur et on lui dit bonjour
```
DEBUT
	ECRIRE "Quel est ton nom ?"
	LIRE nom
	ECRIRE "Bonjour " + nom
FIN
```

#### 2. On demande son âge et on lui dit en quelle année il est né
```
DEBUT
	ECRIRE "Quel est ton age ?"
	LIRE age
	ECRIRE "Dans quel année est on ?"
	LIRE currentYear
	date <- currentYear - age
	ECRIRE "Tu es né le " + date
FIN
```