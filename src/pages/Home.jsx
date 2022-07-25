import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import Card from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import Heading from "../components/Heading.jsx";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader.jsx";

const CardData = [
  {
    id: 1,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Active",
    title: "Grants Commitee election for S4 and S5",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "7 days",
  },
  {
    id: 2,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Closed",
    title: "Grants Commitee election",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "17 days",
  },
  {
    id: 3,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Active",
    title: "Grants Commitee election for S4",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "8 days",
  },
  {
    id: 4,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Closed",
    title: "Grants Commitee election for S4 and S5",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "10 days",
  },
  {
    id: 5,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Closed",
    title: "Grants Commitee election for S5",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "7 days",
  },
  {
    id: 6,
    image: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    createdBy: "0x1e4E468df44eEe85813E93820713c9dd44B4f4f5",
    status: "Active",
    title: "Grants Commitee election for S4 and S5",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    duration: "20 days",
  },
];
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center">
        <div>
          <Sidebar />
        </div>
        <div
          className="flex flex-col overflow-y-auto px-5"
          style={{ maxHeight: "92vh" }}
        >
          <Heading />
          {CardData.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
