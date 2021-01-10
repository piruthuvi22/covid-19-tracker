import Card from "../Card/Card";

const Cards = (props) => {
  return (
    <div className="card text-center">
      <div className="card-header h5 bg-header">
        {props.data["Country_text"]
          ? props.data["Country_text"] === "World"
            ? "World Wide"
            : props.data["Country_text"]
          : "Select a country"}
        &nbsp;<i className="fas fa-globe-americas"></i>
      </div>
      <div className="card-body">
        <div className="row row-cols-1  row-cols-sm-2 row-cols-lg-4 g-2">
          <Card
            data={props.data["Total Cases_text"]}
            title={"Total Cases"}
            bgColor="totalCase"
          />
          <Card
            data={props.data["Active Cases_text"]}
            title={"Active Cases"}
            bgColor="activeCases"
          />
          <Card
            data={props.data["Total Recovered_text"]}
            title={"Recovered Cases"}
            bgColor="recoveredCases"
          />
          <Card
            data={props.data["Total Deaths_text"]}
            title={"Death Cases"}
            bgColor="deathCases"
          />
        </div>
      </div>
      <div className="card-footer text-muted bg-footer">
        <span className="h5">
          {props.data["Last Update"]
            ? `Last Updated ${props.data["Last Update"]}`
            : `Select a country`}
        </span>
      </div>
    </div>
  );
};

export default Cards;
