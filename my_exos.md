## Exos Algo 19/05/2025

### Algo papier français

#### 1. On demande le nom de l’utilisateur et on lui dit bonjour

```
DEBUT
    LIRE username
    ECRIRE "bonjour + username"
FIN
```

Correction :

```
DEBUT
    ECRIRE "Quel est votre nom ?"
    LIRE <- A
    ECRIRE "Bonjour " + A
FIN
```

#### 2. On demande son âge et on lui dit en quelle année il est né

```
DEBUT
    ECRIRE "Quelle est votre age?"
    LIRE <- A
    B <- currentYear
    B - A = C
    ECRIRE "Vous etes né en " + C
FIN
```
