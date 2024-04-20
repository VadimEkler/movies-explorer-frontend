import './AboutProject.css';

export default function AboutProject() {

  return (
    <section className="about-project" id='aboutProject'>
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
          <div className="about-project__wrapper">
            <div className="about-project__task-wrapper">
              <h3 className="about-project__task">Дипломный проект включал 5 этапов</h3>
              <p className="about-project__subtask">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about-project__task-wrapper">
              <h3 className="about-project__task">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__subtask">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>   
          </div>
          <div className="about-project__timeline">
            <div className="about-project__timeline-stage-wrapper about-project__timeline-stage-wrapper_type_backend">
              <span className="about-project__duration about-project__duration_type_backend">1 неделя</span>
              <span className="about-project__stage">Back-end</span>
            </div>
            <div className="about-project__timeline-stage-wrapper">
              <span className="about-project__duration">4 недели</span>
              <span className="about-project__stage">Front-end</span>
            </div>
          </div>
      </div>
    </section>
  );
}