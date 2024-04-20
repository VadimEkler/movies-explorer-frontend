import './Navigation.css'
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navigation({ pathname, loggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  const clickEndpoint = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    function closeMenuOnWindowResize() {
      if (document.documentElement.clientWidth > 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', closeMenuOnWindowResize);
    return () => window.removeEventListener('resize', closeMenuOnWindowResize);
  }, [isOpen]);

  return (
    <>
      { loggedIn ?
      <>
        <nav className={`navigation ${isOpen ? "navigation_type_open" : ''}`}>
            <ul className="navigation__wrapper navigation__wrapper-mobile-menu">
              <li>
                <Link
                  to={'/'}
                  className={`navigation__auth-text navigation__link navigation__main-link ${pathname === '/' ? 'navigation__link_type_active' : ''}`}
                  onClick={clickEndpoint}
                >Главная</Link>
              </li>
              <li>
                <div className='navigation__films-wrapper'>
                  <Link
                    to='/movies'
                    className={`navigation__auth-text navigation__auth-text_type_short navigation__link ${pathname === '/movies' ? 'navigation__link_type_active' : ''}`}
                    onClick={clickEndpoint}
                  >Фильмы</Link>
                  <Link
                    to='/saved-movies'
                    className={`navigation__auth-text navigation__link ${pathname === '/saved-movies' ? 'navigation__link_type_active' : ''}`}
                    onClick={clickEndpoint}
                  >Сохранённые фильмы</Link>
                </div>
              </li>
              <li>
                <Link to='/profile' className='navigation__account-wrapper navigation__link' onClick={clickEndpoint}>
                  <span className="navigation__auth-text navigation__account">Аккаунт</span>
                  <div className={`navigation__account-icon ${pathname === '/' ? 'navigation__account-icon_type_main' : ''}`}></div>
                </Link>
              </li>
            </ul>
            <button className="navigation__close-menu-button" type="button" onClick={handleClick}></button>
          </nav>
          <button className="navigation-menu" type="button" onClick={handleClick}></button>
        </>
        :
        <nav className="navigation navigation_type_unauth">
          <ul className="navigation__wrapper navigation__wrapper_type_unauth">
            <li>
              <Link to='/signup' className="navigation__unauth-text">Регистрация</Link>
            </li>
            <li>
              <Link to='/signin' className="navigation__unauth-text navigation__sign-in">Войти</Link>
            </li>
          </ul>
        </nav>
    }
    </>    
  );
}

export default Navigation;