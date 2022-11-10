import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ControlledComponentPage from "./pages/controlled-component-page";
import HocPage from "./pages/hoc-page";
import ReducerPage from "./pages/reducer-page";
import UnControlledComponentPage from "./pages/un-controlled-component-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="hoc" element={<HocPage />} />
        <Route path="controlled" element={<ControlledComponentPage />} />
        <Route path="reducer" element={<ReducerPage />} />
        <Route path="un-controlled" element={<UnControlledComponentPage />} />
        <Route path="*" element={<h1>Hi </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
