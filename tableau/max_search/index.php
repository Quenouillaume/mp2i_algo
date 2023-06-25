<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recherche de maximum</title>

  <link rel="stylesheet" href="/guillaume.rousseau/algo/style.css">
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <script src="/guillaume.rousseau/algo/algorithm.js"></script>
  <script src="/guillaume.rousseau/algo/arrow.js"></script>
  
  <script src="max_search.js"></script>
</head>

<body>

<?php include("../../navigation.php"); ?>
<main>

  <explanation> 
  <h1>Recherche de maximum</h1>
 Cet algorithme sert à chercher l'indice d'un élément maximal d'un tableau non vide.
 C'est une recherche linéaire, qui parcourt chaque case du tableau et garde en mémoire
 l'indice du plus grand élément vu parmis ceux vus. 

  </explanation>


  <div id=demo> 
    <div id=p5Canvas>
    </div>

    <div id=code> 
    <h3>Pseudo-code</h3>
    Entrée: T un tableau de n éléments <br>
    Sortie: i tel que T[i] est le plus grand élément de T<br>
    <div id=pseudoCode></div>

    <h3>Principe</h3>
    L'indice i_max du pseudo-code correspond
    à chaque étape à l'indice du plus grand élément entre 0 et i. 
    Lorsque i augmente, i_max est mis à jour si T[i] > T[i_max].

      <h3>Terminaison et complexité</h3>
    Cet algorithme effectue au pire n tours de la boucle while car la boucle s'arrête lorsque
    i dépasse n, et i commence à 0 et croît strictement à chaque passage. 
    La complexité totale de l'algorithme est donc de <b> O(n) </b>.

      <h3>Correction</h3>
      <div id=correction> 
      A chaque passage sur la ligne 2, la condition suivante est vérifiée: 
      "T[i_max] est le plus grand élément parmis T[0], .. T[i-1]."<br>

      A la fin de l'exécution, i vaut n, et l'invariant
      devient: 
      "T[i_max] est le plus grand élément parmis T[0], .. T[n-1]."<br>
 
      Autrement dit, i_max est l'indice du plus grand élément de T.
      </div>


    </div>
  </div>



</main>
</body>
</html>