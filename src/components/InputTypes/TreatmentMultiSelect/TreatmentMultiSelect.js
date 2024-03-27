import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import "./TreatmentMultiSelect.css";
import React, { useState } from "react";


const TreatmentMultiSelect = (props) => {
  const inValid =
    !props.input?.validation(props.state?.value) &&
    props.state?.isTouched === true;
  const arraySelect = ["option 1", "option 2", "option 3"];
  const optionArray = props.item.selectedDoctors?.map((ele) => {
    return { label: ele.name, id: ele.id };
  });


  const renderTags = (value, getTagProps) =>
    value.map((option, index) => (
      <Chip
        key={index}
        label={option.label}
        variant="outlined"
        // size="small"
        {...getTagProps({ index })}
        // Add your custom styles for chips here
        style={{
          backgroundColor: "white",
          // marginRight: 5,
          borderColor: "#3478F6",
        }}
      />
    ));

  return (
    <div className="multi-select-box mt-lg-3 ms-lg-3 me-lg-3 m-2 overflow-auto">
      <Autocomplete
        className="multiple-select-field"
        multiple
        // limitTags={4}
        id="multiple-limit-tags"
        isOptionEqualToValue={(option, value) => option.id === value.id}
        options={props.options}
        // getOptionLabel={(option) => option.label}
        defaultValue={[]}
        value={optionArray}
        onChange={(event, input) => {
          props.handleChange(
            props.item.speciality,
            props.item.description,
            input
          );
        }}
        // value={props.state?.value} // set the selected options
        // onChange={(event, newValue) => {
        //   props.handleChange(props.input?.title, newValue);
        // }} // handle change event
        renderTags={renderTags} // Use custom rendering for tags
        renderInput={(params) => (
          <TextField
            placeholder="Select options"
            {...params}
            className="multi-select-component"
          />
        )}
      />
      {inValid && (
        <p
          data-testid="errorElement"
          className="validate-text text-danger mb-0 ms-1"
        >
          please Select at least one element
        </p>
      )}
    </div>
  );
};

export default TreatmentMultiSelect;
