import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Severity", "Total"],
  ["Critical", 11],
  ["High", 2],
  ["Low", 2],
  ["Medium", 2],
];

export const options = {
  title: "Severity Distribution",
};

export const data2 = [
  ["Year", "Commits"],
  ["2014", 1000],
  ["2015", 1170],
  ["2016", 660],
  ["2017", 1030],
  ["2018", 1030],
  ["2019", 1030],
  ["2020", 1030],
  ["2021", 1030],
  ["2022", 1030],
  ["2023", 1030],
];

export const options2 = {
  chart: {
    title: "Vulnerability Commits",
    subtitle: "Commits per year for the last 10 years",
    color: "#42d392", // Change bar chart color
  },
};

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-400 to-blue-500 text-transparent bg-clip-text">
        Analytics Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-5">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
        {/* <div className="max-w-full">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data2}
              options={options2}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Analytics;
