/* 📖 Historie:

Du er en dataforsker, der arbejder for et innovativt teknologiselskab, der analyserer 
sociale mediedata for at opdage trends og indsigter. Du har fået til opgave at analysere en stor 
dataset af tweets for at finde ud af, hvilke emner der er mest populære, og hvordan sentimentet 
omkring disse emner er.

📝 Opgave:

Du får en liste over tweets, hvor hvert tweet indeholder en tekst og en sentiment-score 
(fra 0 til 1, hvor 1 er mest positiv). Din opgave er at:

Ekstrahere alle hashtags fra alle tweets og tælle, hvor mange gange hvert hashtag forekommer.
Identificere de top 3 mest anvendte hashtags.
For hvert af de top 3 hashtags skal du beregne den gennemsnitlige sentiment-score for tweets, 
der indeholder dette hashtag.
Logge resultaterne til konsollen.


Brug en Map eller et objekt til at tælle forekomsten af hvert hashtag.
For at ekstrahere hashtags fra teksten, kan du bruge regulære udtryk eller splitte teksten og filtrere efter ord, der starter med #.
Beregn gennemsnittet af sentiment-score for tweets, der indeholder et bestemt hashtag.
Husk at håndtere tilfælde, hvor tweets indeholder flere hashtags. */

const tweets = [
  { text: 'Elsker at kode i JavaScript! #programmering #javascript', sentiment: 0.9 },
  { text: 'Node.js er fantastisk til server-side udvikling. #javascript #nodejs', sentiment: 0.8 },
  { text: 'Har nogen tips til async/await? #javascript #hjælp', sentiment: 0.5 },
  { text: 'Python eller JavaScript, hvad foretrækker du? #python #javascript', sentiment: 0.7 },
  { text: 'TypeScript gør JavaScript bedre! #typescript #javascript', sentiment: 0.85 },
  { text: 'Front-end udvikling er så sjovt. #frontend #javascript #html', sentiment: 0.9 },
  { text: 'Jeg kæmper med bugs i min kode... #programmering #frustration', sentiment: 0.2 },
  { text: 'Async programming kan være svært at forstå. #javascript #async', sentiment: 0.6 },
  { text: 'Klar til at lære mere om Node.js! #nodejs #læring', sentiment: 0.8 },
  { text: 'JavaScript er så alsidigt. #javascript #webdev', sentiment: 0.9 },
];
let hashtags = [];

tweets.map((tweet) => {
    let words = tweet.text.trim().split(/\s+/);
    for(let w = 0; w < words.length; w++) { 
        if(words[w].includes('#')) {
            hashtags.push({'word': words[w], 'sentiment': tweet.sentiment})
        }
    }
})

hashtags = hashtags.reduce((acc, hashtag) => {
    const tag = hashtag.word;
    if(!acc[tag]) {
        acc[tag] = []
        acc[tag].push({'counter': 0})
    }
    acc[tag].push(hashtag);
    acc[tag][0].counter +=1;

    return acc;
}, {})

hashtags = Object.entries(hashtags).sort((a, b) => b[1][0].counter - a[1][0].counter)

const topTags = hashtags.slice(0, 3)

topTags.forEach((tag, index) => { 

    tag.push({'amount': 0})

    for(let t = 1; t < tag[1].length; t++ ) {
        if(tag[0].toString() === tag[1][t].word) {
            tag[2].amount += tag[1][t].sentiment;
        }
    }
    tag.push({'average': 0})
    tag[3].average = tag[2].amount / (tag[1].length - 1)

})


console.log(topTags)