import { useState } from 'react'
import './App.css'
import { Route, Routes, createSearchParams,useNavigate} from "react-router-dom";
import NewsBody from './components/NewsBody/NewsBody';
import Navbar from './components/Navbar/Navbar';
function App() {

  return (
    <div className="font-serif">
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsBody />} />
      </Routes>
    </div>
  );
}

export default App
