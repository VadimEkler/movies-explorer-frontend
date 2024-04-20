import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import { constantMovies, constantMoviesSaved } from '../../utils/constants';
import { useEffect, useState } from 'react';

function Main({ name, setLoggedIn }) {
  const [movies, setMovies] = useState([])
  const [moviesSaved, setMoviesSaved] = useState([])

  useEffect(() => {
    setMovies(constantMovies)
    setMoviesSaved(constantMoviesSaved)
  }, [])

  return (
    <main className='main'>
        {name === 'homepage' ? (
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </>
        ) : name === 'signin' ? ( 
          <Login name={name} setLoggedIn={setLoggedIn} />
        ) : name === 'signup' ? (
          <Register name={name} setLoggedIn={setLoggedIn} />
        ) : name === 'notFoundError' ? (
          <PageNotFound />
        ) : name === 'profile' ? (
          <Profile name={name} setLoggedIn={setLoggedIn} />
        ) : name === 'movies' ? (
          <Movies initialMovies={movies} />
        ) : name === 'saved-movies' ? (
          <Movies initialMovies={moviesSaved} />
        ) : name === 'notFoundError' ? (
          <PageNotFound />
        ) : null} 
    </main>
  );
}

export default Main;