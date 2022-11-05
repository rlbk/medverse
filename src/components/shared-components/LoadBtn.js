import "./LoadBtn.css";

const LoadBtn = ({ path }) => {
  const directedPath = Boolean(path) ? path : "/workonprogress";
  return (
    <div className="load-btn">
      <a href={directedPath}>
        <button>Load more</button>
      </a>
    </div>
  );
};

export default LoadBtn;
