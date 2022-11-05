import "./Description.css";

const Description = ({ text, fontSize }) => {
  return (
    <div>
      <p className="decs-text" style={{ fontSize }}>
        {text}{" "}
      </p>
    </div>
  );
};

export default Description;
