import "./UserExtraDetails.css";

function UserExtraDetails({ cateTitle, value, borderRight }) {
  //   const classList = Boolean(borderRight) ? "borderRight" : "";
  return (
    <div>
      <p>{cateTitle}</p>
      <p className="value">{value}</p>
    </div>
  );
}

export default UserExtraDetails;
