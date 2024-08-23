import React from "react";


import Tnav from "./Tnavbar";
import TSidebar from "./TSidebar";


export default function TeacherDashboardPage() {

  return (
    <>
      <div className="wrapper">
        <Tnav/>
        <TSidebar/>
      </div> 
    </>
  );
}