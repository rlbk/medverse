import "./MoreBtn.css";

const MoreBtn = ({ text, addClass, padding, path }) => {
  const directedPath = Boolean(path) ? path : "/workonprogress";
  const classList = Boolean(addClass) ? `btn-more ${addClass}` : "btn-more";
  console.log(path);
  return (
    <div className="button-more">
      <a href={directedPath}>
        <button className={classList} style={{ padding }}>
          {text}
        </button>
      </a>
    </div>
  );
};

export default MoreBtn;
