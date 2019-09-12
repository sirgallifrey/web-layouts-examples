import React from "react";
import "./FlexShrink.css";

export function FlexShrink() {
  return (
    <div className="container">
      <div className="exp5_container">
        <div>very big content</div>
        <div className="exp5_shrink">this has big content also, but is set to shrink</div>
        <div>thic box has bigger content thab all the others</div>
      </div>
    </div>
  );
}
