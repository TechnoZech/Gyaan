import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Pill from "./components/Pill";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
					<Route path="/" element={<Home />} />
          <Route path="/pill" element={<Pill />} />
          <Route path="/article" element={<Article />} />
				</Routes>
      </Router>
    </>
  );
}

export default App;
