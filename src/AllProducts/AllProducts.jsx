import React, { useContext, useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductHome from '../ProductHome/ProductHome';
import Sidebar from '../SideBar/SideBar';
import Pagination from 'react-js-pagination';
import { ProductsContext } from '../ContextAPI/ProductProvider';
import './Pagination.css';

function AllProducts() {
  const { products, chairType, type, filteredProducts, setFilteredProducts } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 products per page

  // Initialize filtered products to show all products when the component loads
  useEffect(() => {
    if (type === 'all_chair' || !type) {
      setFilteredProducts(products); // Show all products initially
    } else {
      const filtered = products.filter(product => product.type === type);
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to first page when filters change
  }, [type, products, setFilteredProducts]); // Correct dependencies for filtering

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Debugging logs
  console.log("Current Page:", currentPage);
  console.log("Filtered Products Length:", filteredProducts.length);
  console.log("Final Products on Current Page:", currentProducts);

  return (
    <>
      <ProductHome />

      <div className="flex">
        <div className="">
          <Sidebar chairType={chairType} />
        </div>
        <div className="mid-width lg:ml-[13rem]">
          <div className="grid all_products mx-auto gap-x-[15px] gap-y-[20px] container z-10">
            {currentProducts.map((product) => (
              <SingleProduct key={product.id} product={product} />
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
