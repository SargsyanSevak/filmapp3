"use strict";
const numberOfFilms = start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    isVisibleMyDB() {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false
            console.log(this);
        } else {
            personalMovieDB.privat = true;
            console.log(this);
        }
    },
    detectUserPersonalLevel() {
        if (numberOfFilms < 10) {
            console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
        } else if (numberOfFilms < 30) {
            console.log("Դուք ֆիլմի սիրահար եք");
        } else if (numberOfFilms >= 30) {
            console.log("Դուք Կինոման եք !!!");
        }
    },

    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
            const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");

            if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("DONE");
            } else {
                console.log("ERROR");
                i--;
            }
        }
    },
    yourFavoriteGenres() {
        for (let i = 0; i <= 2; i++) {
            const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
            if (genres.trim() != "" && genres != null && genres.length <= 20) {
                personalMovieDB.genres[i] = genres;
            } else {
                i--;
            }

        }
        personalMovieDB.genres.forEach(function(arr, i) {
            console.log(`${i+1} : ${arr}`);
        });
    },
    showMyDB() {
        if (personalMovieDB.privat === true) {
            console.log(personalMovieDB);
        } else {
            console.log("Մեր տվյալների բազան փակ է");
        }
    }
};

personalMovieDB.detectUserPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.showMyDB();
personalMovieDB.isVisibleMyDB()

function start(numberOfFilms) {
    numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
    }

    return numberOfFilms;
}