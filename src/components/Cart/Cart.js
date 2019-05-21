import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  wrapper,
  opened,
  topShaddow,
} from './Cart.module.scss'

const Cart = ({
  children,
  visible,
  hasItems,
}) => {
  const wrapperClasses = classNames(wrapper, {
    [opened]: visible
  })

  return (
    <div className={wrapperClasses}>
      <div className={topShaddow}></div>
      {
        hasItems 
          ? children
          : <p align="center">Carrinho vazio :(</p>
      }
    </div>
  )
}

Cart.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  hasItems: PropTypes.bool.isRequired,
}

export default React.memo(Cart)
