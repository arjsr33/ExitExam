import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar'

function App() {
  return (
      
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<EmailForm />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
  );
} 

export default App;
