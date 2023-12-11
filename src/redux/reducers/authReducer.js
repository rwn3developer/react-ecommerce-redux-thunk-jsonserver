let initialState = {
    userRegister : [],
    checkUser : JSON.parse(localStorage.getItem('chekUser')) ? JSON.parse(localStorage.getItem('chekUser')) : null
}

const authReducer = (state = initialState,action) => {  
    switch(action.type){
        case "USERREGISTER" :
            return {
                ...state,
                userRegister : action.payload 
            }
        default:
            return state;
    }
}

export default authReducer;