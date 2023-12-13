//React
import React, { useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

//Pages
import Home from "../../Pages/Home/Home";
import Sentiment from "../../Pages/analysis/sentiment";
import Engagement from "../../Pages/analysis/engagement";

//Styles
import "./app.scss"
import "../../Global/Reset.scss"
import "../../Global/Dark_Mode.scss"
import "../../Global/RTL_Persian.scss"



function App() {
  const { darkmode } = useContext(DarkModeContext)

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/sentiment" element={<Sentiment/>} />
            <Route path="/engagement" element={<Engagement />} />

          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
