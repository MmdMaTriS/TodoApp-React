import React from "react";
import sun from "../../public/images/sun.png";
import PropTypes from "prop-types";
const darkModeStyle = {
  cursor: "pointer",
  borderRadius: "50%",
  backgroundColor: "#404040",
  padding: "5px",
  border: "1px solid green",
};
const DarkMode = ({ isDark }) => {
  return (
    <>
      <div>
        <label onClick={() => isDark()}>
          <img id="darkMode" src={sun} alt="LightMode" style={darkModeStyle} />
        </label>
      </div>
    </>
  );
};

DarkMode.prototype = {
  isDark: PropTypes.func,
};

export default DarkMode;
