import React from "react";
import { Field, ErrorMessage } from "formik";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label className="font-bold flex  ">
        {label}
      </label>
      <Field
        className="block w-[400px] p-2 text-[14px] leading-6 text-[#555] bg-slate-100 bg-none border border-solid rounded-md mb-7"
        name={name}
        {...rest}
      >
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                className="ml-5 "
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className="font-bold ml-1" htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
};

export default Radio;
