import React from "react";
import sun from "../../public/images/sun.png";

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

export default DarkMode;
