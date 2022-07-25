import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MESSAGE_REQUIRED, TITLE_REQUIRED } from "../constants/errorConstants";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const { address, isConnected } = useAccount();
  console.log(address, isConnected);

  const navigate = useNavigate();
  const validationSchema = Yup.object({
    title: Yup.string().required(TITLE_REQUIRED),
    message: Yup.string().required(MESSAGE_REQUIRED),
  });

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/create-vote");
  };

  return (
    <>
      <div
        className="md:mx-auto mt-5 block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-100 sm:mx-5"
        style={{ borderColor: "#2d2d2d" }}
      >
        <p className="font-normal text-gray-400">
          You need to be an author of the space in order to submit a proposal.
        </p>
      </div>
      <div className="px-5">
        <Formik
          initialValues={{
            title: "",
            message: "",
            discussion: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="block mt-10 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                value={values.title}
                aria-describedby="helper-text-explanation"
                className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Any Title"
              />
              <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                {errors.title && touched.title && errors.title}
              </div>
              <label
                htmlFor="message"
                className=" mt-10 block  mb-2 text-sm font-medium text-gray-400 mx-auto max-w-2xl "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                value={values.message}
                onChange={handleChange}
                className="bg-transparent block p-2.5 w-full mx-auto max-w-2xl text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
              />
              <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                {errors.message && touched.message && errors.message}
              </div>
              <label
                htmlFor="discussion"
                className="block mt-10 mx-auto max-w-2xl text-sm font-normal text-gray-400 mb-2"
              >
                Discussion(Optional)
              </label>
              <input
                type="text"
                id="discussion"
                name="discussion"
                value={values.discussion}
                onChange={handleChange}
                aria-describedby="helper-text-explanation"
                className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="https://forum.balancer.fi/proposal"
              />
              {isConnected && (
                <div className="mx-auto block max-w-2xl mt-5">
                  <button
                    type="submit"
                    className="mt-5 px-4 py-2 rounded-lg border shadow-md hover:bg-gray-100 text-white hover:text-black"
                  >
                    Next
                  </button>
                </div>
              )}
              {!isConnected && (
                <div className="block mt-10 mx-auto max-w-2xl text-sm font-normal">
                  <ConnectButton />
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
