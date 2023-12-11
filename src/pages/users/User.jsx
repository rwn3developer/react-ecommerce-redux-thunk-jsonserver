import React, { useEffect, useState } from 'react'
import Header from './Header';
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { viewUser, DELETE_USER, USER_MULTIPLE_DELETE } from '../../redux/action/action';
import Sidebar from './UserSidebar';

const User = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [muldelete, setMulDelete] = useState([]);

    //fetch all user state
    const user = useSelector(state => state.users.allUser);

    //multiple delete

    const handleMultipleCheck = (checked, id) => {
        let all = [...muldelete];
        if (checked) {
            all.push(id);
        } else {
            all = all.filter(val => val != id);
        }
        checked = false;
        setMulDelete(all)
    }

    const handleMultipleDelete = () => {
        if (muldelete.length != 0) {
            dispatch(USER_MULTIPLE_DELETE(muldelete));

        } else {
            alert("Please Minimum one record is selected");
        }
    }

    useEffect(() => {
        dispatch(viewUser());
    }, [])

    return (
        <>
            <Header />

            <div className='container mt-5'>
                <div className='row p-5' style={{ boxShadow: "2px 2px 10px 2px gray" }}>

                    <div className='col-lg-3'>
                        <Sidebar />
                    </div>

                    <div className='col-lg-9'>
                        <div className='row'>
                            <div classname="col-lg-12">
                                <h3 className='text-center'>User List</h3>

                                <div className='row justify-content-end'>
                                    <div className='d flex col-lg-2'>
                                        <NavLink to={`/dashboard/adduser`}>
                                            <button className='btn btn-primary'>Add User</button>
                                        </NavLink>
                                    </div>
                                </div>



                                <table className="table table-hover mt-5">
                                    <thead className='table-info'>
                                        <tr>
                                            <th>
                                                <button onClick={() => handleMultipleDelete()} className='btn btn-danger btn-sm'>Delete</button>
                                            </th>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                        </tr>

                                    </thead>

                                    <tbody>
                                        {
                                            user?.map((val) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <input type='checkbox' onChange={(e) => handleMultipleCheck(e.target.checked, val.id)} />
                                                        </td>
                                                        <td>{val.id}</td>
                                                        <td>{val.name}</td>
                                                        <td>{val.email}</td>
                                                        <td>{val.password}</td>
                                                        <td>
                                                            <button onClick={() => dispatch(DELETE_USER(val.id))} className='btn btn-danger btn-sm'>Delete</button>
                                                            <NavLink to={`/dashboard/edituser/${val.id}`}>
                                                                <button className='ms-3 btn btn-primary btn-sm'>Edit</button>
                                                            </NavLink>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default User