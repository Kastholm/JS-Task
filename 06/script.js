/* 📖 Historie:

Du er en berømt kryptolog, der arbejder på at dechifrere en gammel kodex kaldet "De Syv Segl". Kodexen indeholder hemmelighederne til en tabt civilisation, og for at åbne hvert segl skal du løse komplekse koder. Det første segl kræver, at du analyserer og manipulerer en serie af kodede beskeder ved hjælp af dine JavaScript-færdigheder.

📝 Opgave:

Du får en liste over kodede beskeder. Hver besked er en streng, hvor bogstaverne er blevet forskudt i alfabetet ved hjælp af en Caesar-cipher med varierende skift. Din opgave er at:

Dekryptere beskederne ved at finde det korrekte skift for hver besked.
Skiftet for hver besked er givet ved summen af de numeriske værdier af alle cifrene i beskeden modulo 26.
Eksempel: Hvis beskeden indeholder tallene 3, 5 og 7, er skiftet (3 + 5 + 7) % 26 = 15.
Fjerne alle cifre fra beskeden efter dekryptering.
Sammensætte de dekrypterede beskeder til en enkelt sætning.
Logge den endelige sætning til konsollen.


💡 Tips:

Caesar-cipher dekryptering:
For hvert tegn i beskeden, hvis det er et bogstav, skal du forskyde det baglæns i alfabetet med det beregnede skift.
Husk at håndtere store og små bogstaver korrekt.
Hvis tegnet ikke er et bogstav (f.eks. mellemrum eller tegnsætning), skal det ikke ændres.
Fjerne cifre:
Efter dekryptering skal du fjerne alle tal fra beskeden.
String-manipulation:
Brug metoder som split(), map(), join(), replace(), og regulære udtryk.
Alfabetets grænser:
Når du forskyder bogstaver, skal du sørge for at holde dig inden for alfabetets grænser (A-Z og a-z).
Du kan bruge ASCII-koder til at beregne de nye tegn. */

// 

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const codedMessages = [
    'Uifsf jt 1 tfdsfu dpnf up cf tpmwfe!',
    'Bmm 5 xip xboefs bsf opu mptu.',
    'Zpv dbo 3 voe uif tusvui.',
    'Lffq hpjoh, zpv xjmm gjoe uif bo4txfst.',
  ];
  
  

function deCryptMsg(msg) {
    
    msg = msg.toUpperCase()
    let secretMsg = ''
    let numberIndicator = 1
    let wordsArray = msg.trim().split(/\s+/)

   /*  for(i = 0; i < wordsArray.length; i++){
        if(Number(wordsArray[i].match(/[1-9]/g))){
            numberIndicator = Number(wordsArray[i].match(/[1-9]/g))
        }
    } */

    let eraseNumbers = msg.replace(/[1-9]/g, '')
    let msgArray = [...eraseNumbers]


    msgArray.map((letter) => {
        if(letter === ' ') {
            secretMsg += ' '
        }
        //console.log(letter)
        alphabet.forEach((alphaLetter, index) => {
            if(alphaLetter === letter) {
                if(index - numberIndicator >= 0) {
                    let newLetter = alphabet[(index - numberIndicator)]
                    secretMsg += newLetter
                } else if (index - numberIndicator < 0) {
                    let newLetter = alphabet[(index - numberIndicator) + alphabet.length]
                    secretMsg += newLetter
                }
            }
        })
    })

    console.log(secretMsg)
}

codedMessages.map((msg, index) => {
    deCryptMsg(codedMessages[index])
})