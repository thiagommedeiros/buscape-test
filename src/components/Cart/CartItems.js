import React from 'react'
import PropTypes from 'prop-types'

import {
  itemsList,
  itemWrapper,
  title,
  thumb,
  details,
  removeItem,
} from './CartItems.module.scss'

import { values } from './Cart.module.scss'

const CartItems = ({ items, onRemoveItem }) => (
  <ul className={itemsList}>
  {    
    items.map(item => {
      return (
        <li className={itemWrapper} key={item.id}>
          <img
            className={thumb}
            src={item.images[0]}
            alt={item.name}
          />
          <div className={details}>
            <span className={title}>
              {item.name}
            </span>
            <div className={values}>
              <div>{item.price.installments}x {item.price.installmentValue}</div>
              <div>ou {item.price.value} à vista</div>
            </div>
          </div>
          <div className={removeItem} onClick={onRemoveItem.bind(this, item.id)}>
            <button>X</button>
          </div>
        </li>
      )
    })
  }     
  </ul>
)

CartItems.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.array,
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      installments: PropTypes.number,
      installmentValue: PropTypes.number,
      value: PropTypes.number,
    }),
  }).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
}

export default React.memo(CartItems)