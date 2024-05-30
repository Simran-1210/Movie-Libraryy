import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeWrapper from "./components/layout/HomeWrapper/HomeWrapper";
import WinnerWrapper from "./components/layout/WinnerWrapper/WinnerWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact component={HomeWrapper} />
        <Route path="/winner" component={WinnerWrapper} />
      </Routes>
    </>
  );
}

export default App;
