import type { ReactNode } from "react"


interface Product  {
    title: string,
    price: number,
    children?: ReactNode
}

const CardProduct  = ({title, price, children} : Product) => {
    return (
        <>
        
        <h1>{title}</h1>
        <h2>{price}</h2>
        {children}
        </>
    )
}

export {CardProduct}