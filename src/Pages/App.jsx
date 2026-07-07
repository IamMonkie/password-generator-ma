import React, { useState } from "react";
//import Signup from "./Signup";
//import Login from "./Login";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

/* --------------------------------- Import -------------------------------- */
import Login from "./Login";
import MA_Today from "./MA_Today";

/* -------------------------------------------------------------------------- */

/* ---------------------------------- Style --------------------------------- */
const pageStyle = {
  minHeight: "100vh",
};

const containerStyle = {
  minHeight: "100vh",
};

const appContentStyle = {
  width: "100%",
  maxWidth: "500px",
};

const darkModeSwitchStyle = {
  position: "fixed",
  top: "10px",
  right: "10px",
  zIndex: "1000",
};

const darkTheme = {
  backgroundColor: "#222222",
  color: "#FFFFFF",
};

const lightTheme = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
};

/* -------------------------------------------------------------------------- */

const App = () => {
  console.log("App component rendered");

  const [darkMode, setDarkMode] = useState(false);

  const currentPageStyle = {
    ...pageStyle,
    backgroundColor: darkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
    color: darkMode ? darkTheme.color : lightTheme.color,
  };

  const currentContainerStyle = {
    ...containerStyle,
    backgroundColor: darkMode
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
    color: darkMode ? darkTheme.color : lightTheme.color,
  };

  /*
  const handleLogout = () => {
    // Log out the user (implement Firebase auth signOut here)
  };
  */

  return (
    <div style={currentPageStyle}>
      <Router>
        <Container
          className="appContainer d-flex align-items-center justify-content-center"
          style={currentContainerStyle}
        >
          <div className="appContent" style={appContentStyle}>
            <div
              className="mb-3 form-check form-switch"
              style={darkModeSwitchStyle}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              ></input>
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>

            <Routes>
              <Route path="/" element={<Login darkMode={darkMode} />} />
              <Route path="/today" element={<MA_Today darkMode={darkMode} />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </div>
  );
};
export default App;
