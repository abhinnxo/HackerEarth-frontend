import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CenterBoard from "./components/Dashboard";

import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route exact path="/dashboard">
        <Navbar />
        <CenterBoard />
      </Route>
    </BrowserRouter>
  );
}

export default App;
