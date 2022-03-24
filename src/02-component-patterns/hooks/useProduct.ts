import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/product-interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || value);

    const isMounted = useRef<boolean>(false);

    const increaseBy = (value: number) => {

        const newValue = initialValues?.maxCount ? Math.min(Math.max(counter + value, 0), initialValues.maxCount) : Math.max(counter + value, 0); 

        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    
    useEffect(() => {
        if (!isMounted.current) return;
        
        setCounter(value);
    }, [value])
    
    useEffect(() => {
        isMounted.current = true;
    
    }, [])
    

    return {
        counter,
        increaseBy
    }
}