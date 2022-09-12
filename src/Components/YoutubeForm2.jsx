import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validationSchema = yup.object({
  name: yup.string().required(<div className="text-red-600">Required</div>),
  email: yup.string().email("Invalid Email Format").required("Required"),
  channel: yup.string().required("Required"),
});
const onSubmit = (values) => {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
};

const YoutubeForm2 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col w-[500px] h-[600px] ml-10 mt-5">
        <div className=" block w-[400px] py-3 text-[14px] leading-5 text-gray-500 bg-white rounded-md  ">
          <label className="font-bold flex  " htmlFor="name">
            Name
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name" />
        </div>

        <div className="block w-[400px] py-3 text-[14px] leading-5 text-gray-500 bg-white rounded-md  ">
          <label className="font-bold flex " htmlFor="email">
            Email
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label className="font-bold flex " htmlFor="channel">
            Channel
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit" className="mr-[100px] ">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm2;
