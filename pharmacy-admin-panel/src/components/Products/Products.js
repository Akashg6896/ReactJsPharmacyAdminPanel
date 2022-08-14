import React, { useState, useEffect } from 'react'
import ProductsFilter from './ProductsFilter'
import ProductsHeader from './ProductsHeader'
import Product from './Product'
import styles from './Products.module.css'
import axios from 'axios'
const Products = () => {
  const [filterProductList, setFilterProductList] = useState([])
  const compareDateString = (elem) => {
    let todayDate = new Date()
    let todayDay = +todayDate.getDate()
    let todayMonth = +todayDate.getMonth()
    let todayYear = +todayDate.getFullYear()

    let expiryDate = new Date(elem.expiryDate)
    let expiryDay = +expiryDate.getDate()
    let expiryMonth = +expiryDate.getMonth()
    let expiryYear = +expiryDate.getFullYear()

    if (expiryYear < todayYear) {
      return true
    } else if (expiryYear === todayYear && expiryMonth < todayMonth) {
      return true
    } else if (
      expiryYear === todayYear &&
      expiryMonth === todayMonth &&
      expiryDay < todayDay
    ) {
      return true
    }
    return false
  }
  const ExpiredProduct = (product) => {
    if (filterProductArr.includes('Expired') && compareDateString(product)) {
      // console.log(product)
      return true
    }
    return false
  }
  const LowStockProduct = (product) => {
    if (filterProductArr.includes('Low Stock') && product.stock < 100) {
      return true
    }
    return false
  }
  const [filterProductArr, setFilterProductArr] = useState([])
  let ProductList = JSON.parse(localStorage.getItem('products'))
  if (ProductList === null) {
    axios
      .get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
      .then((res) => res.data)
      .then((res) => localStorage.setItem('products', JSON.stringify(res)))
      // }
      .then((res) => (ProductList = res))
  }
  useEffect(() => {
    if (filterProductArr.length > 0) {
      setFilterProductList(
        ProductList.filter((product) => LowStockProduct(product))
      )

      setFilterProductList((prevfilterProductList) => {
        return [
          ...prevfilterProductList,
          ...ProductList.filter((product) => ExpiredProduct(product)),
        ]
      })
    } else {
      setFilterProductList(ProductList)
    }
  }, [filterProductArr])
  return (
    <main>
      <h1>Products</h1>
      <div id={styles.categories}>
        <table>
          <ProductsHeader />
          {filterProductList.map((product) => (
            <Product product={product} />
          ))}
        </table>
      </div>
      <ProductsFilter
        setFilterProductArr={setFilterProductArr}
        length={filterProductList.length}
      />
    </main>
  )
}

export default Products
