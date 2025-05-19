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
