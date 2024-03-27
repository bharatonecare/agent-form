import React, { useRef } from "react";
import "./CheckBox.css";

const Checkbox = (props) => {
  const inputRef = useRef();

  const changeHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      const newValue = [...props.state?.value, value];
      props.handleChange(props.input.title, newValue);
    } else {
      const newValue = props.state?.value.filter((ele) => ele !== value);
      props.handleChange(props.input.title, newValue);
    }
  };

  const inValid = props.state?.isTouched && props.state?.value?.length === 0;

  return (
    <div className="radio-box mb-2">
      <p className="d-flex form-label mb-1">
        {props.input.title}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </p>
      <div className="radio-box-content d-flex flex-row justify-content-start border">
        {props.input.checkboxFields.map((ele) => (
          <div key={ele.title} className="form-check mb-2 mt-2">
            <label
              htmlFor={ele.title}
              className="form-check-label ms-2"
              onChange={changeHandler}
              onClick={() => {
                props.handleTouch(props.input.title);
              }}
            >
              <input
                ref={inputRef}
                type={props.input.type}
                id={ele.title}
                name={ele.title}
                checked={
                  props.state?.value.find((item) => item === ele.value) ===
                  undefined
                    ? false
                    : true
                }
                value={ele.value}
                onChange={(event) => {
                  changeHandler(event);
                }}
                className="form-check-input"
              />
              <span className="Checkbox-image">{`         `}</span>

              <p className="label-title"> {ele.title}</p>
            </label>
          </div>
        ))}
      </div>
      {inValid && (
        <p
          data-testid="errorElement"
          className="validate-text text-danger mb-0 ms-1"
        >
          please select at least one option
        </p>
      )}
    </div>
  );
};

export default Checkbox;
