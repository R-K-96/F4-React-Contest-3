
import { Link } from "react-router-dom";
const Navbar =()=>{

    return (
        <nav>
           <p>Header</p>
           <div className="redirect">
              <Link to="/signup"><span>Signup</span></Link> 
             
  
              <Link to="/profile">Profile</Link>
            </div> 
            
        </nav>
    );
}

export default Navbar;
