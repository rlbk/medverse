import "./CounterItem.css";

function CounterItem() {
  return (
    <div className="counterItem-block">
      <img
        src={require("./images/hospital-icon.png")}
        alt=""
        className="counter-image"
      />
      <p className="counter-number">1000+</p>
      <p className="counter-textDes"> Hospitals and health organizations</p>
    </div>
  );
}

export default CounterItem;
