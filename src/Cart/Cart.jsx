import React, { useContext, useState } from 'react'
import ProductHeader from '../ProductsHeader/ProductHeader'
import {CartContext} from './CartProvider'

import { AuthenticationContext } from '../ContextAPI/AuthenticationProvider';
import {ProductsContext} from '../ContextAPI/ProductProvider';
import Footer from '../Footer';

function Cart() {
    const [subTotal,setSubTotal]=useState(0)
    const {cart, removeFromCart, updateQuantity,increaseQuantity,dereaseQuantity}=useContext(CartContext);
   
    const {products}=useContext(ProductsContext)
    const {user}=useContext(AuthenticationContext);
    const totalProduct=cart.map(item=>{
        products.map(product=>item.id==product.id)
    })
    const subtotalArr=cart.map(item=>item.quantity*item.price)
    
    let total=subtotalArr.reduce((acc,sum)=>sum+acc,0)
    console.log(total);
    
    
    
    return (
        <>
        <ProductHeader/>
        <hr />
        <div className="container1 flex flex-col md:flex-row  gap-x-[40px]">
            <div className="overview w-[100%] md:w-[70%] mx-auto">
            <h2 className='text-black-900 p-6 text-[28px]'><b>An overview of your order</b></h2>
            
            {   
                
                cart.map(item=>(
                    <>
<div className='flex bg-[#FAFAFA] p-3 justify-between '>
           
           
               
               <div className="flex ">
  
               <div className="flex gap-x-[15px] items-center">
               <div className='flex border-2 border-[#F0F0F0] p-3 w-[71px]'><button onClick={()=>dereaseQuantity(item.id)}>-</button><p className='ml-2 mr-2'>{parseInt(item.quantity)}</p><button onClick={()=>increaseQuantity(item.id)}>+</button></div>
               <h3><b>{item.name}</b></h3>
               </div>
 </div>
 <div className="flex flex-col justify-between">
     <a style={{cursor:"pointer"}} onClick={()=>removeFromCart(item.id)}>X</a>
     <b><p>${item.price}</p></b>

 </div>
               
              
             
       
       
  
</div>
<hr className='mb-3 mt-3' />
</>
                ))
            }
            
            </div>
         
                <div className="order_details w-[100%] md:w-[30%] mx-auto mt-[89px] ">
                <div className="order_summery bg-[#FAFAFA] p-4">
                    <div className="flex justify-between"><b>Subtotal</b><b>${total}</b></div>
                    <div className="flex justify-between"><b>Shipping</b><b>$10</b></div>
                    <div className="flex justify-between"><b>Estimated Tax</b><b>$20</b></div>
                    <hr className='mt-2 mb-2' />
                    <div className="flex justify-between"><h3><b>Total</b></h3><h3><b>${total+10+20}</b></h3></div>

                </div>
            </div>
           
          
        </div>
        <Footer/>
        </>
    )
   
}


export default Cart
