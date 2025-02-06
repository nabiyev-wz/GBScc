import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Kontakt from "./components/Kontakt";
import Operator from "./components/Operator";
import Settings from "./components/Sozlamalar";




const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Kontakt' element={<Kontakt />}></Route>
          <Route path='Operator' element={<Operator />}></Route>
          <Route path='Sozlamalar' element={<Settings />}></Route>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
