import './Form.css';

export default function Form({name, children, isValid, onSubmit}) {

  return (
    <form  name={name} onSubmit={onSubmit} noValidate>
    <div className={`${name === 'profile' ? '' : 'auth-form__wrapper' }`}>
      {children}
    </div>
    {{signin:
        <div className="auth-form__button-wrapper">
          <span className='auth-form__error'>Вы ввели неправильный логин или пароль.</span>
          <button
            type='submit'
            className={`auth-form__submit ${isValid ? '' : 'auth-form__submit_type_disabled'}`}
            disabled={!isValid}>Войти
          </button>
        </div>,
      signup:
        <div className="auth-form__button-wrapper">
          <span className='auth-form__error'>При регистрации пользователя произошла ошибка.</span>
          <button
            type='submit'
            className={`auth-form__submit ${isValid ? '' : 'auth-form__submit_type_disabled'}`}
            disabled={!isValid}>Зарегистрироваться
          </button>
        </div>,
      profile:
        <>
          <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
          <button
            type='submit'
            className='profile__submit'>Редактировать
          </button>
        </>  
    }[name]}
    </form>
  );
}