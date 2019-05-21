import React from 'react'
import PropTypes from 'prop-types'
import { wrapper } from './Product.module.scss'

const Product = ({ children }) => (
  <div className={wrapper}>
    { children }
  </div>
)

Product.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Product)
