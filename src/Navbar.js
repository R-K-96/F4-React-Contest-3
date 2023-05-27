
import { Link } from "react-router-dom";
const Navbar =()=>{

    return (
        <nav>
           <p>Header</p>
           <div className="redirect">
              <Link  to="/signup" style={{ textDecoration: 'none',color:'white'}}>Signup</Link> 
              <Link to="/profile"  style={{ textDecoration: 'none',color:'white'}}>Profile</Link>
            </div> 
            
        </nav>
    );
}

export default Navbar;
