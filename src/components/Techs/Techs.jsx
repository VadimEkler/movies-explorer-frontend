import './Techs.css';

export default function AboutProject() {

  return (
    <section className="techs">
        <div className="techs__container">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__wrapper">
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__desription">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="techs__list">
                <li className="techs__list-item">HTML</li>
                <li className="techs__list-item">CSS</li>
                <li className="techs__list-item">JS</li>
                <li className="techs__list-item">React</li>
                <li className="techs__list-item">Git</li>
                <li className="techs__list-item">Express.js</li>
                <li className="techs__list-item">mongoDB</li>
            </ul>    
        </div>
    </section>
  );
}