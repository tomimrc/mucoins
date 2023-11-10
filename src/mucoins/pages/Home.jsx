import { Navbar } from "../components/Navbar"



export const Home = () => {
  return (
    <>    
    <h1>Home</h1>
    <div className="home-container">
      <Navbar/>
      <img src="src\assets\img\hero-2.jpg" alt="" className="img-home"/>
    </div>
    </>
  )
}
