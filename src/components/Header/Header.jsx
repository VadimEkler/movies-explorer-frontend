import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ name, loggedIn }) {
  const { pathname } = useLocation()

  return (
    <header className={`header ${name !== 'homepage' ? '' : 'header_type_homepage'}`}>
      <div className="header__container">
        <Link to='/' className="header__logo"/>
        <Navigation pathname={pathname} loggedIn={loggedIn} />
      </div>
    </header>
  );
}
