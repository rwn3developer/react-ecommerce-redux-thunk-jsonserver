import axios from "axios";

export const viewUser = () => { 
    return async (dispatch) => {
        try {
          const {data} = await axios.get(`http://localhost:8000/users`);
          dispatch({ type: "VIEWUSER", payload: data });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
}

export const ADD_USER = (record) => {
    return async(dispatch) => {
        try{
            const {data} = await axios.post(`http://localhost:8000/users`,{
                name : record.name,
                email : record.email,
                password : record.password,
            });
            dispatch({type : "ADDUSER",payload : data});
        }catch(error){
            console.error("User not add:", error);
        }
    }
}

export const DELETE_USER = (id) => {
    return async(dispatch) =>{
        try{
            const res = await axios.delete(`http://localhost:8000/users/${id}`);
            if(res.status === 200){
                const {data} = await axios.get(`http://localhost:8000/users`);
                dispatch({type : "DELETEUSER",payload : data});
            }else{
                console.log("record not delete");
                return false;
            }
        }catch(err){
            console.log('User not delete',err);
        }
    }
}

export const EDIT_USER = (id) => {
    return async(dispatch) =>{
        try{
            const {data} = await axios.get(`http://localhost:8000/users/${id}`);
            dispatch({type : "EDITUSER",payload : data});
        }catch(err){
            console.log('Record not fetch',err);
        }
    }
}

export const UPDATE_USER = (record) => {
    return async(dispatch) =>{
        try{
            const edit = await axios.put(`http://localhost:8000/users/${record.editid}`,{
                name : record.name,
                email : record.email,
                password : record.password,
            });
            if(edit.status === 200){
                const {data} = await axios.get(`http://localhost:8000/users`);
                dispatch({type : "UPDATEUSER",payload : data});
            }else{
                console.log('Record not edit');
            }  
        }catch(err){
            console.log('Record not fetch',err);
        }
    }
}

export const USER_MULTIPLE_DELETE = (record) => {
    return async(dispatch) => {
        try{
            for(let i=0;i<record.length;i++){
                let deleteRecord = await axios.delete(`http://localhost:8000/users/${record[i]}`);
            }
            let {data} = await axios.get(`http://localhost:8000/users`);
            if(data){
                dispatch({type : "USERMULTIPLEDELETE",payload : data});
            }else{
                console.log("record not fetch");
                return false;
            }
        }catch(err){
            console.log('Something Wrong',err);
            return false;
        }
    }
}
