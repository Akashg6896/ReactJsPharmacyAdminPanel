import React from 'react'
import styles from './Orders.module.css'
const OrderFilters = ({ count, setFilterItemArr }) => {
  const setFilterItem = (e) => {
    console.log(e)
    if (e.target.checked) {
      setFilterItemArr((prevfilterItemArr) => [
        ...prevfilterItemArr,
        e.target.value,
      ])
    } else {
      setFilterItemArr((prevfilterItemArr) => [
        ...prevfilterItemArr.filter(
          (filterItem) => filterItem !== e.target.value
        ),
      ])
    }
  }
  return (
    <div id={styles.filter}>
      <h3>Filters</h3>
      <div id={styles.count}>Count : {count}</div>
      <div id={styles.checkboxes}>
        <input
          type='checkbox'
          value='New'
          id='New'
          className={styles.filterItem}
          onChange={(e) => setFilterItem(e)}
        />
        <label htmlFor='New'>New</label>
        <br />
        <input
          type='checkbox'
          value='Packed'
          id='Packed'
          className={styles.filterItem}
          onChange={(e) => setFilterItem(e)}
        />
        <label htmlFor='Packed'>Packed</label>
        <br />
        <input
          type='checkbox'
          value='InTransit'
          id='InTransit'
          className={styles.filterItem}
          onChange={(e) => setFilterItem(e)}
        />
        <label htmlFor='InTransit'>InTransit</label>
        <br />
        <input
          type='checkbox'
          value='Delivered'
          id='Delivered'
          className={styles.filterItem}
          onChange={(e) => setFilterItem(e)}
        />
        <label htmlFor='Delivered'>Delivered</label>
        <br />
      </div>
    </div>
  )
}

export default OrderFilters
