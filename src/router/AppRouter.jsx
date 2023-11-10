import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/"
import { MainRoutes } from "../mucoins/routes/MainRoutes"
import { User } from "../auth/pages/User"



export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={<MainRoutes/>}/>
      <Route path="user" element={<User/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    </>
  )
}
