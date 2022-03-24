import { ProductCard } from '../components/index'
import { products } from '../data/data';

import '../styles/custom-styles.css';

const product = products[0];

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

        <ProductCard
          key={`product: ${product.id}`}
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
          }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

      </div>

    </div>
  )
}
