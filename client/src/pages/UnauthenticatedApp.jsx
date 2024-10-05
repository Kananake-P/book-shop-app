import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./HomePage";
import RegisterPage from "./RegisterPage";

function UnauthenticatedApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
export default UnauthenticatedApp;
