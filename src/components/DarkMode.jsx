import React from "react";
import sun from "../../public/images/sun.png";

const DarkMode = ({ isDark }) => {
  return (
    <>
      <div>
        <label onClick={isDark}>
          <img
            id="darkMode"
            src={sun}
            alt="LightMode"
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              backgroundColor: "#404040",
              padding: "5px",
              border: "1px solid green",
            }}
          />
        </label>
      </div>
    </>
  );
};

export default DarkMode;
