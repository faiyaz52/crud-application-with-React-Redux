import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link>
                            <span className="material-icons" style={{color:"#3f51b5",backgroundColor:"white"}}>
                            format_align_right
                            </span>
                        </Link>
                    
                    </li>
                    <hr/>
                    <li>
                        <Link  to="/HomePage" >
                            <span className="material-icons" style={{color:"#3f51b5"}}>
                                home
                            </span>
                          
                        </Link>
                    </li>
                    <li className="has-subnav">
                        <Link to="/App">
                            <span className="material-icons" style={{color:"#3f51b5"}}>
                                person
                            </span>
                        </Link> 
                    </li>
                    <li className="has-subnav">
                        <Link to="/Account">
                            <span className="material-icons" style={{color:"#3f51b5"}}>
                                account_balance
                            </span> 
                        </Link> 
                    </li>
                    <li>
                        <Link to="/DaskBoard">
                            <span className="material-icons"  style={{color:"#3f51b5"}}>
                                desktop_mac
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="Notification">
                            <span className="material-icons" style={{color:"#3f51b5"}}>
                                notifications
                            </span>
                        </Link>
                    </li>
                    <li>
                         <Link to="#">
                            <span className="material-icons" style={{color:"#3f51b5"}}>
                                location_on
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div> 
    )
}
export default Navbar;