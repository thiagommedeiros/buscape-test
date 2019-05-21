import React from 'react'
import PropTypes from 'prop-types'

import { wrapper, subtotal } from './CartTotal.module.scss'
import { values } from './Cart.module.scss'

const CartTotal = ({
  installments,
  totalInstallments,
  totalAmount
}) => (
  <div className={wrapper}>
    <div className={subtotal}>
      Subtotal
    </div>
    <div className={values}>
      <div>{installments}x {totalInstallments}</div>
      <div>ou { totalAmount } à vista</div>
    </div>
  </div>
)

CartTotal.propTypes = {
  installments: PropTypes.number.isRequired,
  totalInstallments: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
}

export default React.memo(CartTotal)
