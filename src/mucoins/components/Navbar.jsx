import { useContext } from 'react';
import { Link, NavLink,} from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    
    const {authState} = useContext(AuthContext)
    
    return (
        <nav className="navbar">
            <div className="nav-items-container">
                <NavLink 
                    
                    className={({isActive}) => `nav-item ${isActive && "active"}`} 
                    
                    to="/home"
                >
                    Home
                </NavLink>
                

                <NavLink 
                    className={({isActive}) => `nav-item ${isActive && "active"}`} 
                    to="/offers"
                >
                    Offers                    
                </NavLink>

            </div>
            <div className="nav-login-container">
                <NavLink 
                className={({isActive}) => `nav-item ${isActive && "active"}`}
                to="/user"
                >
                    {authState?.user}
                </NavLink>
                
                
                <Link to="/login">
                    {authState.isLogged ? <button className="login-btn">Logout</button> :
                    <button className="login-btn">Login</button>}
                </Link>                   
            </div>

        </nav>
    )
}