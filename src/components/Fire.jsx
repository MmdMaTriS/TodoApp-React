import React from "react";
import "./Fire.css";
const Fire = () => {
  return (
    <>
      <div id="check-fire" className="hidden-fire">
        <div class="section-center">
          <div class="wood-circle"></div>
          <div class="wood"></div>
          <div class="fire">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fire;
