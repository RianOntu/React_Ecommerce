import React, { useContext } from 'react'
import product_page_logo from '../assets/product_page_logo.png'
import sign_up_icon from '../assets/sign_up_icon.png'
import ActiveLink from '../ActiveLink/ActiveLink'
import { AuthenticationContext } from '../ContextAPI/AuthenticationProvider';


function ProductHeader() {
    const {user}=useContext(AuthenticationContext);
    console.log(user);
    
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
        <i class="fa-solid fa-cart-shopping"></i>
        </ActiveLink>
        <img src={user.photoURL} style={{width:"30px",height:"30px"}} className='rounded-[50%]' alt="" />
        </div>
        
        </div>
        
        
       
        </>
    )
}

export default ProductHeader
