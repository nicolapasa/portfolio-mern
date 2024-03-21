import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context";  // <== IMPORT
import { useState, useContext } from "react";
const Navbar = () => {
    const { isLoggedIn,  logOutUser } = useContext(AuthContext); 

  

  return (
    <nav className="flex flex-col sm:flex-row   justify-between container mx-auto pb-4  border-b-2">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/#about'}>About</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4">
   {  !isLoggedIn &&   
    <>
      <li>
<Link to={'/login'}>Login</Link>
</li>
<li>
<Link to={'/signup'}>Signup</Link>
</li>
    </>
  
   }
   {
    isLoggedIn  &&
<>
    <li>
      <Link to={'/dashboard'} >Dashboard</Link>
    </li>
    <li>
        <button onClick={ logOutUser}>Logout</button>
    </li>
    </>
   }
           
        </ul>

    </nav>
  )
}

export default Navbar