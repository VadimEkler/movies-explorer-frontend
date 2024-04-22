import Input from "../Input/Input";
import AuthFormWrapper from "../AuthFormWrapper/AuthFormWrapper";
import useFormValidator from '../../hooks/useFormValidator'
import { useNavigate } from "react-router-dom";


export default function Login({ name, setLoggedIn }) {
  const navigate = useNavigate()
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidator()

  function handleLogin(e) {
    e.preventDefault()
    setLoggedIn(true)
    navigate('/movies')
  }

  return (
    <AuthFormWrapper name={name} isValid={isValid} onSubmit={handleLogin}>
      <Input
        name='username'
        type='text'
        title='Имя'
        minLength = '3'
        maxLength = '40'
        value={values.username}
        isInputValid={isInputValid.username}
        error={errors.username}
        onChange={handleChange}
      />
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength = '5'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={handleChange}
      />
    </AuthFormWrapper>
  )
}