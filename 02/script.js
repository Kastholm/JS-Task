/* Du får en array af tidsrejsebegivenheder. Din opgave er at skrive en funktion detectParadoxes(events), 
der analyserer listen og returnerer en array med navnene på de tidsrejsende, der har skabt paradokser. 
Navne skal kun optræde én gang i resultatet, selvom en tidsrejsende har skabt flere paradokser.

Din opgave er at:

Skriv funktionen detectParadoxes(events).
Funktionen skal returnere en array med navnene på de tidsrejsende, der har skabt paradokser.
Log resultatet til konsollen.

💡 Tips:
For hver begivenhed skal du finde den tidsrejsendes fødsels- og dødsår.
Tjek om to-året er mellem fødselsåret (inklusive) og dødsåret (inklusive). Hvis det er tilfældet, 
opstår der et paradoks.

Brug array-metoder som filter(), find() og includes(). 

Forklaring:

Alice:
Begivenhed 1: Rejser fra 2025 til 2000.
Født i 1980, dør i 2050.
År 2000 er mellem 1980 og 2050 → Paradoks.
Begivenhed 2: Rejser fra 2005 til 2040.
År 2040 er mellem 1980 og 2050 → Paradoks.

*/


const travelers = [
    { name: 'Alice', birth: 1980, death: 2050 },
    { name: 'Bob', birth: 1975, death: 2040 },
    { name: 'Charlie', birth: 1990, death: 2070 },
    ];

const events = [
    { traveler: 'Alice', from: 2025, to: 2000 },
    { traveler: 'Bob', from: 2030, to: 1980 },
    { traveler: 'Charlie', from: 2060, to: 1995 },
    { traveler: 'Alice', from: 2005, to: 2040 },
    ];
  
    let mix = [];
    let combine = [];

    travelers.forEach((person) => {
        events.forEach((traveler) => {
            if (person.name === traveler.traveler) {
                return combine.push({"name": person.name, 
                              "birth": person.birth, 
                              "death": person.death, 
                              "from": traveler.from, 
                              "to": traveler.to,
                            });
                        }
                    })
                })

                
                combine.map((person) => {
                    if(person.to >= person.birth || person.to <= person.death  ) {
                        console.log(person.name)
                    }
                })


