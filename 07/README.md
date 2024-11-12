📖 Historie:

Du arbejder på en API til en populær boganmeldelsesplatform kaldet "BookVerse". Platformen giver brugere mulighed for at skrive anmeldelser af bøger og organisere dem baseret på genre. Du har fået til opgave at bygge en funktion, der samler og organiserer data fra API-svar.

📝 Opgave:

Du får en liste over anmeldelser fra en fiktiv API, og din opgave er at:

Gruppere anmeldelserne efter genre.
Beregne gennemsnittet af bedømmelser for hver genre (bedømmelserne går fra 1 til 5).
Sortere genrene efter det gennemsnitlige bedømmelse (højeste først).
Logge resultatet til konsollen i et letlæseligt format.
Data:

javascript
Copy code
const reviews = [
  { book: 'JavaScript: The Good Parts', genre: 'Programming', rating: 4.5 },
  { book: 'Clean Code', genre: 'Programming', rating: 4.8 },
  { book: 'The Great Gatsby', genre: 'Fiction', rating: 4.2 },
  { book: 'To Kill a Mockingbird', genre: 'Fiction', rating: 4.9 },
  { book: 'The Pragmatic Programmer', genre: 'Programming', rating: 4.7 },
  { book: 'Sapiens', genre: 'History', rating: 4.6 },
  { book: '1984', genre: 'Fiction', rating: 4.4 },
  { book: 'A Brief History of Time', genre: 'Science', rating: 4.3 },
  { book: 'The Art of Computer Programming', genre: 'Programming', rating: 4.1 },
  { book: 'Homo Deus', genre: 'History', rating: 4.4 },
];
💡 Tips:

Gruppere anmeldelser: Brug et objekt eller en Map til at organisere anmeldelserne efter genre.
Beregne gennemsnit: Hold styr på det samlede antal bedømmelser og beregn gennemsnittet for hver genre.
Sortere genrene: Sorter baseret på det beregnede gennemsnit.
🔍 Eksempel på output:

Når du har udført opgaven korrekt og logger resultaterne, skal konsollen vise:

makefile
Copy code
Genre: Programming - Average Rating: 4.525
Genre: Fiction - Average Rating: 4.5
Genre: History - Average Rating: 4.5
Genre: Science - Average Rating: 4.3
Bemærk: Gennemsnittene er afrundet til tre decimaler.

Din opgave:

Skriv en funktion organizeReviews(reviews), der udfører ovenstående trin og logger resultatet i det format, der er vist.

Held og lykke! Denne opgave vil styrke din forståelse af:

Datamanipulation og gruppering
Brug af JavaScript's array-metoder som reduce(), map(), og sort()
API-lignende databehandling, som er meget relevant for fullstack-udvikling
Jeg glæder mig til at se, hvordan du klarer denne opgave! 🚀