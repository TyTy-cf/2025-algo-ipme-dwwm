
## Exercices

Faites une fonction par exercices...

/!\.PENSEZ.AU.CONSOLE.LOG.C.EST.VOTRE.MEILLEUR.AMI./!\

### 1. Algorithme de prédiction d'avenir

Il demande à l'utilisateur de donner une heure et des minutes (séparemment)

Si l'utilisateur saisie : 
- Heure : 11
- Minutes : 13
L'algo doit écrire : "Dans 1 minute il sera 11h14"

(Bonus : pour ceux qui trouve comment afficher réellement qu'il est 11h14, 1 min après !)

<script lang="js">
    
    let heures = prompt("ecrit lheurs endeux chifre") 
    heures = parseInt(heures)

   let minutes = prompt("ecrit les minutes endeux chifre" ) 
    minutes = parseInt(minutes)
     console.log()
```js
 // Demande à l'utilisateur un chiffre et le converti réellement en entier, car c'est une chaine de caractère lorsqu'on le récupère du prompt
 let toto = prompt("Donne moi un chiffre ?");
 toto = parseInt(toto);
```

    // function toto(toto) {
    //     console.log(toto);
    // }
    //
    // toto(10);

</script>


### 2. Le magasin de reprographie

La fonction ici, prendra en paramètre le nombre de copie
Elle doit calculer le prix de ces copies :
- S'il y a moins ou 10 copies, alors le prix unitaire est de 0.10€
- S'il y a moins ou 50 copies, alors le prix unitaire est de 0.09€
- S'il y a plus ou 100 copies, alors le prix unitaire est de 0.08€


