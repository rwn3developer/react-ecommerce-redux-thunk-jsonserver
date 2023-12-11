import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContex'
function UserRoute() {
    const navigate = useNavigate();
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      if (auth.user.role === "user") {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.user) authCheck(); else navigate('/');
  }, [auth?.user]);

  return ok ? <Outlet /> : navigate('/');
  

}

export default UserRoute