import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContex'
function AdminRoute() {
    const navigate = useNavigate();
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      if (auth.user.role === "admin") {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.user) authCheck(); else navigate('/');
  }, [auth?.user]);

  return ok ? <Outlet /> : navigate('/');
  

}

export default AdminRoute