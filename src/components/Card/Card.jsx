import CountUp from "react-countup";

const Card = (props) => {
  return (
    <div className="col">
      <div className={`card data-card ${props.bgColor}`}>
        <div className="card-body">
          <p className="card-text">
            <span className="h5 title">{props.title}</span>
            <br />
            <span className="h4 count">
              <CountUp
                start={0}
                end={props.data ? parseInt(props.data.replace(/,/g, "")) : 0}
                duration={2}
                separator=","
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
