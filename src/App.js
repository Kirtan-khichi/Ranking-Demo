import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import RankingsPage from './RankingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

