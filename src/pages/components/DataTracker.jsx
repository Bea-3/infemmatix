import React from "react";
import dataGraph from "../../assets/images/graph.png";

const DataTracker = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 justify-between data-tracker">
      <div className="text-primaryText flex flex-col justify-center gap-5 w-full md:w-1/2 py-4">
        <h2 className="text-5xl">Data Tracker </h2>

        <p>
          Take control of your data and unlock your potential. Our Data Hub
          empowers you with personalized tools to track, analyze, and visualize
          your progress. From workload management to financial tracking, gain
          valuable insights to make informed decisions and achieve your goals.
        </p>

        <button
          className="py-2 px-4 font-medium w-fit"
          style={{
            border: "2px solid transparent",
            borderRadius: "8px",
            background:
              "linear-gradient(black, black) padding-box, linear-gradient(90deg, #8C52FF, #55EECC) border-box",
          }}
        >
          Sign up
        </button>
      </div>
      <div className="w-1/3 py-4 px-6 data-graph">
        <img src={dataGraph} alt="Data Graph" />
      </div>
    </div>
  );
};

export default DataTracker;
