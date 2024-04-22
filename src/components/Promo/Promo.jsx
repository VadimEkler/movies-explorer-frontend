import './Promo.css';

export default function Promo() {

  return (
    <section className="promo">
        <div className="promo__container">
          <div className="promo__backdrop"></div>
          <div className="promo__wrapper">
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про&nbsp;этот&nbsp;проект и его создателя.</p>
          </div>
          <a href='#aboutProject' className="promo__button">Узнать больше</a> 
        </div>
    </section>
  );
}