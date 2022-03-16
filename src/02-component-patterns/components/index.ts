import { ProductCardHOCProps } from "../interfaces/product-interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard"; 
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;
