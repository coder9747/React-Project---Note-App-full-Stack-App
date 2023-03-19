import './App.css';
import Nav from "./components/Nav"
import { BrowserRouter, Route, Link, Routes, } from "react-router-dom";
import NoteState from "./Context/NoteState"
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register"
import Alert from './components/Alert';
import { useContext, useState } from 'react';
import NoteContext from "./Context/noteContext";


function App() {
  console.log(NoteContext)

  return (
    <>
      <BrowserRouter>
        <NoteState >
          <Nav />
          <Alert message="hey"/>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<div>About</div>} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register />} />
          </Routes>

        </NoteState>
      </BrowserRouter>
    </>

  );
}

export default App;
