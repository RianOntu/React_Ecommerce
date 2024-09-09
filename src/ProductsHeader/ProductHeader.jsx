import React, { useContext, useEffect, useState } from 'react'
import product_page_logo from '../assets/product_page_logo.png'
import ActiveLink from '../ActiveLink/ActiveLink'
import { AuthenticationContext } from '../ContextAPI/AuthenticationProvider';
import {CartContext} from '../Cart/CartProvider';
import {ProductsContext} from '../ContextAPI/ProductProvider';



function ProductHeader() {
    const {user,logOut}=useContext(AuthenticationContext);
    const {cart}=useContext(CartContext)
    const {products}=useContext(ProductsContext)
    const [showDropdown, setShowDropdown] = useState(false);
    const [showHeaderSidebar,setShowHeaderSidebar]=useState(false)
    const [showHeaderSidebarRight,setShowHeaderSidebarRight]=useState(false)
 

    const handleToggleDropdown = () => {
        setShowDropdown(prev => !prev);
      };
      const toggleHeaderMenu=()=>{
          setShowHeaderSidebar(showHeaderSidebar=>!showHeaderSidebar)
      }
      const toggleShowHeaderSidebarRight=()=>{
        setShowHeaderSidebarRight(showHeaderSidebarRight=>!showHeaderSidebarRight)
      }
    
    const handleLogout = () => {
       logOut()
      };
    const totalProduct=cart.map(item=>{
        return products.map(product=>item.id==product.id)
    })
    useEffect(()=>{
      console.log(document.getElementById('rigtSidebar'));//outputs null
      
    },[showDropdown])
    useEffect(() => {
      const handleClickOutside = (event) => {
        const rigtSidebar = document.getElementById('rigtSidebar');
       
        if (rigtSidebar && !rigtSidebar.contains(event.target)) {
          setShowHeaderSidebar(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
    useEffect(()=>{
  
      showHeaderSidebar===true?document.getElementById('rigtSidebar').style.transform = "translateX(208px)":document.getElementById('rigtSidebar').style.transform = "translateX(0px)"
    },[showHeaderSidebar])
      

    
    return (
        <>

        <div className="flex justify-between items-center sticky top-0 z-100 p-5">
        <img src={product_page_logo} alt="" />
        <div className="hidden lg:flex items-center gap-x-[25px]">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/products">Products</ActiveLink>
        <ActiveLink to="/categories">Categories</ActiveLink>
        <ActiveLink to="/custom">Custom</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        </div>
       
        {
          
           
           <div className={`${showHeaderSidebar ? 'flex flex-col rightSideBarMobile bg-white z-1111111111111111 items-center gap-x-[25px]':"hidden"}`}>
           
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/products">Products</ActiveLink>
          <ActiveLink to="/categories">Categories</ActiveLink>
          <ActiveLink to="/custom">Custom</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
          </div>
          
        }
        
        
        <div className="flex gap-x-[25px] items-center">
        <ActiveLink to='/cart'>
        <div className="relative">
        <i class="fa-solid fa-cart-shopping text-[30px]"  ></i>
        <div className='absolute top-[-10px] text-white bg-[#DD2334] w-[20px] h-[20px] rounded-[50%]'><p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>{totalProduct.length}</p></div>
        </div>
        
        </ActiveLink>
        <div className="relative inline-block">
      <img 
        src={user?.photoURL} 
        style={{ width: "30px", height: "30px" }} 
        className='rounded-full' 
        alt="User Avatar" 
        onClick={handleToggleDropdown}
      />
      {showDropdown && (
        <div id="rigtSidebar" className="absolute rigtSidebar mt-2 w-32 z-111111111 bg-white border border-gray-300 rounded-md shadow-lg">
          <button 
            onClick={handleLogout} 
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
    {
showHeaderSidebarRight?<h1 onClick={toggleShowHeaderSidebarRight} style={{cursor:"pointer"}}>X</h1>:<i class="fas fa-bars block sm:hidden md:block lg:hidden" onClick={toggleHeaderMenu} id="rigtSidebar"></i>
    }
    
        </div>
        
        </div>
        
        
       
        </>
    )
}

export default ProductHeader
