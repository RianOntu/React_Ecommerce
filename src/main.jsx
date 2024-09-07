import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Overall.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import Products from './Products.jsx';
import ProductProvider from './ContextAPI/ProductProvider.jsx';
import ProductHome from './ProductHome/ProductHome.jsx';
import Cart from './Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProductHome/>,
   
  },
  {
    path:'/products',
    element:<Products/>,
    
  },
  {
    path:'/login',
    element:<SignInForm/>
  },
  {
    path:'/register',
    element:<SignUpForm/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <RouterProvider router={router} />
    </ProductProvider>
    
  </StrictMode>
)
