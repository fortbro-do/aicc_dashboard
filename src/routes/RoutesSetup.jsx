import React from "react";
import DashboardSlider from "./Dashboard/DashboardSlider";
import { Route, Routes } from "react-router-dom";
import DashboardAicc from "./Dashboard/DashboardAicc";
import DashboardDigitalContact from "./Dashboard/DashboardDigitalContact";
import DashboardMainCall from "./Dashboard/DashboardMainCall";
import DashboardHeadquarters from "./Dashboard/DashboardHeadquarters";

function RoutesSetup() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardSlider />}></Route>
        <Route path="aicc" element={<DashboardAicc />}></Route>
        <Route path="digtal" element={<DashboardDigitalContact />}></Route>
        <Route path="call" element={<DashboardMainCall />}></Route>
        <Route path="head" element={<DashboardHeadquarters />}></Route>
      </Routes>
    </>
  );
}

export default RoutesSetup;
