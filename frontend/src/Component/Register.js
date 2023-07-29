import React from 'react'
import './Register.css';

function Register() {
    return ( 
        <>

<form action='http://127.0.0.1:1008/data' method='post'>
<div className="container">
<h1>Event Registration Form</h1>
<br />
<input type="text" placeholder="Mahatma's Name" name="name" />
<input type="text" placeholder="I-Card Number" name="id" />
<input type="text" placeholder="Mobile Number" name="mob" />
<input type="text" placeholder="E-Mail ID" name="email" />
<input type="text" placeholder="Event Name" name="ename" />

<button type="submit" className="registerbtn"><strong>Submit</strong></button>
</div>
</form>
        </>
     );
}

export default Register;