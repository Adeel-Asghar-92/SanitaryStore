import React from "react";
import { Input, Label, FormFeedback, FormGroup } from "reactstrap";
export const TextInput = (props) => {
  const {
    type,
    name,
    label,
    value,
    error,
    placeHolder,
    onChange,
    LbClass,
    inputClass,
  } = props;
  return (
    <div>
      <FormGroup className="row ">
        <Label className={LbClass} htmlFor={name}>
          {label}
        </Label>
        <div className={inputClass}>
          <Input
            type={type}
            className="form-control"
            name={name}
            value={value}
            placeHolder={placeHolder}
            onChange={onChange}
            invalid={error}
          />
          <FormFeedback>{error} </FormFeedback>
        </div>
      </FormGroup>
    </div>
  );
};
