import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticationContext } from './ContextAPI/AuthenticationProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthenticationContext);
    const location = useLocation();
   
    if(loading){
        return (
            <div class="spinner-border m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        )
    }

    if(user){
        return children;
    }
  
        return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
    
};


export default PrivateRoute;