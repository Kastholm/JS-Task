/* Du er en førende forsker inden for kunstig intelligens, og du arbejder på et projekt kaldet "Projekt Genesis", som handler om at simulere evolutionen af en population af digitale organismer. Hver organisme har unikke genetiske koder, og dit mål er at udvikle den mest optimale organisme gennem naturlig selektion, krydsning og mutation.

Du skal simulere evolutionen af en population over flere generationer for at finde en organisme, der matcher en specifik målkode.

Specifikationer:

Initialisering:

Generér en startpopulation på 20 organismer.
Hver organisme har en DNA-streng bestående af 10 tegn.
DNA-strengen består af bogstaverne 'A', 'T', 'C', 'G' (nukleotider).
Hver organisme har en unik id.


Målkode:
Målkoden, som organismerne forsøger at udvikle sig til, er: 'AACGTGGCCT'.


Fitness-funktion:
Fitness af en organisme beregnes som antallet af matching tegn på de korrekte positioner i forhold til målkoden.
Maksimal fitness er 10 (hvis hele DNA-strengen matcher målkoden).

Evolutionære trin:
Evaluering:
Beregn fitness for hver organisme i populationen.


Selektionsfase:
Vælg de top 50% mest fitte organismer til reproduktion.


Reproduktion:
Krydsning:
Par organismer tilfældigt blandt de selekterede til at skabe afkom.
For hvert par, skab to nye organismer (afkom) ved at kombinere DNA.
DNA-kombination sker ved at vælge et tilfældigt crossover-punkt og bytte DNA-segmenter mellem forældrene.


Mutation:
Hvert tegn i DNA-strengen har en 5% chance for at mutere.
Mutation sker ved at erstatte tegnet med et tilfældigt valgt nukleotid.
Ny generation:
Den nye population består af afkommet og kan opretholdes til 20 organismer.

Afslutningsbetingelse:

Fortsæt evolutionen i op til 1000 generationer, eller indtil en organisme opnår maksimal fitness.

Output:
For hver generation skal du logge følgende til konsollen:
Generation nummer
Højeste fitness i generationen
DNA-strengen for den mest fitte organisme

Tips:
Data Strukturer:

Brug objekter til at repræsentere organismer.
Brug arrays til at håndtere populationen.
Funktioner:

Lav separate funktioner for hver evolutionært trin (evaluering, selektion, reproduktion, mutation).
Tilfældighed:

Brug Math.random() til at generere tilfældige tal.
Til mutation og crossover, generér tilfældige indeks.
Effektivitet:

For at forbedre ydeevnen, undgå unødvendige loops inden i loops.

 */

// Dan 20 organismer, med hver deres individuelle id, dna streng 10 cifre randomized ud fra atcg.


const DNASTRING = 'ATCG'
const evolutionString = 'AACGTGGCCT'
let evolutionCount = 20;
let generation = 1;

//Create Organisms
let organisms = [];
for(i = 0; i < evolutionCount; i++ ) {
    organisms.push({id: i, DNA: '', Fitness: 0})
}

//Calculate DNA strings and Fitness
organisms.forEach((organism, index) => {
    for(i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()*DNASTRING.length);
        organisms[index].DNA += [...DNASTRING][num]
        if([...organisms[index].DNA][i] === [...evolutionString][i]){
            organisms[index].Fitness += 1;
        }
    }
})
//Find top 50% of organisms
organisms = organisms.sort((a, b) => b.Fitness - a.Fitness ).slice(0, evolutionCount / 2)

//Produce children

// Skab random forældre par. 

organisms.forEach((organism, index) => {

    let rMate = Math.floor(Math.random()*organisms.length);
    if(organism.id !== organisms[rMate].id) {
        console.log(organism.id, 'fking', organisms[rMate].id)
        organisms.push({id: evolutionCount += 1, DNA: '', Fitness: 0})

        for(i = 0; i < 10; i++) {
           
        }

    }
    //evo counter = ''
})

console.log(organisms)
//console.log(newGen)
/* [...organisms[index].DNA][i] === [...evolutionString][i]
let mutation = Math.floor(Math.random() * 100)
organisms[index].Fitness += 1; */