const movies = [{
    "name": "Naruto - Ninja Clash In The Land Of Snow",
    "year": 2004,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/de/Naruto_the_Movie_Ninja_Clash_in_the_Land_of_Snow.jpg",
    "url": "https://naruto.fandom.com/wiki/Naruto_the_Movie:_Ninja_Clash_in_the_Land_of_Snow"
},
    {
        "name": "Naruto - Legend Of The Stone Of Gelel",
        "year": 2005,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/2c/Naruto_the_Movie_-_Legend_of_the_Stone_of_Gelel.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_the_Movie:_Legend_of_the_Stone_of_Gelel"
    },
    {
        "name": "Naruto - Guardians Of The Crescent Moon Kingdom",
        "year": 2006,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/f/ff/Naruto_the_Movie_-_Guardians_of_the_Crescent_Moon_Kingdom.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_the_Movie:_Guardians_of_the_Crescent_Moon_Kingdom"
    },
    {
        "name": "Naruto - Naruto Shippuden The Movie",
        "year": 2007,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/a/ae/Naruto_Shippuden_the_Movie.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_Shipp%C5%ABden_the_Movie"
    },
    {
        "name": "Naruto – Bonds",
        "year": 2008,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/0/04/Naruto_Shippuden_the_Movie_Bonds.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_Shipp%C5%ABden_the_Movie:_Bonds"
    },
    {
        "name": "Naruto - The Will Of Fire",
        "year": 2009,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/ca/Naruto_Shippuden_the_Movie_-_The_Will_of_Fire.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_Shipp%C5%ABden_the_Movie:_The_Will_of_Fire"
    },
    {
        "name": "Naruto - The Lost Tower",
        "year": 2010,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/29/Naruto_Shippuden_the_Movie_-_The_Lost_Tower.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_Shipp%C5%ABden_the_Movie:_The_Lost_Tower"
    },
    {
        "name": "Naruto - Blood Prison",
        "year": 2011,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Naruto_Shippuden_5_Blood_Prison_poster.jpg",
        "url": "https://naruto.fandom.com/wiki/Naruto_the_Movie:_Blood_Prison"
    },
    {
        "name": "Naruto - Road To Ninja",
        "year": 2012,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/2a/Road_to_Ninja.jpg",
        "url": "https://naruto.fandom.com/wiki/Road_to_Ninja:_Naruto_the_Movie"
    },
    {
        "name": "Naruto - The Last",
        "year": 2014,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/TheLastNarutomovie.jpg",
        "url": "https://naruto.fandom.com/wiki/The_Last:_Naruto_the_Movie"
    }];

const movieHTML = movies.map(movie => {
    return `
            <div class="movie">
                <a href="${movie.url}" class="movie__link">
                    <img src="${movie.imageUrl}" alt="" class="movie__image">
                </a>
                <div class="movie__title">${movie.name}</div>
                <div class="movie__year">${movie.year}</div>
            </div>
    `;
});

const movieContainer = document.querySelector('.movies-container');
movieContainer.innerHTML = movieHTML.join("");