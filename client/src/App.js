import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import IntroductionPage from './introductionPage/introductionPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './Roompage/RoomPage';

import { connectWithSocketIOServer } from "./utils/wss";

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/" element={<IntroductionPage />} />
      </Routes>
    </Router>
  );
}

export default App;