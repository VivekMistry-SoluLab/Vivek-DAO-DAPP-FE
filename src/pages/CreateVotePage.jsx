import React from "react";
import CreateVote from "../components/CreateVote.jsx";
import { Navbar } from "../components/Navbar.jsx";

const CreateVotePage = () => {
  return (
    <div>
      <Navbar />
      <CreateVote />
    </div>
  );
};

export default CreateVotePage;
