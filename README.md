# Algorithmes MP2I

Lien actuel: [perso.ens-lyon.fr/guillaume.rousseau/algo](https://perso.ens-lyon.fr/guillaume.rousseau/algo)

Ce projet répertorie différents algorithmes au programme d'informatique de MP2I. 
Chaque algorithme est présenté avec une animation interactive utilisant [p5.js](https://p5js.org/) 
en montrant l'exécution pas à pas.


## Fonctionnement
Les algorithmes sont décrits comme des automates. Chaque état représente un bloc
de lignes (éventuellement d'une seule ligne) et les transitions représentent le
graphe de flot de contrôle de l'algorithme. Il y a deux types d'états: ceux qui
correspondent à une instruction, pour lesquels il n'y a qu'une seule transition 
possible, et ceux qui correspondent à une conditionnelle, pour lesquels il y a
deux transitions possibles selon la valeur de la condition. On représente la
table des transitions en donnant pour chaque état l'unique état ou le couple
des états vers lesquels il transite.

## Exemple
Par exemple, pour le tri par sélection, le code source est:
```
0.  i = n-1
1.  while i >= 0:
2.  	j_max = 0
3.	j = 0
4.	while j <= i:
5.	 	if T[j] > T[j_max]:
6.	    	j_max = j
7.	  	j = j + 1
8.	swap T[j_max] and T[i]
9.	 i = i + 1
10. end
```

On peut grouper les lignes 2-7 ensemble comme étant une recherche de max dans
un tableau. Alors les états, i.e. les blocs de lignes, sont:
```
{
	0: 0,
	1: 1,
	2: [2, 3, 4, 5, 6, 7],
	3: 8,
	4: 9,
	5: 10,
}
```

La table des transitions est:
```
{
	0: 1,
	1: [5, 2],
	2: 3,
	3: 4,
	4: 1,
	5: 5
}
```
## TODO
- texte explicatif pour chaque algorithme
- commenter le code
- montrer les variants / invariants de boucles adaptés
- design + joli
- organisation en chapitres
- parsing des algorithmes et génération auto de la table des transitions
- stockage des infos dans des JSON
- template pour nouvel algo
