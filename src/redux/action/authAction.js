import axios from "axios";

export const UserRegister = (record) => {
    return async(dispatch) => {
        try{
            let {data} = await axios.post(`http://localhost:8000/users`,{
                name : record.name,
                email : record.email,
                password : record.password,
                city : record.city,
                phone : record.phone,
                role : "user"
            });
            if(data){
                dispatch({type : "USERREGISTER",payload : data})
            }else{
                console.log("user not register");
                return false;
            }
        }catch(err){
            console.log(err);
            return false;
        }
    }
}




