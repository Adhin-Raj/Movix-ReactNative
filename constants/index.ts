export const apiBaseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";
export const API_KEY = "cb2feb2fb1ef69706dc1639ee1e711f2";

export const actionUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}`;
export const adventureUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=${API_KEY}`;
export const animationUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${API_KEY}`;
export const comedyUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${API_KEY}`;
export const crimeUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=80&api_key=${API_KEY}`;
export const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${API_KEY}`;
export const dramaUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=${API_KEY}`;
export const familyUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=10751&api_key=${API_KEY}`;
export const fantasyUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=14&api_key=${API_KEY}`;
export const historyUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=36&api_key=${API_KEY}`;
export const horrorUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${API_KEY}`;
export const musicUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=10402&api_key=${API_KEY}`;
export const mysteryUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=9648&api_key=${API_KEY}`;
export const romanceUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${API_KEY}`;
export const sci_fiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=${API_KEY}`;
export const tvMoviesUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=107770&api_key=${API_KEY}`;
export const warUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=10752&api_key=${API_KEY}`;
export const westerUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=37&api_key=${API_KEY}`;

export const genres: { [key: string]: string } = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
