import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (
        async () => {
          const response = await fetch('http://localhost:8000/api/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          })

          const content = await response.json()
          setName(content.name || '');
        }
    )();
  })

  return (
      <div className="App">
        <BrowserRouter>
          <Nav name={name} />
          <main className="form-signin w-100 m-auto">
            <Routes>
              <Route path="/" element={<Home name={name} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
