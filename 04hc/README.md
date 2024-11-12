Du er blevet rekrutteret af en hemmelig organisation kendt som "Labyrintvogterne". De beskytter en ældgammel labyrint, der indeholder uendelig visdom. Labyrinten ændrer sig konstant, og kun de mest intelligente kan finde vej igennem den. Din opgave er at programmere en algoritme, der kan finde den korteste vej gennem labyrinten.


Du skal skrive en funktion, der finder den korteste vej fra startpunktet til udgangen i en given labyrint repræsenteret som en matrix.

Specifikationer:

Labyrinten:

Repræsenteret som en to-dimensionel array (matrix) af værdier.
'S' repræsenterer startpunktet.
'E' repræsenterer udgangen.
0 repræsenterer en åben sti, hvor du kan bevæge dig.
1 repræsenterer en mur, som du ikke kan passere.
Regler:

Du kan bevæge dig op, ned, til venstre og til højre (ikke diagonalt).
Du kan ikke bevæge dig gennem vægge (1).
Find den korteste vej fra S til E.
Opgave:

Skriv en funktion findShortestPath(maze), der tager labyrinten som input.
Funktionen skal returnere længden af den korteste vej.
Hvis der ikke er nogen vej, skal funktionen returnere -1.
Data:

javascript
Kopier kode
const maze = [
  ['S', 0,   1,   0,   0],
  [1,   0,   1,   0,   1],
  [0,   0,   0,   0,   1],
  [0,   1,   1,   1,   0],
  [0,   0,   0,  'E',  0],
];
💡 Tips:

Brug Breadth-First Search (BFS) algoritmen til at finde den korteste vej i en labyrint.
Brug en kø til at holde styr på de næste positioner, der skal besøges.
Hold styr på besøgte positioner for at undgå at besøge dem igen.
Overvej at oprette en hjælperfunktion til at validere bevægelser inden for labyrintens grænser.
🔍 Eksempel på output:

Når du kører følgende kode:

javascript
Kopier kode
const pathLength = findShortestPath(maze);
console.log(pathLength);
Skal konsollen vise:

Kopier kode
7