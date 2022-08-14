import React from 'react'
import styles from './Products.module.css'
const ProductsFilter = ({ setFilterProductArr, length }) => {
  const setFilterProduct = (e) => {
    console.log(e)
    if (e.target.checked) {
      setFilterProductArr((prevfilterItemArr) => [
        ...prevfilterItemArr,
        e.target.value,
      ])
    } else {
      setFilterProductArr((prevfilterItemArr) => [
        ...prevfilterItemArr.filter(
          (filterItem) => filterItem !== e.target.value
        ),
      ])
    }
  }
  return (
    <div id={styles.filter}>
      <h3>Filters</h3>
      <div id={styles.count}>Count : {length}</div>
      <div id={styles.checkboxes}>
        <input
          type='checkbox'
          value='Expired'
          id='Expired'
          className={styles.filterProduct}
          onChange={(e) => setFilterProduct(e)}
        />
        <label htmlFor='Expired'>Expired</label>
        <br />
        <input
          type='checkbox'
          value='Low Stock'
          id='Low Stock'
          className={styles.filterProduct}
          onChange={(e) => setFilterProduct(e)}
        />
        <label htmlFor='Low Stock'>Low Stock</label>
        <br />
      </div>
    </div>
  )
}

export default ProductsFilter
