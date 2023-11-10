import { useNavigate } from "react-router-dom"
import { FormLogin } from "../components/FormLogin";


    

export const Login = () => {
  
  const navigate = useNavigate()


  const onLogin = () => {
    navigate("/home",{
      replace:true
    })
  }
  return (
    <>
      <h1>Login</h1>
      <hr />
      <FormLogin/>
      <button onClick={onLogin} className="login-btn">Login</button>
    </>
  )
}
