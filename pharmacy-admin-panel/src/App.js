import './App.css'
import { Routes, Route } from 'react-router'
import axios from 'axios'
import PharmacyNavBar from './components/PharmacyNavBar'
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'
import Users from './components/Users/Users'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Login from './components/Login/Login'
function App() {
  // const [user, setUser] = useState({
  //   userName: '',
  //   passWord: '',
  // })
  const navigate = useNavigate()
  const isUserLogged = JSON.parse(localStorage.getItem('isLoggedIn'))
  const [isLoggedIn, setLoggedIn] = useState(
    isUserLogged === null ? false : isUserLogged
  )
  const userHandler = (userLogged) => {
    console.log(userLogged)
    setLoggedIn(userLogged)
  }
  useEffect(() => {
    console.log('user logged')

    // setLoggedIn(isUserLogged === null ? false : isUserLogged)
    console.log(isLoggedIn)
    if (localStorage.getItem('orders') === null) {
      axios
        .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
        .then((res) => res.data)
        .then((res) => localStorage.setItem('orders', JSON.stringify(res)))

      // .then(() => navigate('/orders'))
      // navigate('/orders')
    }
    if (localStorage.getItem('products') === null) {
      axios
        .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
        .then((res) => res.data)
        .then((res) => localStorage.setItem('products', JSON.stringify(res)))
    }
    if (localStorage.getItem('users') === null) {
      axios
        .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users')
        .then((res) => res.data)
        .then((res) => localStorage.setItem('users', JSON.stringify(res)))
    }
  }, [isUserLogged, isLoggedIn])
  return (
    <div className='App'>
      <PharmacyNavBar isLoggedIn={isLoggedIn} userHandler={userHandler} />
      <Routes>
        <Route
          path='/orders'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Orders />
          }
        />
        <Route
          path='/products'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Products />
          }
        />
        <Route
          path='/users'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Users />
          }
        />
        <Route
          path='/login'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Orders />
          }
        />
        <Route
          path='/'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Orders />
          }
        />
        <Route
          path='*'
          element={
            !isLoggedIn ? <Login userHandler={userHandler} /> : <Orders />
          }
        />
      </Routes>
    </div>
  )
}

export default App
