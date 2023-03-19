import React from 'react'
import {Routes,Route } from 'react-router-dom'

import Home_route from './routes/Home_route';
import About_route from './routes/About_route';
import Contact_route from './routes/Contact_route';
import Members_route from './routes/Members_route';




const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home_route />} />
        <Route path='/About' element={<About_route />} />
        <Route path='/Members' element={<Members_route />} />
        <Route path='/Contact' element={<Contact_route />} />
     </Routes>
    </>
  );
}

export default App
