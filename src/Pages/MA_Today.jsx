import React from "react";
import { useNavigate } from "react-router-dom";

/* ---------------------------------- Style --------------------------------- */
const maTodayStyle = {
  textAlign: "center",
};

const logoutButtonStyle = {
  marginTop: "2rem",
};
/* -------------------------------------------------------------------------- */

//export default function MA_Today() {
const MA_Today = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; //increment by 1 since Month are 0-11
  const year = today.getFullYear();

  //Logout
  const handleLogout = () => {
    // Log out the user (implement signOut here)

    localStorage.removeItem("token");

    // Return to login page
    navigate("/");
  };

  return (
    <div className="maToday" style={maTodayStyle}>
      <h1>Welcome, {userName}!</h1>

      <p>
        Today's Date: {month}/{day}/{year}
      </p>

      <button
        className="logoutButton"
        onClick={handleLogout}
        style={logoutButtonStyle}
      >
        Logout
      </button>
    </div>
  );
};

export default MA_Today;
