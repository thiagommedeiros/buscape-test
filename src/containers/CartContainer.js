import React, { useContext } from 'react'

import { StateContext } from '../state'

import Cart from '../components/Cart/Cart'
import CartItems from '../components/Cart/CartItems'
import CartTotal from '../components/Cart/CartTotal'

import formatCurrency from '../utils/formatCurrency'

const CartContainer = () => {
  const { state, dispatch } = useContext(StateContext)
  const { items } = state.cart
  const hasItems = items.length > 0

  const handleRemoveItem = id => dispatch({
    type: 'removeItemFromCart',
    payload: id
  })

  const subtotalInstallmentsRule = 10

  const totalAmount = hasItems
    ? items.reduce((acc, curr) => acc + curr.price.value, 0)
    : 0

  const totalInstallments = totalAmount / subtotalInstallmentsRule

  const parsedItems = items.map(item => ({
    id: item.id,
    name: item.name,
    images: item.images,
    price: {
      value: formatCurrency(item.price.value),
      installmentValue: formatCurrency(item.price.installmentValue),
      installments: item.price.installments
    }
  }))

  return (
    <Cart
      visible={state.menuIsOpen}
      hasItems={hasItems}
    >
      <CartItems
        items={parsedItems}
        onRemoveItem={handleRemoveItem.bind(this)}
      />
      <CartTotal
        installments={subtotalInstallmentsRule}
        totalAmount={formatCurrency(totalAmount)}
        totalInstallments={formatCurrency(totalInstallments)}
      />
    </Cart>
  )
}

export default CartContainer
