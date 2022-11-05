import React from "react";
import FooterDashboard from "./FooterDashboard";
import MainContent from "./main-content/MainContent";
import NavbarDashboard from "./NavbarDashboard";
import SideRecords from "./side-records/SideRecords";

const Dashboard = () => {
  return (
    <div style={styles}>
      <SideRecords />

      <div>
        <NavbarDashboard />
        <MainContent />
        <FooterDashboard />
      </div>
    </div>
  );
};

const styles = {
  display: "flex",
};

export default Dashboard;
