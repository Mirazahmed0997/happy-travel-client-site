import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navbar = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/booking'>Make_Destination</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/dashboard/mycart'>Dashboard</Link></li>
        {
            user ? <>
                <li><span>{user?.displayName}</span></li>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <li><button onClick={handleLogout} className=''>Logout</button></li>
            </> :
                <>
                <li><Link to='/login'>Login</Link></li></>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100 fixed z-10 bg-opacity-60">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Happy Travel</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {<ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>}
                </div>
                
            </div>
        </>
    );
};

export default Navbar;