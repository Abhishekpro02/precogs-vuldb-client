import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
      <DNA
        visible={true}
        height={80}
        width={80}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
