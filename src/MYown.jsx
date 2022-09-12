import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
    email:'',
};
const validationSchema =yup.object({
    email:yup.string().required(<div className="text-red-600">Required</div>).email('Invalid')
});
const onSubmit = (values) => {
    console.log(values);
  alert(JSON.stringify(values, null, 2));
};
const MYown = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
      <div>
      <label>Email</label>
        <Field type='email' name='email'/>
        <ErrorMessage name="email"/>
      </div>
      <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MYown;
