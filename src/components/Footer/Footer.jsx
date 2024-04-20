import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="footer">
        <div className="footer__container">
            <h2 className="footer__text footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__wrapper">
                <span className="footer__text">© 2024</span>
                <div className="footer__links-wrapper">
                    <Link className="footer__text footer__link" to="https://practicum.yandex.ru/" target='_blank'>Яндекс.Практикум</Link>
                    <Link className="footer__text footer__link" to="https://github.com/VadimEkler" target='_blank'>Github</Link>   
                </div>
            </div>
        </div>
    </footer>
  );
}