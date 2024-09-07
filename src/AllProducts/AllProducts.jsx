import React, { useContext } from 'react'
import ProductsContext from '../ContextAPI/ProductsContext'
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductHome from '../ProductHome/ProductHome';
import Sidebar from '../SideBar/SideBar';


function AllProducts() {
    const products=useContext(ProductsContext);
    console.log('all products rendering...');
    
    
    
    return (
        <>
        <ProductHome/>
        
        <div className="flex">
<div className="">
    <Sidebar></Sidebar>
</div>
<div className="mid-width lg:ml-[13rem] ">
<div className='grid mx-auto lg:mt-4 md:mx-auto lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-x-[15px] gap-y-[20px] container z-10'>
           { products.map(product=>(
                
                <SingleProduct key={product.id} product={product}/>
                
                
            ))}
            </div>
</div>
</div>
        
       
        
        </>
    )
}

export default AllProducts
