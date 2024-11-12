/* Gruppere anmeldelserne efter genre.
Beregne gennemsnittet af bedømmelser for hver genre (bedømmelserne går fra 1 til 5).
Sortere genrene efter det gennemsnitlige bedømmelse (højeste først).
Logge resultatet til konsollen i et letlæseligt format. */

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


let sortedReviews = reviews.reduce((acc, review) => {

    let genre = review.genre;
    if(!acc[genre]) {
        acc[genre] = []
    }
    acc[genre].push(review)

    return acc;
}, {})


// For hver Genre - Der er 4
Object.keys(sortedReviews).forEach((review) => {

    let totalRating = 0;
    
    // For hver bog
    for(i = 0; i < sortedReviews[review].length; i++) {
        totalRating +=  sortedReviews[review][i].rating
    }

    let average = (totalRating / sortedReviews[review].length).toFixed(1);
    sortedReviews[review].push({ avg: parseFloat(average) });

})

const sortedGenres = Object.keys(sortedReviews).sort((b, a) => sortedReviews[a][sortedReviews[a].length -1].avg - sortedReviews[b][sortedReviews[b].length -1].avg)

const sortedReviewsObject = sortedGenres.reduce((acc, genre) => {
    acc[genre] = sortedReviews[genre];
    return acc;
  }, {});
  
  console.log(sortedReviewsObject);