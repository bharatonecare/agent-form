import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const SearchableSelect = (props) => {
  console.log(props.input);
  const inValid =
    !props.input?.validation(props.state?.value) &&
    props.state?.isTouched === true;

  //   const getOptionLabel = (option) => option.label || "";

  //   const handleInputChange = (newInputValue) => {
  //     {
  //       // Handle the onKeyDown event here
  //       const newOption = { value: newInputValue, label: newInputValue };

  //       // Check if the new input value already exists in the options
  //       const isOptionExists = options.some(
  //         (option) =>
  //           getOptionLabel(option).toLowerCase() === newOption.label.toLowerCase()
  //       );

  //       // If the option doesn't exist, add it to the options list and update state
  //       if (!isOptionExists) {
  //         setOptions([...options, newOption]);
  //         setOptionData([...options, newOption]);
  //         // setSelectedOptions([...selectedOptions, newOption]); // Update selected options
  //         setSelectedArray([...selectedArray, newOption]);
  //         props.handleChange(props.input?.title, [...selectedArray, newOption]);
  //       }
  //     }
  //   };

  // console.log('::::', options);

  return (
    <div className="multi-select-box  mb-3">
      <p className="form-label d-flex mb-1 ms-1">
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </p>
      <Autocomplete
        className="multiple-select-field"
        style={{ background: "#F5F7F9", marginBottom: "5px" }}
        multiple={props.input.multiple}
        onBlur={() => {
          props.handleTouch(props.input?.title);
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        id="multiple-limit-tags"
        disabled={props.input.disabled === true ? true : false}
        options={props.input.options}
        // getOptionLabel={(option) => option.label}
        value={props.state?.value || ""}
        onChange={(event, newValue) => {
          props.handleChange(props.input?.title, newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

      {inValid && (
        <p className="validate-text text-danger mb-0 ms-1">
          {props.input.errorELe}
        </p>
      )}
    </div>
  );
};

export default SearchableSelect;
