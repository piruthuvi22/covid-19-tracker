import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import { fetchCountry, fetchAllData } from "../../api/api";
import ChooseCountry from "../SelectCountry/SelectCountry";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      data: {},
      // dataForTable: {},
      // options: {},
    };
    this.handleCountry = this.handleCountry.bind(this);
  }

  handleCountry(val) {
    fetchAllData(val).then((val) => {
      this.setState({ data: val });
    });
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

  render() {
    let {
      Country_text: country,
      "Total Cases_text": data1,
      "Active Cases_text": data2,
      "Total Recovered_text": data3,
      "Total Deaths_text": data4,
      // "New Cases_text": data5,
      // "New Deaths_text": data6,
    } = this.state.data;
    let val1, val2, val3, val4;
    // let val5, val6;
    if (
      data1 !== undefined &&
      data2 !== undefined &&
      data3 !== undefined &&
      data4 !== undefined
    ) {
      val1 = data1.replace(/,/g, "");
      val2 = data2.replace(/,/g, "");
      val3 = data3.replace(/,/g, "");
      val4 = data4.replace(/,/g, "");
      // val5 = data5.replace(/,/g, "");
      // val6 = data6.replace(/,/g, "");
      // val5 = val5.substring(1, val5.length);
      // val6 = val6.substring(1, val6.length);
    }
    const dataForTable = {
      labels: [
        "Total Cases",
        "Active Cases",
        "Recovered Cases",
        "Deaths Cases",
        // "New Cases",
        // "New Deaths",
      ],
      datasets: [
        {
          label: "Count ",
          data: [val1, val2, val3, val4],
          backgroundColor: [
            "rgba(255, 239, 96, 0.5)",
            "rgba(76, 159, 255, 0.5)",
            "rgba(159, 255, 76, 0.5)",
            "rgba(255, 82, 76, 0.5)",
            // "rgba(54, 162, 25, 0.2)",
            // "rgba(54, 62, 235, 0.2)",
          ],
          borderColor: [
            "rgb(255, 230, 0)",
            "rgb(0, 119, 255)",
            "rgb(102, 218, 0)",
            "rgb(255, 8, 0)",
            // "rgba(54, 162, 23, 1)",
            // "rgba(5, 162, 235, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };

    const options = {
      legend: { display: false },
      title: {
        display: true,
        text: country ? `Current statistics in ${country}` : `No data`,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <div className="container-md mt-2">
        <ChooseCountry
          countries={this.state.countries}
          handleCountry={this.handleCountry}
        />
        <section className="px-md-5">
          <Bar data={dataForTable} options={options} />
        </section>
      </div>
    );
  }
}

export default Table;
