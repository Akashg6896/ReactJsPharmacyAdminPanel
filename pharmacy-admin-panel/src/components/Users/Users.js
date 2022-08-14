import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Users.module.css'
import UserHeader from './UserHeader'
import User from './User'
const Users = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filterUsers, setFilterUsers] = useState([])
  const searchHandler = (e) => {
    // console.log(e.target.value.length)
    if (e.code === 'Enter') {
      if (e.target.value.length >= 2) {
        setSearchValue(e.target.value)
        // userListElem(searchUserAPI, searchElem.value).then((res) =>
        //   listUserListElem(filterElements)
        // )
      } else {
        alert('Please enter at least 2 characters')
      }
    }
  }
  // const resetHandler = () => {
  //   setSearchValue('')
  // }
  let UserList = JSON.parse(localStorage.getItem('users'))
  if (UserList === null) {
    axios
      .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users')
      .then((res) => res.data)
      .then((res) => localStorage.setItem('users', JSON.stringify(res)))
      // }
      .then((res) => (UserList = res))
      .then((res) => setFilterUsers(UserList))
  }
  useEffect(() => {
    axios
      .get(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchValue}`
      )
      .then((res) => res.data)
      // .then((res) => localStorage.setItem('users', JSON.stringify(res)))
      // }
      .then((res) => setFilterUsers(res))
  }, [searchValue])
  return (
    <main>
      <h1>Users</h1>
      <div id={styles.searchContainer}>
        <input
          type='text'
          placeholder='Search By Name'
          id={styles.search}
          // value={searchValue}
          // onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => searchHandler(e)}
        />
        <button onClick={(e) => setSearchValue('')}>Reset</button>
      </div>
      <div id={styles.UserCategories}>
        <table className={styles.table}>
          <UserHeader />
          {filterUsers.map((user) => (
            <User user={user} />
          ))}
        </table>
      </div>
    </main>
  )
}

export default Users
