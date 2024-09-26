import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState({});

  function fetchUser() {
    const mockarooApiKey = '1f8e6d30';
    const url = `https://cors-anywhere.herokuapp.com/https://my.api.mockaroo.com/users.json?key=${mockarooApiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setUser(data[0]))
        .catch(error => console.error(error));
  }

  useEffect(() => fetchUser(), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
