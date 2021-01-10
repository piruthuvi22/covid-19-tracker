const storeData = (response) => {
  let countries = [];
  for (let index = 0; index < response.length; index++) {
    const country = response[index];
    countries.push(country.Country_text);
  }
  return countries.sort();
  // let {
  //   "Active Cases_text": activeCases,
  //   Country_text: country,
  //   "Last Update": lastUpdate,
  //   "New Cases_text": newCases,
  //   "New Deaths_text": newDeaths,
  //   "Total Cases_text": totalCases,
  //   "Total Deaths_text": totalDeaths,
  //   "Total Recovered_text": totalRecovered,
  // } = response[1];
};

export const fetchAllCountryData = async () => {
  const response = await fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ddb47907camshb7e500f12c51088p13a85cjsna19b6e820237",
      "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
    },
  });
  const json = await response.json();
  return json;
};

export const fetchCountry = async () => {
  const response = await fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ddb47907camshb7e500f12c51088p13a85cjsna19b6e820237",
      "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
    },
  });
  const json = await response.json();
  return storeData(json);
};

export const fetchAllData = async (world) => {
  const response = await fetch(
    `https://covid-19-tracking.p.rapidapi.com/v1/${world}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ddb47907camshb7e500f12c51088p13a85cjsna19b6e820237",
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
      },
    }
  );
  const json = await response.json();
  return json;
};
