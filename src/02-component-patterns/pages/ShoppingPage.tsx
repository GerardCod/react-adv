import React from 'react'
import { ProductCard } from '../components/index'
import { Product } from '../interfaces/product-interfaces'

const product: Product = {
  id: '123456',
  title: 'Coffee mug'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
