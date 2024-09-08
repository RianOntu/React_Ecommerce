import React, { useContext } from 'react'
import {CartContext} from '../Cart/CartProvider';



const SingleProduct=({product}) =>{
  const {addToCart}=useContext(CartContext);
  
  const price = product.price;
  const percentOff = product.percent_off;
  const discountedPrice = price - (price * (percentOff / 100));
  console.log('price:',price);
  console.log('percentOff ',percentOff );
  console.log('discountedPrice',discountedPrice);
  
 
  
    
    return (
        <>
         <div class="w-60 min bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative h-[600px]">
    
    
      <img  src={product.image} alt="Product" class="h-80 w-72 object-cover padding rounded-[5px]" />
      <div class="px-4 py-3 w-72 lg:pr-[4rem] flex flex-row justify-between items-center flame h-[210px]">
        
       <div>
       <p class="text-md lg:text-sm xl:text-md font-bold text-black truncate block capitalize mt-3">{product.name}</p>
       <div className='flex gap-x-[10px] mt-3'><p><b>${parseFloat(discountedPrice)}</b></p><p className='text-gray-600 line-through'>${parseFloat(price)}</p><b><p className='text-red-800'>{parseFloat(percentOff)} % OFF</p></b></div>
        <p className='text-[#B1B1B1] mt-3 mb-3'>{product.description}</p>
       </div>
     
       
      </div>

    <div className="flex justify-center">
    <a style={{cursor:"pointer"}} onClick={()=>addToCart(product)}  className='bg-[#000000] w-[210px] text-white justify-center w-full py-[5px] px-[10px] flex gap-x-[8px] rounded-[10px] items-center'><i class="fa-solid fa-cart-shopping"></i>Add To Cart</a>
    </div>
   
    
  </div>
        </>
    )
}

export default SingleProduct
