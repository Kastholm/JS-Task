/*
    Selvfølgelig! Her er en ny opgave, der er fokuseret på datamanipulation, som er praktisk for
    fullstack-udvikling.

    📖 Historie:

    Du arbejder på en RESTful API til en fitness-app kaldet "FitTrack".
    Brugerne kan logge deres træningsøvelser, og din opgave er at hjælpe med at organisere og analysere deres data. Din chef har bedt dig om at implementere en funktion, der sammenfatter brugerens træningsaktiviteter.

    📝 Opgave:

    Du får en liste over træningslogfiler, hvor hver log indeholder information om øvelsens navn, kategori (f.eks. "Cardio", "Strength", "Flexibility"), og hvor mange kalorier der blev forbrændt under øvelsen. Din opgave er at:

    Gruppere træningslogfilerne efter kategori.
    Beregne det samlede antal forbrændte kalorier for hver kategori.
    Sortere kategorierne baseret på det samlede antal kalorier (højeste først).
    Logge resultatet til konsollen i et letlæseligt format.
*/

const workoutLogs = [
    { exercise: 'Running', category: 'Cardio', caloriesBurned: 300 },
    { exercise: 'Push-ups', category: 'Strength', caloriesBurned: 100 },
    { exercise: 'Yoga', category: 'Flexibility', caloriesBurned: 50 },
    { exercise: 'Cycling', category: 'Cardio', caloriesBurned: 250 },
    { exercise: 'Weightlifting', category: 'Strength', caloriesBurned: 150 },
    { exercise: 'Pilates', category: 'Flexibility', caloriesBurned: 60 },
    { exercise: 'Swimming', category: 'Cardio', caloriesBurned: 400 },
    { exercise: 'Squats', category: 'Strength', caloriesBurned: 120 },
];


let categorizedLogs = workoutLogs.reduce((acc, exercise) => {
    let category = exercise.category;

    if(!acc[category]) {
        acc[category] = []
        acc[category].push({'CaloriesSum' : 0})
    }

    acc[category][0].CaloriesSum += exercise.caloriesBurned;
    acc[category].push(exercise);


    return acc;

}, [])


categorizedLogs.sort((a, b) => categorizedLogs[a].CaloriesSum - categorizedLogs[b].CaloriesSum)

console.log(categorizedLogs)