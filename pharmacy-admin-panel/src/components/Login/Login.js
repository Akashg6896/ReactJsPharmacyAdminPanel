import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import './../../App.css'
const Login = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    userName: '',
    passWord: '',
  })
  const submitHandler = (e) => {
    // e.preventDefault()
    if (
      user.userName === '' ||
      user.passWord === '' ||
      user.userName !== user.passWord
    ) {
      alert('Please enter valid credentials!')
    } else {
      localStorage.setItem('isLoggedIn', true)
      alert('Login Successful')
      props.userHandler(true)
      // axios
      //   .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
      //   .then((res) => res.data)
      //   .then((res) => localStorage.setItem('orders', JSON.stringify(res)))
      //   // }
      //   .then((res) => console.log(res))
      //   .then(() => navigate('/orders'))
      navigate('/orders')
    }
  }
  return (
    <form>
      <h1>Sign In</h1>
      <br />
      <input
        required
        type='text'
        name='username'
        placeholder='Enter UserName'
        id='username'
        value={user.userName}
        onChange={(e) =>
          setUser({
            ...user,
            userName: e.target.value,
          })
        }
      />
      <br />
      <input
        required
        type='password'
        name='password'
        placeholder='Enter Password'
        id='password'
        value={user.passWord}
        onChange={(e) =>
          setUser({
            ...user,
            passWord: e.target.value,
          })
        }
      />
      <br />
      <input
        type='button'
        name='Login'
        value='Login'
        className='submitBtn'
        onClick={submitHandler}
      />
    </form>
  )
}

export default Login
