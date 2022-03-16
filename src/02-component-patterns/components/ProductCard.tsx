import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/product-interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${ className }`}>
                {children}
            </div>
        </Provider>
    )
}
