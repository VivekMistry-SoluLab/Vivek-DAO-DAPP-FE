import React from "react";
import Treasury from "../components/Treasury";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const Treasurypage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mx-auto justify-center">
        <div>
          <Sidebar />
        </div>
        <div
          className="flex flex-col overflow-y-auto px-5 lg:w-2/4 md:w-full"
          style={{ maxHeight: "92vh" }}
        >
          <Treasury />
        </div>
      </div>
    </div>
  );
};

export default Treasurypage;
