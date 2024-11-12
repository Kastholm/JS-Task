/* 📖 Historie:

Du er en berømt musikproducer, der arbejder på at organisere den største musikfestival i landet, 
kaldet "Harmonifesten". Du har modtaget en liste over artister, der gerne vil optræde, 
og nu skal du planlægge festivalen. For at skabe den bedste oplevelse skal du:

Gruppere artisterne efter genre.
Beregne det samlede antal artister inden for hver genre.
Finde den genre med flest artister.
Sortere artisterne inden for hver genre efter deres popularitet (stigende).
📝 Opgave:

Du får en liste over artister med deres navn, genre og popularitetsscore (1-100, hvor 100 er mest populær). Din opgave er at:

Organisere artisterne efter deres genre.
Beregne antallet af artister i hver genre.
Finde den genre med flest artister.
Sortere artisterne inden for hver genre efter popularitet i stigende rækkefølge.
Logge resultaterne til konsollen.

💡 Tips:

Brug et objekt eller Map til at gruppere artisterne efter genre.
Loop gennem artists arrayet og organiser dem i grupper.
For at sortere artisterne efter popularitet inden for hver genre, brug sort() metoden.
For at finde genren med flest artister, sammenlign antallene. */


const artists = [
  { name: 'Echo Nights', genre: 'Elektronisk', popularity: 75 },
  { name: 'The Rolling Codes', genre: 'Rock', popularity: 85 },
  { name: 'Jazzify', genre: 'Jazz', popularity: 65 },
  { name: 'Synth Waves', genre: 'Elektronisk', popularity: 80 },
  { name: 'Blues Brothers', genre: 'Blues', popularity: 70 },
  { name: 'Rocking Stones', genre: 'Rock', popularity: 90 },
  { name: 'Smooth Jazz', genre: 'Jazz', popularity: 60 },
  { name: 'Electric Pulse', genre: 'Elektronisk', popularity: 95 },
  { name: 'Soulful Strings', genre: 'Blues', popularity: 85 },
  { name: 'Code Harmonies', genre: 'Klassisk', popularity: 50 },
  { name: 'Rock Revolution', genre: 'Rock', popularity: 80 },
  { name: 'Classical Tunes', genre: 'Klassisk', popularity: 70 },
];


const sortArtistsByGenre = artists.reduce((acc, artist) => {
    const genre = artist.genre;

    if(!acc[genre]) {
        acc[genre] = [];
        acc[genre].push({'amount' : 0})
    }
    acc[genre].push(artist)
    acc[genre][0].amount +=1;
    acc[genre].sort((a, b) => b.popularity - a.popularity)

    return acc
}, {})

console.log(sortArtistsByGenre)