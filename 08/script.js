/* Du har en liste over film, hver med en titel, genre, rating, og en instruktør. Opgaven er at:

Gruppere filmene efter instruktør.
Inden for hver instruktør, grupperes filmene yderligere efter genre.
Beregn det højeste og det laveste rating for hver instruktør og log resultaterne.
Sortér instruktørerne efter deres højeste rating (højeste først).
Log hver instruktør, deres film grupperet efter genre, og deres højeste og laveste rating i et letlæseligt format. */

const movies = [
    { title: 'Inception', genre: 'Science Fiction', rating: 4.8, director: 'Christopher Nolan' },
    { title: 'Interstellar', genre: 'Science Fiction', rating: 4.7, director: 'Christopher Nolan' },
    { title: 'The Dark Knight', genre: 'Action', rating: 4.9, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', genre: 'Crime', rating: 4.9, director: 'Quentin Tarantino' },
    { title: 'Kill Bill: Vol. 1', genre: 'Action', rating: 4.5, director: 'Quentin Tarantino' },
    { title: 'Django Unchained', genre: 'Western', rating: 4.6, director: 'Quentin Tarantino' },
    { title: 'The Grand Budapest Hotel', genre: 'Comedy', rating: 4.3, director: 'Wes Anderson' },
    { title: 'Moonrise Kingdom', genre: 'Comedy', rating: 4.2, director: 'Wes Anderson' },
    { title: 'Parasite', genre: 'Thriller', rating: 4.6, director: 'Bong Joon-ho' },
    { title: 'Snowpiercer', genre: 'Science Fiction', rating: 4.1, director: 'Bong Joon-ho' },
    { title: 'The Matrix', genre: 'Science Fiction', rating: 4.7, director: 'The Wachowskis' },
    { title: 'The Matrix Reloaded', genre: 'Science Fiction', rating: 4.3, director: 'The Wachowskis' },
  ];
  


sortDirectors = movies.reduce((acc, movie) => {
    let director = movie.director;
    let genre = movie.genre;
    
    if(!acc[director]) {
        acc[director] = {
            Director: director,
            TopRating: { rating: 0 }, 
            BottomRating: { rating: 10 }, 
        };
    }

    if(!acc[director][genre]) {
        acc[director][genre] = [];
    }
    acc[director][genre].push(movie)

    for(i = 0; i < acc[director][genre].length; i++) {

        let movieRating = acc[director][genre][i].rating;
        let top = acc[director].TopRating.rating;
        let bottom = acc[director].BottomRating.rating

        if(movieRating > top) {
            top = movieRating;
        } 
        if ( movieRating < bottom) {
            bottom = movieRating;
        }

        acc[director].TopRating.rating = top;
        acc[director].BottomRating.rating = bottom;

    }

    return acc;
}, {})

let ratedDirectors = Object.keys(sortDirectors).sort((b, a) => sortDirectors[a].TopRating.rating - sortDirectors[b].TopRating.rating )

for (let director in sortDirectors) {
    console.log(`Director: ${director}`);
    console.log(`Top Rating: ${sortDirectors[director].TopRating.rating}`);
    console.log(`Bottom Rating: ${sortDirectors[director].BottomRating.rating}`);
    console.log('Movies by Genre:');
  
    // Iterér over genrerne inden for hver instruktør
    for (let genre in sortDirectors[director]) {
      if (genre !== 'Director' && genre !== 'TopRating' && genre !== 'BottomRating') {
        console.log(`  Genre: ${genre}`);
        sortDirectors[director][genre].forEach((movie) => {
          console.log(`    - ${movie.title}, Rating: ${movie.rating}`);
        });
      }
    }
  }
  