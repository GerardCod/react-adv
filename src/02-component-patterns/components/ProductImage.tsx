import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img = '', className }: Props) => {
    const { product } = useContext(ProductContext)

    let imgToShow: string = img ? img : product.img ? product.img : noImage

    return <img src={imgToShow} alt='product_image' className={`${styles.productImg} ${className}`} />
}