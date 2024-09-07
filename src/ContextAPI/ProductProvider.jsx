import React, {  useEffect, useState } from 'react'
import ProductsContext from './ProductsContext'


function ProductProvider({children}) {

    const [products,setProducts]=useState([])
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
  
    useEffect(() => {
      fetch('http://localhost:3000/chairs')
        .then(response =>response.json())
        .then(data=>setProducts(data));
    }, []);
  
    // Calculate the products to display based on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


    return (
        <>
        <ProductsContext.Provider value={{ products: currentProducts, handlePageChange, currentPage, totalProducts: products.length }}>
          {children}
        </ProductsContext.Provider>
       
        </>
    )
}

export default ProductProvider
