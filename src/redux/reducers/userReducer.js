const initialState = {
    allUser : [],
    single : {}
}

const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case "VIEWUSER":
            return {
                ...state,
                allUser : action.payload
            }
        case "ADDUSER":
            return {
                ...state,
                allUser : [...state.allUser,action.payload]
            }
        case "DELETEUSER":
            return {
                ...state,
                allUser : action.payload
            }
        case "EDITUSER":
            return {
                ...state,
                single : action.payload
            }
        case "UPDATEUSER":
            return {
                ...state,
                allUser : action.payload
            }
        case "USERMULTIPLEDELETE":
            return {
                ...state,
                allUser : action.payload
            }
        default :
            return state;
    }
}

export default UserReducer;