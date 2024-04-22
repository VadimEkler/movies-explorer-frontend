import "./PageNotFound.css"
import { Link, useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate = useNavigate()

  return(
    <section className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__wrapper">
          <p className="page-not-found__status">404</p>
          <p className="page-not-found__message">Страница не найдена</p>
        </div>
        <Link className="page-not-found__link" onClick={() => navigate(-1)}>Назад</Link>
      </div>      
    </section>
  )
}