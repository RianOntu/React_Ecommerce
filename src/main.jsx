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
import AuthenticationProvider from './ContextAPI/AuthenticationProvider.jsx';
import { CartProvider } from './Cart/CartProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<PrivateRoute><ProductHome/></PrivateRoute>,
   
  },
  {
    path:'/products',
    element:<PrivateRoute><Products/></PrivateRoute>,
    
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
    element:<PrivateRoute><Cart/></PrivateRoute>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationProvider>
    <CartProvider>
    <ProductProvider>
 
      
    <RouterProvider router={router} />
    
    
    </ProductProvider>
    </CartProvider>
    
    </AuthenticationProvider>
  </StrictMode>
)
