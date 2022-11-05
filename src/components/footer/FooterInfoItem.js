const FooterInfoItem = ({ itemName }) => {
  return (
    <div style={stylesContainer}>
      <span style={stylesGt}>&gt;</span> {itemName}
    </div>
  );
};

const stylesContainer = {
  fontSize: "13px",
  color: "#fff",
  marginRight: "10vw",
};

const stylesGt = {
  color: "var(--green)",
  fontSize: "15px",
};
export default FooterInfoItem;
