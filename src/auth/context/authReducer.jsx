



export const authReducer = ({initialState}, action) => {

    switch (action.type) {
        case "LOGIN":
            return {
                ...initialState,
                isLogged:true,
                id:action.payload.id,
                ...action.payload
            }

        case "LOGOUT":
            return {
                ...initialState,
            }
            
    
        default:
            return{
                initialState
            }
    }
}
