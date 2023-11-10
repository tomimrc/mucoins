import { useContext, useState } from "react";
import { AuthContext } from "../context";



export const useForm = (initialForm = {user:"",password:""}) => {
    
    const {handleLogin} = useContext(AuthContext)
    const [formState, setFormState] = useState(initialForm);
            
        const handleChange = ({target}) => {
                const {name, value} = target
                setFormState({...formState, [name]: value})
        }

        // const handleReset = (e) => {
        //     e.preventDefault()
        //     setFormState(initialForm)
            
        // }

        const handleSubmit = (e) => {
            e.preventDefault()
            handleLogin(formState)
        }

        return{
            ...formState,
            formState,
            handleChange,
            handleSubmit
        }
}