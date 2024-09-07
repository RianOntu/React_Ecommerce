import React from 'react'
import ProductHeader from '../ProductsHeader/ProductHeader'

function Cart() {
    return (
        <>
        <ProductHeader/>
        <hr />
        <div className="container">
            <div className="overview">
            <h2 className='text-black-900 p-6 text-[28px]'><b>An overview of your order</b></h2>

            </div>
            <div className="order_details">
                
            </div>
        </div>
        </>
    )
}

export default Cart
