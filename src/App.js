import React, {useState} from 'react'
import './App.css'

const App = () => {
  // ХУКИ - useState()
  // const [state, setState] = useState(initialState)
  // state - состояние
  // setState = функция для изменения state
  // initialState - изначальное состояние state

  // Состояние для ЛОГИНА
  const [login, setLogin] = useState('')

  // Состояние для ПАРОЛЯ
  const [password, setPassword] = useState('')

  // Состояние для сверки ( АВТОРИЗАЦИЯ/РЕГИСТРАЦИЯ )
  const [isSignIn, setIsSignIn] = useState(true)

  const handleSubmit = (event) => {
    // Чтобы страница не перезагружалась
    event.preventDefault()

    // Собираем информацию с инпутов
    const data = {
      login: login,
      password: password
    }

    // Имитация того что мы отправляем эту инфу на БЭК
    console.log(data)
  }

  const handleLoginChange = (event) => {
    // Сохраняем в login - новое значение
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event) => {
    // Сохраняем в password - новое значение
    setPassword(event.target.value)
  }

  return <React.Fragment>
    <form onSubmit={handleSubmit}>
      <div className='btn_wrapper'>
        <button
            onClick={() => setIsSignIn(false)}
            className='btn_sign_up'
        >
          Зарегистрироваться
        </button>
        <button
            onClick={() => setIsSignIn(true)}
            className='btn_sign_in'
        >
          Войти
        </button>
      </div>
      <h3>{isSignIn ? 'Вход' : 'Регистрация'}</h3>
      <input
        onChange={handleLoginChange}
        value={login}
        placeholder={isSignIn ? 'Введите ваш логин' : 'Придумайте логин'}
      />
      <input
        onChange={handlePasswordChange}
        value={password}
        placeholder={isSignIn ? 'Введите ваш пароль' : 'Придумайте пароль'}
        type='password'
      />
      <button className='btn_submit' type='submit'>
        {isSignIn ? 'Войти' : 'Зарегистрироваться'}
      </button>
    </form>
  </React.Fragment>
}

export default App