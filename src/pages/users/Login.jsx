import React, { useState } from 'react'
import Header from './Header'

import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContex';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useAuth();

    const handleSubmit = async() => {
       
        try{
            let {data} = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);
            if(data.length!=0){
                localStorage.setItem('checkUser',JSON.stringify(data[0]));
                setAuth({
                    ...auth,
                    user : data[0]
                })
                toast.success("Login Successfully");
            }else{
                toast.error("Username And Password not valid");
            }
            setEmail("");
            setPassword("");
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className='row p-5' style={{ boxShadow: "2px 2px 10px 2px gray" }}>

                    <div className='col-lg-9'>
                        <div className='row'>
                            <div classname="col-lg-12">
                                <h3 className='text-center'>Login</h3>

                               
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
            <ToastContainer />
        </>
    )
}

export default Login