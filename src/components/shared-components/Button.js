import "./Button.css";

const Button = ({ text, addClass, marginLeft, path }) => {
  const directedPath = Boolean(path) ? path : "/workonprogress";
  const classList = Boolean(addClass) ? `btn ${addClass}` : "btn";

  return (
    <a href={directedPath}>
      <button className={classList} style={{ marginLeft }}>
        {text}
      </button>
    </a>
  );
};

export default Button;
