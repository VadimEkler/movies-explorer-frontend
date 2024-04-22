import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useState } from 'react';

export default function MoviesCard({name, duration, src, trailerLink}) {
  const [click, setClick] = useState(false);
  const { pathname } = useLocation();

  function onClick() {
    if (click) {
        setClick(false);
    } else {
        setClick(true);
    }
  }

  return (
    <li className="movies-card">
      <article className="movies-card__container">
        <Link to={trailerLink} target="_blank">
          <img className="movies-card__image" src={src} alt={name} />
        </Link>
        <div className="movies-card__wrapper">
          <div className="movies-card__inner-wrapper">
            <p className="movies-card__name">{name}</p>
            { pathname !== '/saved-movies' ?
                <button className={`movies-card__button ${click ? "movies-card__button_type_active" : ""}`} type="button" onClick={onClick}></button>
              :
                <button className={`movies-card__button movies-card__button_type_delete`} type="button" onClick={onClick}></button>
            }
          </div>
          <span className="movies-card__duration">{Math.floor(duration / 60)}ч{duration % 60}м</span>
        </div>
      </article>
    </li>
  );
}