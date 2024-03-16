import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VulnDetails = () => {
  const score = 7.5;
  return (
    <div className="mx-auto max-w-7xl p-4 bg-white rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text mb-8">
        Vulnerability Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">CVE ID:</h2>
            <p>CVE-2024-1234</p>
          </div>
        </div>
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">CWE ID:</h2>
            <p>CWE-123</p>
          </div>
        </div>
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">
              Vulnerability Classification:
            </h2>
            <p>Buffer Overflow</p>
          </div>
        </div>
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">Publish Date:</h2>
            <p>2024-03-16</p>
          </div>
        </div>
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">Update Date:</h2>
            <p>2024-03-17</p>
          </div>
        </div>
        <div className="col-span-1 h-25">
          <div className="bg-white rounded-lg shadow-md p-2 h-full flex gap-5 justify-center items-center">
            <div style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={score * 10} // Convert score to percentage
                text={score.toFixed(1)} // Display score with one decimal point
                styles={{
                  path: {
                    // Path color
                    stroke: `rgba(242, 22, 124, ${score / 10})`,
                  },
                  trail: {
                    // Trail color
                    stroke: "#f3f3f3",
                  },
                  text: {
                    // Text color
                    fill: "#11ea47",
                    fontSize: "24px",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">Severity Score</p>
              <p
                className={`text-lg font-semibold ${
                  score >= 7.0 ? "text-red-600" : "text-blue-600"
                }`}
              >
                {score}{" "}
                <span
                  className={`bg-${
                    score >= 7.0 ? "red-200" : "blue"
                  }-200 px-2 py-1 rounded-md`}
                >
                  High
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Other details */}
      </div>

      <div className="col-span-2 lg:col-span-3 mt-2">
        <h2 className="text-lg font-semibold">Summary:</h2>
        <p>
          A vulnerability that allows remote attackers to execute arbitrary code
        </p>
      </div>

      <div className="col-span-2 lg:col-span-3 mt-2">
        <h2 className="text-lg font-semibold">Summary:</h2>
        <p>
          A vulnerability that allows remote attackers to execute arbitrary code
        </p>
      </div>

      <div className="col-span-2 lg:col-span-3 mt-2">
        <h2 className="text-lg font-semibold">Summary:</h2>
        <p>
          A vulnerability that allows remote attackers to execute arbitrary code
        </p>
      </div>

      <div className="col-span-2 lg:col-span-3 mt-2">
        <h2 className="text-lg font-semibold">Summary:</h2>
        <p>
          A vulnerability that allows remote attackers to execute arbitrary code
          A vulnerability that allows remote attackers to execute arbitrary code
        </p>
      </div>

      <div className="col-span-2 lg:col-span-3 mt-2">
        <h2 className="text-lg font-semibold">Summary:</h2>
        <p>
          A vulnerability that allows remote attackers to execute arbitrary code
        </p>
      </div>
    </div>
  );
};

export default VulnDetails;
