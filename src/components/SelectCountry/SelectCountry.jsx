import React, { Component } from "react";

class ChooseCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "World",
    };
  }

  handleChange = (e) => {
    this.props.handleCountry(e.target.value);
    this.setState({ selectedValue: e.target.value });
  };

  componentDidMount() {
    this.props.handleCountry(this.state.selectedValue);
  }

  render() {
    return (
      <div className="col">
        <label htmlFor="countrySelect" className="form-label">
          <span className="h5 text-secondary">Choose Country</span>
        </label>
        <select
          className="form-select"
          id="countrySelect"
          value={this.state.selectedValue}
          // defaultValue="world"
          onChange={this.handleChange}
          onFocus={() => (this.size = 5)}
          aria-label="Default select example"
        >
          {this.props.countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ChooseCountry;
