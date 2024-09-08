import React, { useContext, useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductHome from '../ProductHome/ProductHome';
import Sidebar from '../SideBar/SideBar';
import Pagination from 'react-js-pagination';
// import './Pagination.css';
import {ProductsContext} from '../ContextAPI/ProductProvider';

function AllProducts() {
 
  const { products, handlePageChange, currentPage, totalProducts,chairType,filteredProducts,setFilteredProducts } = useContext(ProductsContext);
  
  
  

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);


  return (
    <>
      <ProductHome />

      <div className="flex">
        <div className="">
          <Sidebar chairType={chairType}></Sidebar>
        </div>
        <div className="mid-width lg:ml-[13rem]">
          <div className="grid mx-auto lg:mt-4 md:mx-auto lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-x-[15px] gap-y-[20px] container z-10">
            {filteredProducts.map((product) => (
              <SingleProduct key={product.id} product={product} products={products} />
            ))}
          </div>
        </div>
      </div>
      {/* <Pagination
        activePage={currentPage}
        itemsCountPerPage={6}
        totalItemsCount={totalProducts}
        pageRangeDisplayed={2}
        onChange={handlePageChange}
        itemClass="pagination-item"
        linkClass="pagination-link"
        activeClass="active"
        disabledClass="disabled"
      /> */}
    </>
  );
}

export default AllProducts;
