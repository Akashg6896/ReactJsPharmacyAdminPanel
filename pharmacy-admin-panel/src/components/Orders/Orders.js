import React, { useEffect, useState } from 'react'
import OrderFilters from './OrderFilters'
import OrdersHeader from './OrdersHeader'
import axios from 'axios'
import Order from './Order'
import styles from './Orders.module.css'
const Orders = () => {
  const [filterOrderList, setFilterOrderList] = useState([])
  let orderList = JSON.parse(localStorage.getItem('orders'))
  const [filterItemArr, setFilterItemArr] = useState([])
  if (orderList === null) {
    console.log(orderList)
    axios
      .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
      .then((res) => res.data)
      .then((res) => localStorage.setItem('orders', JSON.stringify(res)))
      // }
      .then((res) => (orderList = res))
  }
  useEffect(() => {
    console.log(filterItemArr)
    setFilterOrderList(
      orderList.filter((order) => {
        if (filterItemArr.includes(order.orderStatus) === true) {
          console.log(order)
          return order
        }
      })
    )
    // orderList = filterOrderList
    console.log(orderList)
  }, [filterItemArr])

  // useEffect(() => {
  // axios
  //   .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
  //   .then((res) => res.data)
  //   .then((res) => localStorage.setItem('orders', JSON.stringify(res)))
  //   // }
  //   .then((res) => (orderList = res))
  // orderList = JSON.parse(localStorage.getItem('orders'))
  //   .then((res) => localStorage.setItem('orders', JSON.stringify(res)))
  // }, [])
  // console.log(orderList)
  return (
    <main>
      <h1 className={styles.title}>Orders</h1>
      <div id={styles.categories}>
        <table>
          {/* <tr>
            <th className={styles.headercell}>ID</th>
            <th className={styles.headercell}>Customer</th>
            <th className={styles.headercell}>Date</th>
            <th className={styles.headercell}>Amount</th>
            <th className={styles.headercell}>Status</th>
          </tr> */}
          <OrdersHeader />
          {filterOrderList.map((order) => (
            <Order order={order} />
          ))}
          {/* <tr className={styles.cellRow}>
            <td className={styles.cell}>714-69-5617</td>
            <td className={styles.cell}>Sally Whebell</td>
            <td className={styles.cell}>
              07 Aug, 2020
              <br />
              <span className={styles.cell}>2:29 AM</span>
            </td>
            <td className={styles.cell}>$634.2</td>
            <td className={styles.cell}>Delivered</td>
          </tr> */}
        </table>
      </div>
      <OrderFilters
        setFilterItemArr={setFilterItemArr}
        count={filterOrderList.length}
      />
    </main>
  )
}

export default Orders
