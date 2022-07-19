import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { MESSAGE_REQUIRED, TITLE_REQUIRED } from "../constants/errorConstants";

export const Create = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required(TITLE_REQUIRED),
    message: Yup.string().required(MESSAGE_REQUIRED),
  });
  return (
    <>
      <div
        className="mx-auto mt-5 block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-100"
        style={{ borderColor: "#2d2d2d" }}
      >
        <p className="font-normal text-gray-400">
          You need to be an author of the space in order to submit a proposal.
        </p>
      </div>
      <div>
        <Formik
          initialValues={{
            title: "",
            message: "",
            discussion: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            // setFieldValue,
            handleSubmit,
            // isSubmitting,
          }) => (
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
                className=" border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
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
                className="block p-2.5 w-full mx-auto max-w-2xl text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 text-black"
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
                className=" border mx-auto max-w-2xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
                placeholder="https://forum.balancer.fi/proposal"
              />
              <button
                type="submit"
                className="mx-auto mt-5 block px-4 py-2 m-2 max-w-2xl rounded-full border shadow-md hover:bg-gray-100 text-white hover:text-black"
              >
                Create Proposal
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};