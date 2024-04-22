import './Portfolio.css';
import { Link } from 'react-router-dom';

export default function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__wrapper">
          <li className="portfolio__wrapper-project">
            <h3 className="portfolio__project-title">Статичный сайт</h3>
            <Link to="https://github.com/VadimEkler/how-to-learn" target="_blank" rel="noreferrer">
              <div className="portfolio__project-link"></div>
            </Link>
          </li>
          <li className="portfolio__wrapper-project">
            <h3 className="portfolio__project-title">Адаптивный сайт</h3>
            <Link to="https://github.com/VadimEkler/russian-travel" target="_blank" rel="noreferrer">
              <div className="portfolio__project-link"></div>
            </Link>
          </li>
          <li className="portfolio__wrapper-project">
            <h3 className="portfolio__project-title">Одностраничное приложение</h3>
              <Link to="https://github.com/VadimEkler/russian-travel" target="_blank" rel="noreferrer">
                <div className="portfolio__project-link"></div>
              </Link>
            </li>
        </ul>
      </div>
    </section>
  );
}