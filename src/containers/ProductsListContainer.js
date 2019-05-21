import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'

import { StateContext } from '../state'

import Product from '../components/Product/Product'
import ThumbsList from '../components/Product/ThumbsList'
import ImageView from '../components/Product/ImageView'
import Details from '../components/Product/Details'

import formatCurrency from '../utils/formatCurrency'

import { container } from './ProductsListContainer.module.scss'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 5000,
  draggable: false,
  hideProgressBar: true,
  pauseOnHover: false,
})

const ProductsListContainer = () => {
  const [visibleItem, setVisibleItem] = useState(0)
  const { state, dispatch } = useContext(StateContext)
  const { products } = state

  const handleAddToCart = item => {
    const itemExists = state.cart.items.find(i => i.id === item.id)
    if (itemExists) return

    toast('Produto adicionado ao carrinho :)')

    dispatch({
      type: 'addItemToCart',
      payload: item
    })
  }

  const handleThumbClick = clickedItemIndex => setVisibleItem(clickedItemIndex)

  return (
    <div className={container}>
      {
        products.items.map(item => {
          const {
            id,
            images,
            name,
            price,
          } = item.product

          const {
            installmentValue,
            installments,
            value,
          } = price

          return (
            <Product id={id} key={name}>
              <ThumbsList
                activeItem={visibleItem}
                images={images}
                alt={name}
                onClickItem={handleThumbClick.bind(this)}
              />
              <ImageView
                src={images[visibleItem]}
                alt={name}
              />              
              <Details
                name={name}
                installments={installments}
                installmentValue={formatCurrency(installmentValue)}
                value={formatCurrency(value)}
                onClickAddToCart={handleAddToCart.bind(this, item.product)}
              />
            </Product>
          )
        })
      }
    </div>
  )
}

export default React.memo(ProductsListContainer)
