import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  phNumber: [""],
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

const YoutubeForm3 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col w-[500px] h-[600px] ml-10 mt-5">
        <div className=" block w-[400px] py-3 text-[14px] leading-5 text-[#555] bg-white rounded-md  ">
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

        <div className="block w-[400px] py-3 text-[14px] leading-5 text-[#555] bg-white rounded-md  ">
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
          <label className="font-bold flex text-[#555]" htmlFor="channel">
            Channel
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="channel"
            name="channel"
            placeholder="Youtube Channel Name"
          />
          <ErrorMessage name="channel" />
        </div>

        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="comment">
            Comment
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            as="textarea"
            id="comment"
            name="comment"
          />
        </div>

        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="address">
            Address
          </label>
          <FastField name="address">
            {(props) => {
              const { filed, form, meta } = props;
              return (
                <div>
                  <input
                    className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
                    type="text"
                    id="address"
                    {...filed}
                  />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>

        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="facebook">
            Facebook Profile
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="facebook"
            name="socail.facebook"
          />
        </div>

        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="twitter">
            Twitter Profile
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="twitter"
            name="socail.twitter"
          />
        </div>

        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="Landline">
            Landline Number
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="landline"
            name="phoneNumber[0]"
          />
        </div>
        <div>
          <label className="font-bold flex  text-[#555]" htmlFor="mobileNo">
            Mobile Number
          </label>
          <Field
            className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7 "
            type="text"
            id="mobileNO"
            name="phoneNumber[1]"
          />
        </div>

        

        <button type="submit" className="mr-[100px] border-2">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm3;
