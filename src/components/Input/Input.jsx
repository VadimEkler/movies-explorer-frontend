import './Input.css';

export default function Input({ pathname, title, name, type, minLength, maxLength, value, onChange, isInputValid, error }) {
    
  return(
    <>
      {
      pathname === 'profile' ?
        <label className='profile__input-container'>
          <p className='profile__subtitle'>{title}</p>
          <input
            required
            type={type}
            name={name}
            minLength={minLength || ''}
            maxLength={maxLength || ''}
            className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input__type_invaid'}`}
            value={value || ''}
            onChange={onChange}/>
          <span className={`profile__error ${name === 'name' ? 'profile__error_type_name' : ''}`}>{error}</span>
        </label>
        :
        <label className='auth__input-container'>
          <p className='auth-form__subtitle'>{title}</p>
          <input
            required
            type={type}
            name={name}
            minLength={minLength || ''}
            maxLength={maxLength || ''}
            className={`auth-form__input ${isInputValid === undefined || isInputValid ? '' : 'auth-form__input__type_invaid'} ${name !== 'password' ? '' : 'auth-form__input_type_password'}`}
            value={value || ''}
            onChange={onChange}
            autoComplete='on'
          />
          <span className='auth-form__input-error'>{error}</span>
        </label>
      }
    </>   
    )
}

