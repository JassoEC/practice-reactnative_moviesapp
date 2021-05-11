import {useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MoviesResponse} from '../interfaces/movie.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    upcoming: [],
    popular: [],
    topRated: [],
    nowPlaying: [],
  });
  const [isloading, setIsloading] = useState(true);

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MoviesResponse>('now_playing');
    const popular = movieDB.get<MoviesResponse>('popular');
    const topRated = movieDB.get<MoviesResponse>('top_rated');
    const upcoming = movieDB.get<MoviesResponse>('upcoming');

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsloading(false);
  };

  return {getMovies, ...moviesState, isloading};
};
