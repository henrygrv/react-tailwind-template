import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Page } from './pages/Page';


export const App = () => (

  <div>
    <Router>
      <Routes>
        {/* Example Routes */}
        <Route path="/" element={<Page />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>        
    </Router>
  </div> 
)