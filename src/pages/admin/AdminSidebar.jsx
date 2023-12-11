import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        
            <div className="list-group">
                <Link to={`/dashboard`} className="list-group-item list-group-item-action">
                    Dashboard
                </Link>
                <Link to={`/category`}  className="list-group-item list-group-item-action">Category</Link>
                <Link to={`/product`}  className="list-group-item list-group-item-action">Product</Link>
                <Link to={`/user`}  className="list-group-item list-group-item-action">User</Link>
                <Link to={`/cart`}  className="list-group-item list-group-item-action">Cart</Link>
                <Link to={'/profile'} className="list-group-item list-group-item-action">Profile</Link>
                <Link  className="list-group-item list-group-item-action">Logout</Link>
            </div>
       
    )
}

export default AdminSidebar