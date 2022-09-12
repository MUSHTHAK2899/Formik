import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <div className=" block w-[400px] py-3 text-[14px] leading-5 text-gray-500 bg-white rounded-md  ">
        <label className="font-bold flex  " htmlFor={name}>
          {label}
        </label>
        <Field
          className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
          as="select"
          id={name}
          name={name}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Select;
