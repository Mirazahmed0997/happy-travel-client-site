import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading)
    {
        return <progress className="progress w-56"></progress>
    }

    if(user)
    {
        return children;
    }
    Swal.fire({
        title: 'Login First',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
    return <Navigate to='/login'state={{from:location}}replace></Navigate>
};

export default PrivateRoutes;