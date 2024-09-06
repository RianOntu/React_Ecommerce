import React from 'react'
import ProductHeader from './ProductsHeader/ProductHeader'
import Sidebar from './SideBar/SideBar'

function Products() {
    
    return (
        <>
        
        <div className="container mx-auto">
            
        <ProductHeader/>
        </div>
        <hr />
        <Sidebar/>
        </>
    )
}

export default Products
