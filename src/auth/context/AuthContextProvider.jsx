

import React, {useReducer} from 'react'
import { AuthContext } from './AuthContext'
import { v4 as uuidv4 } from 'uuid';
import { authReducer } from './authReducer';


export const AuthContextProvider = ({children}) => {

const user = {
    isLogged:false
    }

    const [authState, dispatch] = useReducer(authReducer,user)

    const handleLogin = (formState) => {
        const action = {
            type: "LOGIN",
            payload:{
                id:uuidv4(),
                ...formState
            }
        }
        dispatch(action)
    }
        
    return (
    
        <AuthContext.Provider value={{...authState, authState, handleLogin}}>
            {children}
        </AuthContext.Provider>
        )
}
