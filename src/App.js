import React from "react";
import "./styles.scss";
import SideBar from "./components/sideBar";
import MainDash from "./components/MainDash";
export default function App() {
  return (
    <div className="app">
      <SideBar />
      <MainDash />
    </div>
  );
}
