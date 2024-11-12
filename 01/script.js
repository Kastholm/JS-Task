/* Du er en dygtig kryptograf, der arbejder for det kongelige palads. 
En dag modtager du en mystisk besked skrevet i tal. 
Beskeden siges at indeholde vigtig information om en forestående begivenhed i kongeriget. 
Kongen har bedt dig om at dekryptere beskeden ved hjælp af dine JavaScript-færdigheder. 


Din opgave er at:

1. Skriv en funktion ved navn decryptMessage, der tager en array af tal som input.

2. Konverter hvert tal i arrayet til det tilsvarende tegn ved hjælp af ASCII-koder.

3. Sammensæt tegnene til en læsbar streng.

4. Log den dekrypterede besked til konsollen.

Tips:

Brug String.fromCharCode() til at konvertere tal til tegn.
Array-metoder som map() kan være nyttige.
Husk at sammenkæde tegnene til en samlet streng.

*/


const secretMessage = [83, 107, 121, 110, 100, 105, 103, 32, 102, 101, 115, 116];


function decryptMessage(message) {

    return message.map((count) => {
        console.log( String.fromCharCode(count))
    })

}

decryptMessage(secretMessage)
