import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=13de176c914f6f4e82e47c1a61dede31&language=es-MX&page=1
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '13de176c914f6f4e82e47c1a61dede31',
    language: 'es-MX',
  },
});

export default movieDB;
