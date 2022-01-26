import React, { useState } from "react";
import Navbar from "./MD/Navbar";
import UpperSection from "./MD/UpperSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import SecondContainer from "./MD/SecondContainer";
import Login from "./MD/login";
import Apidocs from "./MD/Apidocs";

const App = () => {
  const [moded, setMode] = useState("light");
  const [SwitchText, setSwitchText] = useState("light mode");
  const enableDarkModed = () => {
    if (moded === "light") {
      setMode("dark");
      setSwitchText("Dark mode");
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#212529";
      document.body.style.transition = "all 0.3s ease";
      document.body.style.borderColor = "#fff";
      document.title = "Navigation - Dark mode";
      const consoleDarkMessCon = () => {
        var consoleDarkMess = "Dark mode Enabled";
        console.warn(consoleDarkMess);
      };
      setTimeout(consoleDarkMessCon, 1500);
    } else {
      setMode("light");
      document.body.style.color = "#000";
      document.body.style.transition = "all 0.3s ease";
      document.body.style.backgroundColor = "#fff";
      document.title = "Navigation - Light Mode";
      const lightMessCons = () => {
        var consoleLightMess = "Light mode Enabled";
        console.warn(consoleLightMess);
      };
      setTimeout(lightMessCons, 1500);
      setSwitchText("Light mode");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          moded={moded}
          SwitchText={SwitchText}
          enableDarkModed={enableDarkModed}
        />
        <Routes>
          <Route path="/" element={<UpperSection heading="Text Utility" />} />
          <Route path="/developer" element={<SecondContainer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/apidocs" element={<Apidocs />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
