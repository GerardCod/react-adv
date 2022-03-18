import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/product-interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct({product, onChange, value});

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${ className }`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
