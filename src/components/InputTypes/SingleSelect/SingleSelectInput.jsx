import React from "react";
import "./SingleSelectInput.css";

const SingleSelectInput = (props) => {
  return (
    <div className="multi-select-box selection-gender">
      <label htmlFor={props.input.title} className="form-label d-flex mb-2">
        {props.input.title}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select
        id={props.input.title}
        // value={props.state.value}
        onChange={(event) => {
          props.handleChange(props.input.title, event.target.value);
        }}
        onBlur={(event) => {
          props.handleTouch(props.input.title);
          props.handleChange(props.input.title, event.target.value);
        }}
        className="form-control simple-field form-select form-select-sm p-2"
        aria-label=".form-select-sm example"
      >
        {props.input.options.map((ele) => {
          return (
            <option
              className="multi-select-component"
              value={ele.value}
              key={ele.value}
            >
              {ele.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SingleSelectInput;
