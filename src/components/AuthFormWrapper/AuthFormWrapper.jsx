import './AuthFormWrapper.css';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';


export default function AuthFormWrapper({ name, children, isValid, onSubmit }) {
  return (
    <section className='auth-form'>
      <div className='auth-form__container'>
        <Link to={'/'} className="auth-form__logo"></Link>
        <h2 className='auth-form__title'>{name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
        <Form name={name} isValid={isValid} onSubmit={onSubmit}>
          {children}
        </Form>
        {
          name === 'signin' ?
            <p className='auth-form__text'>Ещё не зарегистрированы? <Link to={'/signup'} className='auth-form__link'>Регистрация</Link></p>
          : name === 'signup' ?
            <p className='auth-form__text'>Уже зарегистрированы? <Link to={'/signin'} className='auth-form__link'>Войти</Link></p>
          :
            <Link to={'/'}>Выйти из аккаунта</Link>
        }
      </div>
    </section>
  )
}