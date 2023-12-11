import React, { useState } from 'react'
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADD_USER } from '../../redux/action/action';
import Sidebar from './UserSidebar';


const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        let data = { name, email, password };
        dispatch(ADD_USER(data));
        navigate('/user');
    }


    return (
        <>
            <Header />



            <div className='container mt-5'>
                <div className='row p-5' style={{ boxShadow: "2px 2px 10px 2px gray" }}>
                    <div className='col-lg-3'>
                        <Sidebar/>
                    </div>
                    <div className='col-lg-9'>
                        <div className="row">
                            <div className="col-lg-12">
                                <div classname="col-lg-9">
                                    <h3 className='text-center'>Add User</h3>
                                    <div className='row justify-content-end'>
                                        <div className='d flex col-lg-2'>
                                            <NavLink to={`/dashboard/user`}>
                                                <button className='btn btn-primary'>View User</button>
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Name:</label>
                                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter email" name="name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Password:</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password" name="password" />
                                    </div>

                                    <button type="button" onClick={() => handleSubmit()} className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser