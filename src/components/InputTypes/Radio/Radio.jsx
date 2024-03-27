import React, { useRef } from "react";
import "./Radio.css";

const Radio = (props) => {
  const inputRef = useRef();
  return (
    <div className="radio-box mb-2">
      <label className="form-label d-flex mb-1 ms-1">
        {props.input.title}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <div className="radio-box-content d-flex flex-row justify-content-start border">
        {props.input.radioFields.map((ele) => (
          <div key={ele.title} className="form-check mb-2 mt-2">
            <label htmlFor={ele.value} className="form-check-label ms-2">
              <input
                type={props.input.type}
                name={ele.value}
                checked={ele.value === props.state?.value}
                value={ele.value}
                id={ele.value}
                onChange={(event) => {
                  props.handleChange(props.input.title, event.target.value);
                }}
                onBlur={() => {
                  props.handleTouch(props.input.title);
                }}
                className="form-check-input"
                ref={inputRef}
              />
              <span
                className="Radio-image"
                onClick={() => {
                  inputRef.current.click();
                }}
              >{`         `}</span>
              <p className="label-title"> {ele.title}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
