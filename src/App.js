import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import { Header } from "./components/Header/Header"
import { Video } from './pages/Video/Video';

function App() {


  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Video />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
