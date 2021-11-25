import React from "react";
import ButtonSignOff from "./sideBar/ButtonSignOff";
import Slide from "./sideBar/Slide";
import TitleSideBar from "./sideBar/TitleSideBar";
export default function SideBar() {
  return (
    <div className="SideBar">
      <TitleSideBar />
      <Slide />
      <ButtonSignOff />
    </div>
  );
}
