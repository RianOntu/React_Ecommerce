import React, { useEffect, useState } from 'react'
import ProductHeader from '../ProductsHeader/ProductHeader'


function ProductHome() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
       
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

       
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
         
        {   
           isLoading?(<h1 className='center-container'>
            Loading...
           </h1>

           ):<div>
             <ProductHeader/> 
             <hr />
           </div>
            
           
    
        }
        
           
     
     
        </div>
    )
}

export default ProductHome
