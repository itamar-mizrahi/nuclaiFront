import React from "react";
import Dropdown from "./slide/Dropdown";
import IDOfSlide from "./slide/IDOfSlide";
import Placeholder from "./slide/Placeholder.js";
export default function Slide() {
  return (
    <div className="Slide">
      <Dropdown />
      <span className="conHeaderOfSlide">
        <Placeholder />
        <IDOfSlide />
      </span>
    </div>
  );
}
