import React, { useState, useEffect } from "react";
import "./PhoneInput.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const PhoneNumberInput = (props) => {
  console.log({ propsInpupt: props.input });
  const inValid =
    props.input.validation(props.state?.value) === false &&
    props.state?.isTouched === true;

  console.log("inValid::::", inValid);

  const [country, setCountry] = useState(props.state?.value?.dialCode);
  const [phone, setPhone] = useState(props.state?.value?.phone);

  useEffect(() => {
    setCountry(props.state?.value?.dialCode);
    setPhone(props.state?.value?.phone);
  }, [props.state]);

  if (props.state?.value?.dialCode && props.state?.value?.phone) {
    console.log("dialCode is::::", country); // Check dialCode
    console.log("phone is::::", phone); // Check phone
  } else {
    console.log("props.state.value is undefined or null");
  }

  return (
    <div
      className="simple-input d-blocks mb-3"
      onBlur={() => props.handleTouch(props.input?.title)}
    >
      <label
        htmlFor={props.input.title}
        className="form-label d-flex mb-1 ms-1"
      >
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>

      <PhoneInput
        inputClass="phone-input-class"
        dropdownClass="phone-dropdown-class"
        buttonClass="phone-button-class"
        // country={props.state?.value?.dialCode || "in"}
        country={country}
        // value={props.state?.value?.phone || ""}
        value={phone}
        disabled={props.input.disabled === true ? true : false}
        placeholder={"Enter a valid phone number"}
        onChange={(value, data) => {
          // setPhone(value);
          // setDialCode(data.dialCode)
          props.handleChange(props.input.title, {
            dialCode: data.dialCode,
            phone: value,
          });
        }}
      />
      {inValid && (
        <p
          className="validate-text text-danger mb-0 ms-1"
          data-testid="errorElement"
        >
          please enter a 10 digit mobile number without country code
        </p>
      )}
    </div>
  );
};
export default PhoneNumberInput;
