
import { useForm } from "../hooks/useForm"






export const FormLogin = () => {

    const {user, password,formState, handleChange, handleSubmit} = useForm()


    
    // const {user, password} = formState
    return (
        <>
            <form action="submit" onSubmit={(e) => handleSubmit(e)} className="form">
                <input 
                    type="text"
                    className="input"
                    placeholder="User"
                    value={user}
                    name="user"
                    onChange={handleChange}
                />
                
                <input 
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    name="password"
                    autoComplete="on"
                    onChange={handleChange}
                />

                <button 
                className="btn"
                type="submit">
                    Submit
                </button>
            </form>
        </>
)
}
