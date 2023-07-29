import React from 'react'
import './Event.css';
import { NavLink } from 'react-router-dom';

function Event() {
    return ( 
        <>
        
        <div className='e'>Event Schedule
        <button class="custom-btn btn-2"><NavLink to={'/register'}>Event Register</NavLink></button>
        </div>
         <div className="container">
            


{/*1 Mumbai*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">30</span>
                <span className="month-year">Jul, 2023</span>
            </div>
            <div className="dt-ven">Mumbai</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Trimandir Khatmuhurat in Thane, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Global Hospital, Laxmi Nagar, Majiwada, Thane, Thane-400607, Maharashtra, India </li>
                    <li><span><i className=""></i></span>Contact : +91 9323528901</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*2 Vatsdalya opening Adalaj*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">15</span>
                <span className="month-year">Aug, 2023</span>
            </div>
            <div className="dt-ven">Adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Vatsalya New Residence Opening</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Sankul New Residence, Behind Trimandir, Ahmedabad - Kalol Highway, Adalaj-382421, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*3 Raxabandhan*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">30</span>
                <span className="month-year">Aug, 2023</span>
            </div>
            <div className="dt-ven">adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Rakshabandhan Celebration in Adalaj, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Trimandir, Ahmedabad - Kalol Highway, Adalaj-382421, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*4 Janmashtmi*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">07</span>
                <span className="month-year">Sep, 2023</span>
            </div>
            <div className="dt-ven">adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Janmashtami Celebration in Adalaj, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Trimandir, Ahmedabad - Kalol Highway, Adalaj-382421, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*5 Parayan*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">12-19</span>
                <span className="month-year">Sep, 2023</span>
            </div>
            <div className="dt-ven">adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Paryushan Parayan (Advanced Study) in Adalaj, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Dada Nagar Convention Centre, Behind Trimandir Sankul , Adalaj-382421, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*6 Dubai*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">23-09</span>
                <span className="month-year">sep-otc, 2023</span>
            </div>
            <div className="dt-ven">dubai & africa</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Dubai & Africa Satsang Tour</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Dubai (Time & Place will be announced soon)</li>
                    <li><span><i className=""></i></span></li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*7 Diwali*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">12</span>
                <span className="month-year">Nov, 2023</span>
            </div>
            <div className="dt-ven">adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Diwali Celebration in Adalaj, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Trimandir, Ahmedabad - Kalol Highway, Adalaj-382421, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>

{/*8 New Year*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">14</span>
                <span className="month-year">Nov, 2023</span>
            </div>
            <div className="dt-ven">adalaj</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">New Year Celebration in Adalaj, India</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Dada Nagar Convention Centre, Behind Trimandir Sankul, Adalaj-382421, Gujarat, India </li>
                    <li><span><i className=""></i></span>Contact : +91 9328661166</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>
{/*7 Janmjayanti*/}
<div className="upcoming-events-wrap">
    <div className="upcoming-events">
        <div className="event-date">
            <div className="dt-wrap">
                <span className="day">22-28</span>
                <span className="month-year">Nov, 2023</span>
            </div>
            <div className="dt-ven">amreli</div>
        </div>
        <div className="event-content">
            <div className="content-inner">
            <p className="cnt-ensemble cnt-last">Dada Bhagwan's 116th Janma Jayanti</p>
                <ul className="ul-details">
                    <li><span><i className="fa fa-map-marker"></i></span>Nr.Trimandir, Liliya Road, Amreli, Gujarat, India</li>
                    <li><span><i className=""></i></span>Contact : +91 9574329133</li>
                </ul>
                
            </div>
        </div>
    </div>
</div>


</div>
        </>
     );
}

export default Event;