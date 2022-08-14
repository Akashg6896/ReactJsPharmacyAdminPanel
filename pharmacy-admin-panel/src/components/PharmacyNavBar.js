import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './../App.css'
const PharmacyNavBar = ({ isLoggedIn, userHandler }) => {
  const navigate = useNavigate()
  const logoutHandler = () => {
    // localStorage.removeItem('orders')
    // localStorage.removeItem('isLoggedIn')
    localStorage.clear()
    userHandler(false)
    navigate('/login')
  }
  //   let active = {}
  const navActiveLink = ({ isActive }) => {
    // active = isActive ? 'active' : 'sideBar'
    return {
      borderBottom: isActive && isLoggedIn ? '3px solid #20b883' : '',
      color: isActive && isLoggedIn ? '##20b883' : 'inherit',
    }
  }
  return (
    <nav className='top-bar'>
      {/* <div class='top-left-bar'> */}
      <div id='logo'>
        <img
          src='https://edu-web-fundamentals.web.app/static/media/logo.58169365.png'
          alt='Kafene'
        />
        <span>Kafene</span>
      </div>
      <div className='orders'>
        {/* <a href='#'>Orders</a> */}
        <NavLink to='orders' style={navActiveLink}>
          Orders
        </NavLink>
      </div>
      <div className='products'>
        {/* <a href='#'>Products</a> */}
        <NavLink to='products' style={navActiveLink}>
          Products
        </NavLink>
      </div>
      <div className='users'>
        {/* <a href='#'>Users</a> */}
        <NavLink to='users' style={navActiveLink}>
          Users
        </NavLink>
      </div>
      {/* </div> */}
      {isLoggedIn && (
        <div className='logout'>
          {/* <a href='#'>Users</a> */}
          <NavLink to='login' onClick={logoutHandler}>
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default PharmacyNavBar
