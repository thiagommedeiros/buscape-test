import React from 'react'
import PropTypes from 'prop-types'

import {
  details,
  title,
  callToAction,
  values,
  installmentsWrapper,
  highlightAmount,
  inCash,
  btnAddToCart,
} from './Details.module.scss'

const Details = ({
  name,
  installments,
  installmentValue,
  value,
  onClickAddToCart,
}) => (
  <div className={details}>
    <div className={title}>
      { name }
      <i className="far fa-heart"></i>
    </div>
    <div className={callToAction}>
      <div className={values}>
        <span className={installmentsWrapper}>
          { installments }x
          <span className={highlightAmount}>
            { installmentValue }
          </span>
        </span>
        <span>
          ou 
          <span className={inCash}>
            { value }
          </span>
          à vista
        </span>
      </div>
      <div className={btnAddToCart} onClick={onClickAddToCart.bind(this)}>
        Adicionar ao carrinho
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
)

Details.propTypes = {
  name: PropTypes.string.isRequired,
  installments: PropTypes.number.isRequired,
  installmentValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onClickAddToCart: PropTypes.func.isRequired,
}

export default React.memo(Details)
