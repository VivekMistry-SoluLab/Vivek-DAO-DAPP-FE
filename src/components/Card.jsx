import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  return (
    <div>
      <NavLink to={`/${data.status === "Active" ? `Details/${data.id}` : ""}`}>
        <div
          className="block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-700"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="mb-3 flex flex-row justify-between">
            <div className="flex flex-row">
              <img src={data.image} class=" h-6 w-6 rounded-full" alt="" />
              <p className=" font-medium text-gray-400 ml-2">
                BanklessDao by{" "}
                {`${data.createdBy.substring(
                  0,
                  6
                )}....${data.createdBy.substring(
                  data.createdBy.length - 4,
                  data.createdBy.length
                )}`}
              </p>
              {/* <button class=" hover:bg-blue-700 text-gray-400 font-bold  px-1 rounded-full">
              Core
            </button> */}
            </div>
            <button
              className={`${
                data.status === "Active" ? "bg-green-500" : "bg-violet-600"
              } text-white font-bold  px-3 rounded-full h-fit`}
            >
              {data.status}
            </button>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white group-hover:text-gray-400">
            {data.title}
          </h5>
          <p className="font-normal text-gray-400">{data.description}</p>
          <p className="font-normal text-gray-400">{data.duration} left</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
