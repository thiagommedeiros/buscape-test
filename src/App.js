import React, { lazy, Suspense } from 'react'
import { StateProvider } from './state'
import './assets/css/index.scss'

const HeaderContainer = lazy(() => import('./containers/HeaderContainer'))
const ProductsListContainer = lazy(() => import('./containers/ProductsListContainer'))
const CartContainer = lazy(() => import('./containers/CartContainer'))

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <StateProvider>
      <HeaderContainer />
      <CartContainer />
      <ProductsListContainer />
    </StateProvider>
  </Suspense>
)

export default App
