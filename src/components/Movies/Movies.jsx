import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

const Movies = ({ initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies);
  const [isShortFilterActive, setIsShortFilterActive] = useState(false);

  useEffect(() => {
    const filteredMovies = isShortFilterActive ? initialMovies.filter(movie => movie.duration < 40) : initialMovies;
    setMovies(filteredMovies);
  }, [initialMovies, isShortFilterActive]);

  function toggleShortFilter() {
    setIsShortFilterActive(!isShortFilterActive);
  };

  return (
    <>
      <SearchForm checked={isShortFilterActive} changeShot={toggleShortFilter} />
      <MoviesCardList movies={movies} />
    </>
  );
};

export default Movies;