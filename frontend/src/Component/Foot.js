import React from 'react'
import './Foot.css';
import { NavLink } from 'react-router-dom';

 function Foot() {
    return ( 
        <>
        
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


<footer>
<div className="top_header">
<section>
<span><i className="fa fa-map-marker"></i></span>
<span><NavLink to={'https://maps.app.goo.gl/MhSKZtwpELvfxyWq5'}>Ahmedabad-Kalol Highway,
Adalaj,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dist Gandhinagar - 382421 (Gujarat)</NavLink></span>
</section>
<section>
<span><i className="fa fa-phone"></i></span>
<span><NavLink type='tel'>+91 9328661166 / +91 9328661177</NavLink></span>
</section>
<section>
<span><i className="fa fa-envelope"></i></span>
<span> <NavLink to={'mailto:webmaster@dadabhagwan.org'}>webmaster@dadabhagwan.org</NavLink></span>
</section>
</div>
<span className="border-shape"></span>
<div className="bottom_content">
<section>

<NavLink to={'https://www.facebook.com/DadaBhagwanFoundation'}><i className="fa fa-facebook"></i></NavLink>
<NavLink to={'https://www.instagram.com/dadabhagwanfoundation/'}><i className="fa fa-instagram"></i></NavLink>
<NavLink to={'https://twitter.com/i/flow/login?redirect_after_login=%2Fdadabhagwan%2F'}><i className="fa fa-twitter"></i></NavLink>
<NavLink to={'https://t.me/dadabhagwan'}><i className="fa fa-telegram"></i></NavLink>
</section>

</div>
<div className="copyright">
Copyright © 2023 - Developed by : Milan Teraiya - All rights reserved 
</div>
</footer>
        </>
     );
 }
 
 export default Foot;