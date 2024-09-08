import React, {  useState, useEffect, createContext } from 'react';



export const ProductsContext=createContext(null)

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [productsPerPage] = useState(6); 
  const [totalProducts, setTotalProducts] = useState(0); 
  const [type,setType]=useState('all_chair')
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const response = await fetch('http://localhost:3000/chairs'); 
        const data = await response.json();
        setProducts(data);
        console.log(data);
        
        setTotalProducts(data.length);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const chairType = (type) => {
    console.log('Filtering by type:', type);


    if (type === 'all_chair') {
      setFilteredProducts(products);
      return; 
    }

    const chairs = products.filter((product) => product.type.trim().toLowerCase() === type.trim().toLowerCase());
console.log(chairs);

    if (chairs.length === 0) {
      console.warn(`No products found for type: ${type}`);
    }

    setFilteredProducts(chairs);
  };


  return (
    <ProductsContext.Provider value={{ products, currentPage, productsPerPage, totalProducts, handlePageChange,chairType,filteredProducts,setFilteredProducts,type,setType }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
