/* 
📖 Historie:

Du er en berømt arkæolog på jagt efter de forsvundne "Elementære Krystaller", 
som hver repræsenterer et af naturens fire elementer: Jord, Vand, Ild og Luft. 
Disse krystaller er skjult i et gammelt tempel fyldt med fælder og gåder. 
For at finde dem skal du dechifrere spor og organisere dine fund.

📝 Opgave:

Du får en liste over artefakter, du har fundet i templet. Din opgave er at:

Organisere artefakterne efter deres element.
Beregne det samlede antal artefakter for hvert element.
Finde det element med flest artefakter.
Logge resultaterne til konsollen.


💡 Tips:

Brug et objekt eller en Map til at gruppere artefakterne efter element.
Loop gennem artefakterne og organiser dem i grupper.
For at finde elementet med flest artefakter skal du sammenligne tællerne.
 */


const artifacts = [
    { name: 'Sten Tablet', element: 'Jord' },
    { name: 'Vand Amulet', element: 'Vand' },
    { name: 'Flamme Sværd', element: 'Ild' },
    { name: 'Vind Fløjte', element: 'Luft' },
    { name: 'Lava Krystal', element: 'Ild' },
    { name: 'Havets Perle', element: 'Vand' },
    { name: 'Jordens Hjerte', element: 'Jord' },
    { name: 'Stormens Øje', element: 'Luft' },
    { name: 'Aske Ring', element: 'Ild' },
    { name: 'Sky Bog', element: 'Luft' }
  ];
  
const groupedItems = artifacts.reduce((acc, artifact) => {
    
    const element = artifact.element;

    if(!acc[element]) {
        acc[element] = [];
        acc[element].push(0)
    }

    acc[element].push(artifact.name)
    acc[element][0] +=1;

    return acc;

}, {});

const sortItems = Object.entries(groupedItems).sort((a, b) => b[1][0] - a[1][0] )
console.log(`Antal artefakter per element:`)
sortItems.map((item) => {
    console.log(`${item[0]} : ${item[1][0]}`)
})
