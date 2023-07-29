import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


function Nav() {
    return ( 
<>
<div className="header">

            <div className="logo">
                
                <p>Vatsalya <span>Foundation</span></p>
            </div>
            <nav id="nav">
                <ul>
                     <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/event'}>Schedule</NavLink></li>
                    <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
                    <li><NavLink to={'/books'}>Store</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
            </nav>
        </div>
</>
     );
}

export default Nav;
