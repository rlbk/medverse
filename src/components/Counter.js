import "./Counter.css";

function Counter() {
  return (
    <div className="counter-block">
      <div className="counterItem-block">
        <img
          src={require("./images/hospital-icon.png")}
          alt=""
          className="counter-image"
        />
        <p className="counter-number">1000+</p>
        <p className="counter-textDes"> Hospitals and health organizations</p>
      </div>
      <div className="counterItem-block">
        <img
          src={require("./images/doctor-icon.png")}
          alt=""
          className="counter-image"
        />
        <p className="counter-number">1000+</p>
        <p className="counter-textDes">Doctors and Nurses</p>
      </div>
      <div className="counterItem-block">
        <img
          src={require("./images/patient-icon.png")}
          alt=""
          className="counter-image"
        />
        <p className="counter-number">1000+</p>
        <p className="counter-textDes"> Patients</p>
      </div>
    </div>
  );
}

export default Counter;
