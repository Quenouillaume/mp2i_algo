<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tri par sélection</title>

  <link rel="stylesheet" href="/guillaume.rousseau/algo/style.css">
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <script src="/guillaume.rousseau/algo/algorithm.js"></script>
  <script src="/guillaume.rousseau/algo/arrow.js"></script>
  
  <script src="select_sort.js"></script>
</head>

<body>
<?php include("../../navigation.php"); ?>

<main> 

  <explanation> 
  <h1>Tri par sélection</h1>
 Cet algorithme de tri consiste à sélectionner le plus grand élément du tableau, à le mettre
  à la dernière place, puis à sélectionner le plus grand élément parmis ceux restants, à le
  mettre à l'avant-dernière place, et ainsi de suite. 


  </explanation>


  <div id=demo> 
    <div id=p5Canvas>
    </div>

    <div id=code> 
    <h3>Pseudo-code</h3>
    Entrée: T un tableau de n éléments <br>
    Sortie: T a été modifié et est trié dans l'ordre croissant <br>
    <div id=pseudoCode></div>

    <h3>Principe</h3>
    L'indice j du pseudo-code correspond
    à chaque étape à l'indice du plus grand élément entre 0 et i: lorsqu'on l'a trouvé, on
    échange T[i] et T[j]. 

      <h3>Terminaison et complexité</h3>
    Cet algorithme effectue au pire n tours de la boucle while car la boucle s'arrête lorsque
    i devient négatif, et i décroit strictement à chaque passage. Dans chaque passage, il faut
    faire une <a href= ../max_search> recherche de max </a> en temps O(n). La
    complexité totale de l'algorithme est donc de <b> O(n<sup>2</sup>) </b>.

      <h3>Correction</h3>
      <div id=correction> 
      A chaque passage sur la ligne 1, la condition suivante est vérifiée: "Les n-i-1 éléments les 
      plus grands sont positionnés dans l'ordre, dans les cases T[i+1], T[i+2], T[n-1]". 
      En effet, au début de l'algorithme n-i-1 = 0, et chaque passage de boucle positionne un
      élément de plus dans la bonne case. <br>

      Graphiquement, la partie en vert du tableau correspond au tableau trié final: les éléments 
      y sont bien placés. C'est la partie qui est strictement après i. <br>

      A la fin de l'exécution, i vaut -1, et l'invariant
      devient: "les n éléments les plus grands sont positionnés dans l'ordre dans les cases T[0], ..., T[n-1]". 
      Autrement dit, le tableau est trié.
      </div>


    </div>
  </div>

</main>

</body>

</html>