import React from 'react'
import './Contact.css';
import { NavLink } from 'react-router-dom';

function Contact() {
    return ( 
        <>
   <div className="container">

<h1 className="brand"><span>.</span></h1>

<div className="wrapper">

    <div className="company-info">
    <h3>Contact Us</h3>
    <ul>
        <li>Dada Bhagwan Foundation, Adalaj is a spiritual non-profit organization whose goal is to spread peace, harmony and everlasting bliss to the whole world through the spiritual science of Akram Vignan.</li>
    </ul>
        <h3>Other Websites :</h3>
        <ul>
            <li><NavLink to={'https://store.dadabhagwan.org/'}>Online Store</NavLink></li>
            <li><NavLink to={'https://youth.dadabhagwan.org/'}>Website for Youth</NavLink></li>
            <li><NavLink to={'https://kids.dadabhagwan.org/'}>Kids Website</NavLink></li>
            <li><NavLink to={'https://www.trimandir.org/'}>Non-Sectarian Temple</NavLink></li>
            <li><NavLink to={'https://www.dadabhagwan.tv/'}>24*7 Web TV</NavLink></li>
            <li><NavLink to={'https://www.dadabhagwan.fm/'}>24*7 Web Radio</NavLink></li>
            <li><NavLink to={'https://satsang.dadabhagwan.org/'}>Website for Followers</NavLink></li>
            <li><NavLink to={'https://simcityarrival.dadabhagwan.org/'}>Simandhar City Information</NavLink></li>
            <li><NavLink to={'https://www.ambahealthcentre.org/'}>Amba Health Centre & Hospital</NavLink></li>
        </ul>
    </div>
    <div className="contact">
    <div classNameName='feed'>Feedback</div>
    <br />
        <form id="contact-form" action='http://127.0.0.1:1008/dataa' method='post'>
        

            <p>
                <label>Name</label>
                <input type="text" name="uname"  required />
            </p>
            <p>
                <label>E-mail</label>
                <input type="email" name="mail" required />
            </p>
            <p className="full">
                <label>Message</label>
                <textarea name="msg" rows="5" ></textarea>
            </p>

            <p className="full">
                <button type="submit">Submit</button>
            </p>

        </form>
    </div>

</div>
</div>
        </>
     );
}

export default Contact;