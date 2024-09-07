import React, {  useEffect, useState } from 'react'
import ProductsContext from './ProductsContext'
import axios from 'axios'
import Pagination from "react-js-pagination";

function ProductProvider({children}) {

    const [products,setProducts]=useState([])
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
  
    useEffect(() => {
      axios.get('http://localhost:3000/chairs')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
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
