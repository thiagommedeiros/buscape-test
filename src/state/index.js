import React, { createContext, useReducer} from 'react'
import { merge, mergeDeepWith, concat } from 'ramda'
import products from '../resources/products'

const StateContext = createContext()

const initialState = {
  menuIsOpen: false,
  products,
  cart: {
    items: [],
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addItemToCart':
      return mergeDeepWith(concat, state, {
        cart: {
          items: [action.payload]
        }
      })

    case 'removeItemFromCart':
      const items = state.cart.items.filter(item => item.id !== action.payload)
      return  merge(state, {
        cart: {
          items
        }
      })

    case 'toogleMenu':
      return merge(state, {
        menuIsOpen: action.payload
      })
      
    default:
      return state;
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

const StateConsumer = StateContext.Consumer

export {
  StateContext,
  StateProvider,
  StateConsumer,
}