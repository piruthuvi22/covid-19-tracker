import React, { Component } from "react";

import { fetchCountry, fetchAllData } from "../../api/api";
import ChooseCountry from "../SelectCountry/SelectCountry";
import ShowTable from "../ShowTable/ShowTable";
import Cards from "../Cards/Cards";
import DataTable from "../DataTable/DataTable";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      data: {},
    };
    this.handleCountry = this.handleCountry.bind(this);
  }

  componentDidMount() {
    fetchCountry().then((country) => {
      if (country) {
        this.setState({ countries: country });
      } else {
        alert("No data found");
      }
    });
  }

  handleCountry(val) {
    fetchAllData(val).then((val) => {
      this.setState({ data: val });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row my-2">
          <ChooseCountry
            countries={this.state.countries}
            handleCountry={this.handleCountry}
          />
          <ShowTable />
        </div>
        <Cards data={this.state.data} />
        <DataTable />
      </React.Fragment>
    );
  }
}

export default MainContainer;
