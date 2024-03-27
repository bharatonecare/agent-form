import React from "react";
import "./SimpleInput.css";
// import { useTranslation } from "react-i18next";

const SimpleInput = (props) => {
  const inValid =
    props.input.validation(props.state?.value) === false &&
    props.state?.isTouched === true;
  const isDisable = props.disabled ? true : false;
  // const { i18n, t } = useTranslation(["translation"]);

  // console.log(props.disabled);

  return (
    <div className="simple-input d-blocks mb-3">
      <label
        htmlFor={props.input.title}
        className="form-label d-flex mb-1 ms-1"
      >
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type={props.input.type}
        name={props.input.title}
        placeholder={props.input.placeholder}
        value={props.state?.value || ""}
        disabled={props.input.disabled === true || isDisable ? true : false}
        onBlur={(event) => {
          props.handleTouch(props.input.title);
        }}
        onChange={(event) => {
          props.handleChange(props.input.title, event.target.value);
        }}
        className="form-control simple-field"
        // disabled={isDisable}
      ></input>
      {inValid && (
        <p
          className="validate-text text-danger mb-0 ms-1"
          data-testid="errorElement"
        >
          {props.input.errorELe}
        </p>
      )}
    </div>
  );
};

export default SimpleInput;
