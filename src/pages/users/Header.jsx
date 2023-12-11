import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContex'


const Header = () => {


    const [auth, setAuth] = useAuth();
    
    const logout = () => {
        setAuth({
            ...auth,
            user : null
        })

        localStorage.removeItem('checkUser');  
    }





    return (
        <div className='containerfluid bg-info'>

            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <div className="navbar-brand">
                        <h4>General</h4>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                            {
                                !auth?.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to={`/`} className="nav-link active" aria-current="page">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={`/register`} className="nav-link active" aria-current="page">Register</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle btn btn-primary btn-sm text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth.user.name}
                                            </NavLink>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li>
                                                    <NavLink to={`/dashboard/${
                                                        auth.user.role === "admin" ? "admin" : "user"
                                                    }`}>
                                                        <button className='dropdown-item btn btn-secondary'>Dashboard</button>
                                                    </NavLink>
                                                    <NavLink>
                                                        <button onClick={ () => logout() } className='dropdown-item btn btn-secondary'>Logout</button>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            }














                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">Product</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>



            {/* <div className='container'>
                <div className='row p-1'>
                    <div className='col-lg-12 p-2'> */}
            {/* <h4 className='text-center'>User Management System</h4> */}


            {/* </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header