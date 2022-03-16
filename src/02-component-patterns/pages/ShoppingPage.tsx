import React from 'react'
import { ProductCard } from '../components/index'
import { ProductButtons } from '../components/ProductButtons'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { Product } from '../interfaces/product-interfaces'

import '../styles/custom-styles.css';

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

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

      </div>
    </div>
  )
}
