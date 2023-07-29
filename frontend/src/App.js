import React from 'react'
import './App.css';
import Home from './Home';
import Nav from './Component/Nav';
import Gallery from './Component/Gallery';
import { Route, Routes } from 'react-router-dom';
import Foot from './Component/Foot';
import Books from './Component/Books';
import Dada from './Component/Dada';
import Niruma from './Component/Niruma';
import Dipakbhai from './Component/Dipakbhai';
import About from './Component/About';
import Contact from './Component/Contact';
import Event from './Component/Event';
import Register from './Component/Register';
import Welcome from './Component/Welcome';
import Feedback from './Component/Feedback';

function App() {
  return (
   <React.Fragment>
    <Nav />
   
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/books' element={<Books />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/event' element={<Event />} />
    <Route path='/welcome' element={<Welcome />} />
    <Route path='/feedback' element={<Feedback />} />
   </Routes>
   <Routes>
    <Route path='/dada' element={<Dada />} />
    <Route path='/niruma' element={<Niruma />} />
    <Route path='/dipakbhai' element={<Dipakbhai />} />
   </Routes>
   <Routes>
    <Route path='/register' element={<Register />} />
   </Routes>
   
   <Foot />
   
   </React.Fragment>
  );
}

export default App;
