import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CenterBoard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/dashboard">
        <Navbar />
        <CenterBoard />
      </Route>
    </BrowserRouter>
  );
}

export default App;
