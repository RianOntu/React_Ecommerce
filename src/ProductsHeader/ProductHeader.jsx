import React, { useContext } from 'react'
import product_page_logo from '../assets/product_page_logo.png'
import sign_up_icon from '../assets/sign_up_icon.png'
import ActiveLink from '../ActiveLink/ActiveLink'
import { AuthenticationContext } from '../ContextAPI/AuthenticationProvider';
import CartContext from '../Cart/CartProvider';
import ProductContext from '../ContextAPI/ProductsContext';


function ProductHeader() {
    const {user}=useContext(AuthenticationContext);
    const {cart}=useContext(CartContext)
    const {products}=useContext(ProductContext)
   
    const totalProduct=cart.map(item=>{
        products.map(product=>item.id==product.id)
    })
    console.log(totalProduct);
    
    return (
        <>

        <div className="flex justify-between items-center sticky top-0 z-100 p-5">
        <img src={product_page_logo} alt="" />
        <div className="flex items-center gap-x-[25px]">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/products">Products</ActiveLink>
        <ActiveLink to="/categories">Categories</ActiveLink>
        <ActiveLink to="/custom">Custom</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        </div>
        
        <div className="flex gap-x-[25px] items-center">
        <ActiveLink to='/cart'>
        <div className="relative">
        <i class="fa-solid fa-cart-shopping text-[30px]" ></i>
        <div className='absolute top-[-10px] text-white bg-[#DD2334] w-[20px] h-[20px] rounded-[50%]'><p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>{totalProduct.length}</p></div>
        </div>
        
        </ActiveLink>
        <img src={user?.photoURL} style={{width:"30px",height:"30px"}} className='rounded-[50%]' alt="" />
        </div>
        
        </div>
        
        
       
        </>
    )
}

export default ProductHeader
