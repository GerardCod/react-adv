import { useState } from "react"
import { onChangeArgs, ProductCart, ProductInCart } from "../interfaces/product-interfaces"

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ProductCart>({})

    const onProductCountChange = ({ product, count }: onChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };
        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
