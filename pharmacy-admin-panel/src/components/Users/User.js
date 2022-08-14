import React from 'react'
import styles from './Users.module.css'
const User = ({ user }) => {
  return (
    <tr className={styles.cell}>
      <td className={styles.cell}>{user.id}</td>
      <td className={styles.cell}>
        <img src={user.profilePic} alt='Profile Pic' key={user.id} />
      </td>
      <td className={styles.cell}>{user.fullName}</td>
      <td className={styles.cell}>{user.dob}</td>
      <td className={styles.cell}>{user.gender}</td>
      <td className={styles.cell}>
        {user.currentCity},{user.currentCountry}
      </td>
    </tr>
  )
}

export default User
