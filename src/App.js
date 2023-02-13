import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/quiz">
            <Route path=":quizid" element={<Quiz />} />
          </Route>
        </Routes>
      }
    </div>
  );
}

export default App;
