import React from "react";
import "./App.css";

import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <ProductList />
    </div>
  );
}

export default App;
