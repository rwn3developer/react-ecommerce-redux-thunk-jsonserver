import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { EDIT_USER , UPDATE_USER } from '../../redux/action/action';


const EditUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const single = useSelector(state => state.users.single);
    const [editid,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = () =>{
        let data = {name,email,password,editid};
        dispatch(UPDATE_USER(data));
        navigate('/user');
    }

    useEffect(()=>{
        dispatch(EDIT_USER(id)) 
    },[])

    useEffect(()=>{
        if(single){
            setId(single.id)
            setName(single.name)
            setEmail(single.email)
            setPassword(single.password)
        }
    },[single])


    return (
        <>
             <Header/>

             

            <div className='container mt-5'>
                <div className='row p-5' style={{ boxShadow: "2px 2px 10px 2px gray" }}>
                    <div classname="col-lg-9">
                    <h3 className='text-center'>Edit User</h3>
                    <div className='row justify-content-end'>
                            <div className='d flex col-lg-2'>
                                <NavLink to={`/dashboard/user`}>
                                    <button className='btn btn-primary'>View User</button>
                                </NavLink>
                            </div>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text" className="form-control" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Enter email" name="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" onChange={ (e) => setEmail(e.target.value) } value={email}  placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } value={password} placeholder="Enter password" name="password" />
                        </div>
                        
                        <button type="button" onClick={ () => handleSubmit() } className="btn btn-primary">Submit</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditUser