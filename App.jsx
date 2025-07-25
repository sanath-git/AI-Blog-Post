import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto bg-white min-h-screen">
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
