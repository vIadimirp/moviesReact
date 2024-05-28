const API_KEY = "993d4d89e26646e04d0bb0def53ee88d";


export async function getMovies(mode, page) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${mode}?api_key=${API_KEY}&language=en-EN&page=${page}`);
    const data = await response.json(); return data;
}

export async function createRequestSession() {
    const response = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`);
    const data = await response.json(); return data.guest_session_id;
}

export async function rateMovie(movieId, rate) {
    const headers = {
        
    }
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${API_KEY}`);
}

export async function searchMovies(query) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-EN&query=${query}`);
    const data = await response.json(); return data;
}

export async function getImageURL(movieItem, count=0) {
    let result;

    fetch(`https://image.tmdb.org/t/p/original${movieItem.poster_path}`)
    .then(response => response.blob())
    .then(image => {result = URL.createObjectURL(image);})
    .catch(() => {result = count < 3 ? getImageURL(movieItem, count+1) : null});

    return result;
}
