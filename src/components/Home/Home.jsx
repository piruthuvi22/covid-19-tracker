import React, { Component } from "react";

// import CoverImage from "../CoverImage/CoverImage";
import MainContainer from "../MainContainer/MainContainer";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-sm">
        {/* <CoverImage /> */}
        <MainContainer />
      </div>
    );
  }
}

export default Home;
