import React from "react";
import "./styles.scss";
import ButtonSignOff from "./components/ButtonSignOff";
import TitleSideBar from "./components/TitleSideBar";
export default function SideBar() {
  return (
    <div className="app">
      <TitleSideBar />
      <ButtonSignOff />
    </div>
  );
}
