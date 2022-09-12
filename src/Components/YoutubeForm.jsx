import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
   console.log('form visited' ,formik.touched)
  return (
    <div className="">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-[500px] h-[600px] ml-10 mt-5"
      >
        <div className=" block w-[400px] py-3 text-[14px] leading-5 text-gray-500 bg-white rounded-md  ">
          <label className="font-bold flex  " htmlFor="name">
            Name
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
            type="text"
            id="name"
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="block w-[400px] py-3 text-[14px] leading-5 text-gray-500 bg-white rounded-md  ">
          <label className="font-bold flex " htmlFor="email">
            Email
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
            type="email"
            id="email"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label className="font-bold flex " htmlFor="channel">
            Channel
          </label>
          <input
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="channel"
            name="channel"
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="text-red-500">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit" className="mr-[100px] ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
