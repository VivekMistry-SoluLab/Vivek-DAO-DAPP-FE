import React from "react";
import Details from "../components/Details";
import { Navbar } from "../components/Navbar";
import Vote from "../components/Vote";
import Sidetabs from "../components/Sidetabs";

const Detailspage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mx-auto justify-center">
        <div>
          <Details />
          <Vote />
        </div>
        <div>
          <Sidetabs />
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
