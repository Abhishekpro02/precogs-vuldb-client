import React from "react";

const VulnDetails = () => {
  return (
    <div className="mx-auto max-w-7xl p-4 bg-white rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text mb-8">
        Vulnerability Details
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">CVE ID:</h2>
          <p>CVE-2024-1234</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">CWE ID:</h2>
          <p>CWE-123</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">
            Vulnerability Classification:
          </h2>
          <p>Buffer Overflow</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">Publish Date:</h2>
          <p>2024-03-16</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">Update Date:</h2>
          <p>2024-03-17</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-semibold">Score:</h2>
          <p>7.5</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Summary:</h2>
          <p>
            A vulnerability that allows remote attackers to execute arbitrary
            code.
          </p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Commit Link:</h2>
          <p>https://github.com/yourproject/commit/123456</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Commit Message:</h2>
          <p>Fixed buffer overflow vulnerability</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Project:</h2>
          <p>Your Project Name</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Language:</h2>
          <p>JavaScript</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold">References:</h2>
          <ul>
            <li>
              <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-1234">
                CVE Link
              </a>
            </li>
            <li>Source: Your Source</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VulnDetails;
