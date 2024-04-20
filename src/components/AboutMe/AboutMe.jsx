import './AboutMe.css';
import photo from '../../images/VITALYY.png';
import { Link } from 'react-router-dom';

export default function AboutMe() {

  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
          <div className="about-me__wrapper">
            <div className="about-me__wrapper-description">
              <h3 className="about-me__name">Виталий</h3>
              <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__meeting">
                Я родился и живу в Саратове, закончил факультет экономики&nbsp;СГУ. 
                У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал 
                кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
              <Link to='https://github.com/VadimEkler' className="about-me__link"  target="_blank" rel="noreferrer">Github</Link>
            </div>
              <img className="about-me__photo" alt="Моё фото" src={photo}/>
            </div>
      </div>
    </section>
  );
}