const API_KEY = 'e41f23511f4aaff77688a93cc5d358ab';

export const fetchTrendMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return await response.json();
};

export const fetchMovieSearch = async params => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params}`
  );
  return await response.json();
};

export const fetchMovieDetails = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return await response.json();
};

export async function fetchDetailsCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.json();
}

export async function fetchDetailsReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.json();
}
