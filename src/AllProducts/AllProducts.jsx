import React, { useContext, useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductHome from '../ProductHome/ProductHome';
import Sidebar from '../SideBar/SideBar';
import Pagination from 'react-js-pagination';
import { ProductsContext } from '../ContextAPI/ProductProvider';
import './Pagination.css';

function AllProducts() {
  const { products, chairType, filteredProducts, setFilteredProducts } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 products per page
  console.log("filtered products:",filteredProducts);

  useEffect(()=>{
    setFilteredProducts(products)
  },[chairType])
  console.log(filteredProducts);
  
  // Filter products whenever chairType changes or on initial load
  useEffect(() => {
    if (chairType) {
      const filtered = products.filter(product => product.type === chairType);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  // Calculate the products to display on the current page
  console.log('products:',products);
 
  
  useEffect(() => {
    // Recalculate products when currentPage or filteredProducts changes
    
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    setFilteredProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [products]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 
  // Debugging logs
  console.log("Current Page:", currentPage);
  console.log("Filtered Products Length:", filteredProducts.length);
  console.log("Final Products:", filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));

  return (
    <>
      <ProductHome />

      <div className="flex">
        <div className="">
          <Sidebar chairType={chairType} />
        </div>
        <div className="mid-width lg:ml-[13rem]">
          <div className="grid mx-auto lg:mt-4 md:mx-auto lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-x-[15px] gap-y-[20px] container z-10">
            {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
              <SingleProduct key={product.id} product={product} products={products} />
            ))}
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={filteredProducts.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="pagination-item"
          linkClass="pagination-link"
          activeClass="active"
          disabledClass="disabled"
        />
      </div>
    </>
  );
}

export default AllProducts;
