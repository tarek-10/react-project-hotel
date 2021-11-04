import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </>
  );
}

export default App;
