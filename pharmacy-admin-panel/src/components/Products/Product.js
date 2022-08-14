import React from 'react'
import styles from './Products.module.css'
const Product = ({ product }) => {
  return (
    <tr className={styles.cellRow}>
      <td className={styles.cell}>{product.id}</td>
      <td className={styles.cell}>{product.medicineName}</td>
      <td className={styles.cell}>{product.medicineBrand}</td>
      <td className={styles.cell}>{product.expiryDate}</td>
      <td className={styles.cell}>{product.unitPrice}</td>
      <td className={styles.cell}>{product.stock}</td>
    </tr>
  )
}

export default Product
