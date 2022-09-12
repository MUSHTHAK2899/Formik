import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import CheckBoxGroup from "./CheckBoxGroup";
import Select from "./Select";
import Textarea from "./Textarea";
import DatePicker from "./DatePicker";
import CInput from "../Chakkara Ui/CInput";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
     return <Radio {...rest}/>
    case "checkbox":
      return <CheckBoxGroup {...rest}/>
    case "date":
     return <DatePicker {...rest}/>
    case 'CInput':
      return <CInput {...rest}/>
    default:
      return null;
  }
};

export default FormikControl;
