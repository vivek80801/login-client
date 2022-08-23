import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard";
import Default from "./pages/default/default";
import Home from "./pages/home/home";

const App: React.FC = (): JSX.Element => {
  return (
    <>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="*" element={<Default/>} />
        </Routes>
    </>
  );
};
export default App;
