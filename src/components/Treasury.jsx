import React from "react";

const AssetsData = [
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    name: "Assets Name 1",
    tokenValue: "23.32 TOKEN",
    amount: "2121.23",
    upDownValue: "+11(2121.23)",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    name: "Assets Name 2",
    tokenValue: "23.32 TOKEN",
    amount: "2121.23",
    upDownValue: "-11(2121.23)",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    name: "Assets Name 3",
    tokenValue: "23.32 TOKEN",
    amount: "2121.23",
    upDownValue: "+11(2121.23)",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    name: "Assets Name 4",
    tokenValue: "23.32 TOKEN",
    amount: "2121.23",
    upDownValue: "-11(2121.23)",
  },
  {
    image: "https://mdbootstrap.com/img/new/standard/city/047.jpg",
    name: "Assets Name 5",
    tokenValue: "23.32 TOKEN",
    amount: "2121.23",
    upDownValue: "+11(2121.23)",
  },
];
const Treasury = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-5 font-bold max-w-2xl text-3xl text-gray-50">
          <h1>Treasury</h1>
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
              Assets
            </li>
            {AssetsData.map((data) => (
              <li
                className="flex flex-row justify-between py-2 px-4 w-full border-b  border-gray-600"
                style={{ borderColor: "#2d2d2d" }}
              >
                <div className="flex flex-row">
                  <img
                    src={data.image}
                    class=" h-10 w-10 rounded-full self-center"
                    alt=""
                  />
                  <div className="mx-3 flex flex-col">
                    <span>{data.name}</span>
                    <p className="font-normal text-gray-400 text-sm">
                      {data.tokenValue}
                    </p>
                  </div>
                </div>
                <div className="mx-3 flex flex-col items-end">
                  <span>${data.amount}</span>
                  <p
                    className={`font-normal ${
                      data.upDownValue.charAt(0) === "+"
                        ? "text-green-500"
                        : "text-red-500"
                    } text-sm`}
                  >
                    {data.upDownValue}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Treasury;
