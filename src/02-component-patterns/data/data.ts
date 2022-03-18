import { Product } from "../interfaces/product-interfaces"

const product: Product = {
    id: '123456',
    title: 'Coffee mug',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Coffee Mug Meme',
    img: './coffee-mug2.png'
}

export const products: Product[] = [product, product2];
