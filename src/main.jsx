import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Overall.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import MainContainer from './MainContainer.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainContainer/>,
    children:[
      {
        path:'/login',
        element:<SignInForm/>
      },
      {
        path:'/register',
        element:<SignUpForm/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
