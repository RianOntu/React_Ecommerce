import React, { createContext, useEffect, useState } from 'react'
import ProductsContext from './ProductsContext'

function ProductProvider({children}) {

    const [products,setProducts]=useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/chairs')
      .then(res=>res.json())
      .then(data=>setProducts(data)
      )
    },[])


    return (
        <>
        <ProductsContext.Provider value={products}>
          {children}
        </ProductsContext.Provider>
        
        </>
    )
}

export default ProductProvider
