const { useEffect, useContext } = require("react");
const { useState } = require("react");
const { createContext } = require("react");

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({
        user : null
    })

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('checkUser'));
        if(data){
            setAuth({
                ...auth,
                user : data
            })
        }
    },[])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
                {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => useContext(AuthContext);
export {useAuth,AuthProvider};