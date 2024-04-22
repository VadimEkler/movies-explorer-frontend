import './Profile.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import useFormValidator from '../../hooks/useFormValidator'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Profile({ name, setLoggedIn }) {

  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidator(); 
  
  function onEdit(e) {
    e.preventDefault();
  }

  function logOut() {
    setLoggedIn(false);
  }

  useEffect(() => {
    reset({name: 'Виталий', email: 'pochta@yandex.ru'})
  }, [reset])

  return (
    <section className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <Form
          name='profile'
          isValid={isValid}
          onSubmit={onEdit}
        >
          <Input
            pathname={name}
            name='name'
            type='text'
            title='Имя'
            minLength='3'
            maxLength='40'
            value={values.name}
            isInputValid={isInputValid.name}
            error={errors.name}
            onChange={handleChange}
          />
          <Input
            pathname={name}
            name='email'
            type='email'
            title='E-mail'
            value={values.email}
            isInputValid={isInputValid.email}ё
            error={errors.email}
            onChange={handleChange}
          />
        </Form>
        <Link to={'/'} className='profile__logout' onClick={logOut}>Выйти из аккаунта</Link>
      </div>
    </section>
  );
}