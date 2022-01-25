import { useState, useEffect } from "react"
import { ItemList } from './ItemList'

import mockedProducts from '..//mock/products.json'
import { resolvePath } from "react-router"

async function getProducts() {
    const productsPromise =new Promise ((reseolve)  => {
        setTimeout(() => {
            resolve (mockedProducts)
        },2000)
    })
    const products = await productsPromise

    return products
}

export function ItemListContainer () {
    const [ products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then ((products) => {
            setProducts(products)
        })
    }, [])

    return <ItemList products = {products} />
}