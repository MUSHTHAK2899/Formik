import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";

const DatePicker = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="font-bold flex  " htmlFor={name}>
        {label}
      </label>
      <Field
        className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
        name={name}
      >
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChang={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}/>
    </div>
  );
};

export default DatePicker;
