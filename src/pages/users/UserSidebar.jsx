import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        
            <div className="list-group">
                <Link to={`/dashboard`} className="list-group-item list-group-item-action">
                    Dashboard
                </Link>
                <Link to={`/dashboard/user`}  className="list-group-item list-group-item-action">User</Link>
                <Link to={`/cart`}  className="list-group-item list-group-item-action">Cart</Link>
                <Link to={'/profile'} className="list-group-item list-group-item-action">Profile</Link>
                <Link  className="list-group-item list-group-item-action">Logout</Link>
            </div>
       
    )
}

export default Sidebar