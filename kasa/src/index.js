import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import APropos from "./pages/APropos/APropos";
import Location from "./pages/Location/Location";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
