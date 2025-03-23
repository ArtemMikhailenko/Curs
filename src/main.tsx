// main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import Dissertations from "@/pages/Dissertations/Dissertations.tsx"; // <-- новый компонент
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          
          {/* Главная страница */}
          <Route path="/" element={<App />} />
          
          {/* Новая страница с диссертациями */}
          <Route path="/dissertations" element={<Dissertations />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <Footer/>
  </React.StrictMode>
);
