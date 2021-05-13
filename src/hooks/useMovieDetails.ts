import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/credits.interfaces';
import {MovieFullResponse} from '../interfaces/movie.interface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFullResponse;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFullResponse>(
      `${movieId}`,
    );
    const castPromise = await movieDB.get<CreditsResponse>(
      `${movieId}/credits`,
    );

    const [movieDetilsResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetilsResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
