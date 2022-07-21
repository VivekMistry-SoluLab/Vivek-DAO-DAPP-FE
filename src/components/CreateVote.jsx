import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  CHOICE1_REQUIRED,
  CHOICE2_REQUIRED,
} from "../constants/errorConstants";
import "react-datepicker/dist/react-datepicker.css";
const CreateVote = () => {
  const date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(date.setDate(date.getDate() + 5))
  );
  const validationSchema = Yup.object({
    choice1: Yup.string().required(CHOICE1_REQUIRED),
    choice2: Yup.string().required(CHOICE2_REQUIRED),
  });

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <>
        <div>
          <Formik
            initialValues={{
              choice1: "",
              choice2: "",
              choice3: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) =>
              handleSubmit({ ...values, startDate, endDate })
            }
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <ul
                  className="mx-auto max-w-xl mt-5 text-lg font-medium text-gray-900  rounded-lg border border-gray-600 text-white"
                  style={{ borderColor: "#2d2d2d" }}
                >
                  <li
                    className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                    style={{ borderColor: "#2d2d2d" }}
                  >
                    Voting
                  </li>
                  <li
                    className="flex flex-row py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
                    style={{ borderColor: "#2d2d2d" }}
                  >
                    <div className="w-full">
                      <label
                        htmlFor="title"
                        className="block mt-5 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
                      >
                        Choice 1
                      </label>
                      <input
                        type="text"
                        id="choice1"
                        name="choice1"
                        onChange={handleChange}
                        value={values.choice1}
                        aria-describedby="helper-text-explanation"
                        className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
                        placeholder="Choice 1"
                      />
                      <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                        {errors.choice1 && touched.choice1 && errors.choice1}
                      </div>
                      <label
                        htmlFor="title"
                        className="block mt-5 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
                      >
                        Choice 2
                      </label>
                      <input
                        type="text"
                        id="choice2"
                        name="choice2"
                        onChange={handleChange}
                        value={values.choice2}
                        aria-describedby="helper-text-explanation"
                        className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
                        placeholder="Choice 2"
                      />
                      <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                        {errors.choice2 && touched.choice2 && errors.choice2}
                      </div>
                      <label
                        htmlFor="title"
                        className="block mt-5 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
                      >
                        Choice 3(Optional)
                      </label>
                      <input
                        type="text"
                        id="choice3"
                        name="choice3"
                        onChange={handleChange}
                        value={values.choice3}
                        aria-describedby="helper-text-explanation"
                        className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 color:black"
                        placeholder="Choice 3 (optional)"
                      />
                      <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                        {errors.choice3 && touched.choice3 && errors.choice3}
                      </div>
                    </div>
                  </li>
                </ul>
                <ul
                  className="mx-auto max-w-xl mt-5 text-lg font-medium text-gray-900  rounded-lg border border-gray-600 text-white"
                  style={{ borderColor: "#2d2d2d" }}
                >
                  <li
                    className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                    style={{ borderColor: "#2d2d2d" }}
                  >
                    Voting Period
                  </li>
                  <li
                    className="flex flex-row py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"
                    style={{ borderColor: "#2d2d2d" }}
                  >
                    <div>
                      <label
                        htmlFor="title"
                        className="block mt-5 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
                      >
                        Start Date
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        locale="pt-BR"
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={15}
                        className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 color:black"
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                        {errors.startDate &&
                          touched.startDate &&
                          errors.startDate}
                      </div>
                    </div>
                    <div className="mx-4">
                      <label
                        htmlFor="title"
                        className="block mt-5 mb-2 mx-auto max-w-2xl text-sm font-normal text-gray-400 "
                      >
                        End Date
                      </label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        locale="pt-BR"
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={15}
                        className="bg-transparent border mx-auto max-w-2xl border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 color:black"
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <div className="block mt-2 mx-auto max-w-2xl text-sm font-normal text-red-500">
                        {errors.endDate && touched.endDate && errors.endDate}
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mx-auto block max-w-2xl mt-5">
                  <button
                    type="submit"
                    className="mt-5 mx-14 px-4 py-2 rounded-lg border shadow-md hover:bg-gray-100 text-white hover:text-black"
                  >
                    Create Proposal
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </>
    </div>
  );
};

export default CreateVote;
