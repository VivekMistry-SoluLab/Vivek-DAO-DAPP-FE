import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAccount } from "wagmi";

export const Sidebar = () => {
  const { address, isConnected } = useAccount();
  return (
    <div
      className="md:w-64 sm:w-full  py-4 px-3 m-5 rounded-xl border"
      style={{ borderColor: "#2d2d2d" }}
    >
      <img
        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
        className="w-12 mx-auto md:max-w-full h-auto rounded-full"
        alt=""
      />

      <h5 className="mb-2 text-2xl mt-4 font-bold text-center text-white flex flex-row justify-center">
        SoluLab DAO
        <MdOutlineVerified
          style={{ fontSize: "20px", alignSelf: "center", marginLeft: "5px" }}
        />
      </h5>
      <p className="font-normal text-gray-400 text-center">20k members</p>
      <a
        href="#"
        className="inline-block flex m-4 flex-row justify-center text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 "
      >
        Join
      </a>

      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
          >
            {" "}
            Proposal
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Create"
            className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
          >
            {" "}
            New Proposal
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Treasury"
            className="flex items-center ml-3 p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
          >
            {" "}
            Treasury
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
          >
            {" "}
            About
          </NavLink>
        </li>
        {isConnected && (
          <li>
            <NavLink
              to="/create-nft"
              className="flex items-center ml-3 p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700"
            >
              {" "}
              Create NFT
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
