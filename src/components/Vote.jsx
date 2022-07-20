import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { useAccount } from "wagmi";
import VoteModal from "./VoteModal";

const VoteData = [
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    address: "0x1e1E768df38eEe85813E93821113c9dd77Bd1111",
    vote: "I’d stake Cake for Carbo pool",
    value: "8.2 CAKEVO...",
  },
];

const VoteFor = [
  {
    voteFor: "I would stake cake for carbo pool",
  },
  {
    voteFor: " I would add liquidity to carbo farm",
  },
];
const Vote = () => {
  const { address, isConnected } = useAccount();
  const [selectedVote, setSelectVote] = useState();
  const [openVoteModal, setOpenVoteModal] = useState(false);
  console.log(selectedVote);
  return (
    <>
      <div>
        <ul
          className="mx-auto max-w-2xl mt-5 text-lg font-medium   rounded-lg border   border-gray-600 text-white"
          style={{ borderColor: "#2d2d2d" }}
        >
          <li
            className="py-2 px-4 w-full rounded-t-lg border-b  border-gray-600"
            style={{ borderColor: "#2d2d2d" }}
          >
            Cast Your Vote
          </li>
          <li
            className=" py-2 px-4 w-full border-b"
            style={{ borderColor: "#2d2d2d" }}
          >
            {VoteFor.map((vote) => (
              <button
                className="text-white ml-5 mt-5 mx-auto font-bold w-11/12  py-2 rounded-full border"
                style={{
                  borderColor:
                    selectedVote === vote.voteFor ? "#ffffff" : "#2d2d2d",
                }}
                onClick={() => setSelectVote(vote.voteFor)}
              >
                {vote.voteFor}
              </button>
            ))}
            {isConnected && (
              <button
                className="text-white ml-5 mt-5 mb-5 bg-blue-600 w-11/12  mx-auto font-bold  py-2 rounded-full border"
                style={{ borderColor: "#2d2d2d" }}
                onClick={() => setOpenVoteModal(true)}
                disabled={!selectedVote}
              >
                Vote
              </button>
            )}
            {!isConnected && (
              <div className="m-5" style={{ marginLeft: "35%" }}>
                <ConnectButton />
              </div>
            )}
          </li>
        </ul>
      </div>
      <div>
        <ul
          className="mx-auto max-w-2xl my-5 text-lg font-medium   rounded-lg border   border-gray-600 text-white"
          style={{ borderColor: "#2d2d2d" }}
        >
          <li
            className="py-2 px-4 w-full rounded-t-lg border-b  border-gray-600"
            style={{ borderColor: "#2d2d2d" }}
          >
            Votes - 12
          </li>
          {VoteData.map((data) => (
            <li
              className="flex flex-row justify-between py-2 px-4 w-full border-b  border-gray-600"
              style={{ borderColor: "#2d2d2d" }}
            >
              <div className="flex flex-row">
                <img src={data.image} class=" h-8 w-8 rounded-full" alt="" />{" "}
                {`${data.address.substring(0, 6)}....${data.address.substring(
                  data.address.length - 4,
                  data.address.length
                )}`}
              </div>
              <div>{data.vote}</div>
              <div>{data.value}</div>
            </li>
          ))}
        </ul>
      </div>
      {openVoteModal && (
        <VoteModal setShowModal={setOpenVoteModal} voteFor={selectedVote} />
      )}
    </>
  );
};

export default Vote;
