import React from 'react'
import styles from './Orders.module.css'
const OrdersHeader = () => {
  return (
    // <tbody>
    <tr>
      <th className={styles.cell}>ID</th>
      <th className={styles.cell}>Customer</th>
      <th className={styles.cell}>Date</th>
      <th className={styles.cell}>Amount</th>
      <th className={styles.cell}>Status</th>
    </tr>
    // </tbody>
  )
}

export default OrdersHeader
