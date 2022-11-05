import React from "react";

function SideSectionPost({ visitDate, Name }) {
  return (
    <div style={styles}>
      <div>{visitDate}</div>
      <div>{Name}</div>
    </div>
  );
}

const styles = {
  display: "flex",
  fontSize: "12px",
  justifyContent: "space-around",
  marginBottom: "0.7rem",
};

export default SideSectionPost;
