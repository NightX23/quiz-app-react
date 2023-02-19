import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/quiz">
            <Route path=":quizid" element={<Quiz />} />
          </Route>
          <Route path="/create" element={<Create />} />
        </Routes>
      }
    </div>
  );
}

export default App;
