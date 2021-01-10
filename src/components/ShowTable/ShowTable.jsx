import { Link } from "react-router-dom";

const ShowTable = (props) => {
  return (
    <div className="col align-self-end">
      <Link to="/stastic">
        <button className="btn btn-dark">
          Statistic Data | <i className="fas fa-chart-bar"></i>
        </button>
      </Link>
    </div>
  );
};

export default ShowTable;
