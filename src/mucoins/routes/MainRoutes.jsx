import { Navigate, Route, Routes } from "react-router-dom"
import { Home, Offers } from "../pages"
import { Navbar } from "../components/Navbar"





export const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="offers" element={<Offers/>}/>
        <Route path="/*" element={<Navigate to={"/home"}/>}/>

    </Routes>

    </>
  )
}
