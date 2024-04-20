import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState } from 'react';

export default function MoviesCardList({ movies }) {

  const [counter, setCounter] = useState(renderCards().init)
  const renderCounter = movies.slice(0, counter)

  function renderCards() {
    const counter = { init: 16, step: 4 }
    if (document.documentElement.clientWidth <= 320) {
      counter.init = 5;
      counter.step = 1;
    } else if (document.documentElement.clientWidth <= 1000) {
      counter.init = 8;
      counter.step = 2;
    } else if (document.documentElement.clientWidth <= 1160) {
      counter.init = 6;
      counter.step = 3;
    }
    return counter;
  }

  

  function renderMore() {
    setCounter(counter + renderCards().step)
  }

  return(
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {renderCounter.map(data => {
          return (
            <MoviesCard key={data.movieId} name={data.name} src={data.image} duration={data.duration} trailerLink={data.trailerLink}/>
          )
        })}
      </ul>
      <button type='button' className={`movies-card-list__more-button ${counter >= movies.length && "movies-card-list__more-button_type_hidden"}`} onClick={renderMore}>Ещё</button>
    </section>
  );
}