import React, { useContext } from 'react'

import { StateContext } from '../state'

import Header from '../components/Header/Header'
import MenuButton from '../components/MenuButton/MenuButton'

import logoSrc from '../assets/images/logo-buscape.png'

const HeaderContainer = () => {
  const { state, dispatch } = useContext(StateContext)
  
  const toogleMenuIsOpen = () => dispatch({
    type: 'toogleMenu',
    payload: !state.menuIsOpen
  })

  const cartTotalItems = state.cart.items.length

  return (
    <Header logoSrc={logoSrc} altText="Buscapé">
      <MenuButton
        badgeValue={cartTotalItems}
        onClick={toogleMenuIsOpen.bind(this)}
      />
    </Header>
  )
}

export default HeaderContainer
