import React, { useState } from 'react'
import { ProductCard } from '../components/index'
import { products } from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map(product => (
            <ProductCard
              onChange={onProductCountChange}
              key={`product: ${product.id}`}
              product={product}
              className="bg-dark"
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        }

      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, item]) => (
            <ProductCard
              key={`shoppingCartItem: ${key}`}
              product={item}
              className="bg-dark"
              style={{
                width: '100px'
              }}
              value={item.count}
              onChange={onProductCountChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
