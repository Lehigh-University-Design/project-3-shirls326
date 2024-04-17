import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import GamesAndTimeline from './pages/GamesAndTimeline.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          
          <Route path="/project-3-shirls326" element={<App />} />
          <Route path="/project-3-shirls326/gamesTimeline" element={<GamesAndTimeline />} />
          <Route path="*" element={<Navigate to="/" replace/>} />
          
          {/* <Route path="/about" element={<About />} /> */}
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

