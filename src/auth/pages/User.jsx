


import  { useContext } from 'react'
import { AuthContext } from '../context'
import { Navigate, useNavigate } from 'react-router-dom'

export const User = () => {

    const {user,id,password} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/home",{
        replace:true
        })
    }
    
    return (
        <div className="container">

            <h3>Informacion de Usuario</h3>
            <hr />

            <div className="info-user">
            <h1>Nombre de Usuario : {user}</h1>
            <h2>Número de id: {id}</h2>
            <h3>Contraseña: {password}</h3>
            </div>

            <button 
            onClick={handleClick}
            className='btn'>
                Home
            </button>
        </div>
    )
}
