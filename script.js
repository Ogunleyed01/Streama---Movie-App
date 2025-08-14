const API_url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDNhZDRjMmMzYWJhNjAwZDVhYzQ4ODE1Mjg1ODc0YyIsIm5iZiI6MTc1NTExOTU5OS42NTc5OTk4LCJzdWIiOiI2ODljZmZlZjczMzVhMzAzY2U2ZDdkMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6GfgynWGOvvT4hzYadyL-b_kDcNFUBVNambTvdwyNms'
  }
};

const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Initial load of popular movies
getMovie(API_url);

async function getMovie(url) {
    try {
        const resp = await fetch(url, options);
        const respData = await resp.json();
        
        if (respData.results) {
            showMovies(respData.results);
        } else {
            main.innerHTML = '<h2>No results found</h2>';
        }
    } catch (error) {
        console.error('Error:', error);
        main.innerHTML = '<h2>Error fetching movies</h2>';
    }
}

function showMovies(movies) {
    main.innerHTML = '';
    
    movies.forEach(movie => {
        const { poster_path, title, vote_average, overview } = movie;

        if (poster_path) {  // Only show movies with posters
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            movieElement.innerHTML = `
                <img src="${IMGPATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class='${getClassByRate(vote_average)}'>${vote_average.toFixed(1)}</span>
                </div>
                <div class='overview'>${overview}</div>`;

            main.appendChild(movieElement);
        }
    });
}

function getClassByRate(vote) {
    if (vote >= 7) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        const searchUrl = `${SEARCH_API}&query=${encodeURIComponent(searchTerm)}`;
        getMovie(searchUrl);
        
        // Clear search input
        search.value = '';
    }
});