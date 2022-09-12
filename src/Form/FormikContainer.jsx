import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdwonOption = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];

  const radioOption = [
    { key: "option 1", value: "roption1" },
    { key: "option 2", value: "roption2" },
    { key: "option 3", value: "roption3" },
  ];

  const checkBoxOption = [
    { key: "option 1", value: "coption1" },
    { key: "option 2", value: "coption2" },
    { key: "option 3", value: "coption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: " ",
    radioButton: " ",
    checkbox: [],
    date: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required(<div className="text-red-600">Required</div>)
      .email("Invalid Email Format"),
    description: Yup.string().required(
      <div className="text-red-600">Required</div>
    ),
    selectOption: Yup.string().required(
      <div className="text-red-600">Required</div>
    ),
    radioButton: Yup.string().required(
      <div className="text-red-600">Required</div>
    ),
    checkbox: Yup.array().required(
      <div className="text-red-600">Required</div>
    ),
    date: Yup.date()
      .required(<div className="text-red-600">Required</div>)
      .nullable(),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="flex flex-col w-[500px] h-[600px] ml-10 mt-5">
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
