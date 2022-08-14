import React from 'react'
import styles from './Orders.module.css'
const Order = ({ order }) => {
  return (
    <tr className={styles.cellRow}>
      <td className={styles.cell}>{order.id}</td>
      <td className={styles.cell}>{order.customerName}</td>
      <td className={styles.cell}>
        {order.orderDate}
        <br />
        <span className={styles.cell}>{order.orderTime}</span>
      </td>
      <td className={styles.cell}>{order.orderStatus}</td>
      <td className={styles.cell}>{order.amount}</td>
    </tr>
  )
}

export default Order
