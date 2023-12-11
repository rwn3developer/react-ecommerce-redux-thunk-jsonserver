import React, { useState } from 'react'
import Header from './Header'
import { UserRegister } from '../../redux/action/authAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city,setCity] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = () => {
        let obj = {name,email,password,city,phone};
        dispatch(UserRegister(obj));
        toast.success("User successfully register");
        setName("");
        setEmail("");
        setPassword("");
        setCity("");
        setPhone("");    
    }

    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className='row p-5' style={{ boxShadow: "2px 2px 10px 2px gray" }}>

                    <div className='col-lg-9'>
                        <div className='row'>
                            <div classname="col-lg-12">
                                <h3 className='text-center'>Register</h3>

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

                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">City:</label>
                                    <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)} value={city} placeholder="Enter City" name="city" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Phone:</label>
                                    <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Enter Phone" name="phone" />
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

export default Register