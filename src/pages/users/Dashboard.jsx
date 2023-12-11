import { useEffect } from 'react';
import Header from './Header';
import Sidebar from './UserSidebar';

const Dashboard = () => {

    useEffect(()=>{
        console.log("done");
    },[])
    
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
                                <h3 className='text-center'>Dashboard</h3>

                                {/* <div className='row justify-content-end'>
                                    <div className='d flex col-lg-2'>
                                        <NavLink to={`/adduser`}>
                                            <button className='btn btn-primary'>Add User</button>
                                        </NavLink>
                                    </div>
                                </div> */}



                              


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;