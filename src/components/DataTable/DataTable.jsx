import { React, useState, useEffect } from "react";

import { fetchAllCountryData } from "../../api/api";
import "./filerTable";

const DataTable = (props) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchAllCountryData().then((data) => {
      setAllData(data);
    });
  }, [setAllData]);

  const renderData = () => {
    return allData.map((data, index) => (
      <tr key={index}>
        <th scope="row">{data["Country_text"]}</th>
        <td>{data["Total Cases_text"]}</td>
        <td>{data["Active Cases_text"]}</td>
        <td>{data["Total Deaths_text"]}</td>
        <td>{data["Total Recovered_text"]}</td>
        <td>{data["New Cases_text"]}</td>
        <td>{data["New Deaths_text"]}</td>
      </tr>
    ));
  };
  return (
    <div className="table-responsive mt-2">
      <div className="row align-items-center">
        <div className="col col-sm-6 col-md-3">
          <input
            className="form-control m-1"
            id="tableSearch"
            type="text"
            placeholder="Search data"
          />
        </div>
        <div className="col col-sm-6 col-md-9 text-center">
          <h5>Summary</h5>
        </div>
      </div>
      <table className="table table-striped table-hover table-bordered caption-top">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Total Cases</th>
            <th scope="col">Active Cases</th>
            <th scope="col">Death Cases</th>
            <th scope="col">Recovered Cases</th>
            <th scope="col">New Cases</th>
            <th scope="col">New Deaths</th>
          </tr>
        </thead>
        <tbody id="myTable">{renderData()}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
