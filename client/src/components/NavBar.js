import React, { useState ,useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css'


import {Authcontext} from "../context/authCont/authContext.js"

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const {user} = useContext(Authcontext)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
   
    return (
        <>
        {user?
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            SAS <i className="fab fa-typo3" />
                        
                        </Link>
                    
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                        </div>
                    
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                        
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/adminlogin' className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                                
                            </li>
                        
                            <li className="nav-item">
                                <Link to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                            <li className="navlist" >
                        
                            {user.Name}
                        
                              </li>
                            
 

                        </ul>
                        {button && <Button  buttonStyle='btn--outline'>SIGN UP</Button>}
                        
                    </div>
                </nav>
        :
                <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SAS <i className="fab fa-typo3" />
      
                    </Link>
                    <ul>
                        <li className="nav-item">
                            <Link to='/login' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button  buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
                </nav>
        }
        </>
    )
}

export default Navbar