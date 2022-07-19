import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ADDRESS_REQUIRED } from "../constants/errorConstants";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CreateNFT = () => {
  const { address, isConnected } = useAccount();
  console.log(address, isConnected);

  const validationSchema = Yup.object({
    address: Yup.string().required(ADDRESS_REQUIRED),
  });

  return (
    <>
      <div className="mx-auto block max-w-2xl ">
        <div
          className=" mt-5 p-6 mb-10 rounded-lg border shadow-md hover:bg-gray-100"
          style={{ borderColor: "#2d2d2d" }}
        >
          <p className="font-normal text-gray-400">
            You need to be an author of the space in order to submit a proposal.
          </p>
        </div>
        <div>
          <Formik
            initialValues={{
              address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="address"
                  className="mt-10 my-2 text-sm font-normal text-gray-400 "
                >
                  Mint to Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  aria-describedby="helper-text-explanation"
                  className=" border mt-2 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
                  placeholder="Wallet Address"
                />
                <div className="mt-2 text-sm font-normal text-red-500">
                  {errors.address && touched.address && errors.address}
                </div>
                {isConnected && (
                  <div>
                    <button
                      type="submit"
                      className="mt-5 px-4 py-2 rounded-lg border shadow-md hover:bg-gray-100 text-white hover:text-black"
                    >
                      Mint NFT
                    </button>
                  </div>
                )}
                {!isConnected && (
                  <div className="mt-5 text-sm font-normal">
                    <ConnectButton />
                  </div>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateNFT;
