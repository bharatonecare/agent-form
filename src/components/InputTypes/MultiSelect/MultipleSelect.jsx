import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./MultipleSelect.css";
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";

const MultipleSelect = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(props.input?.options || []);
  const {
    optionData,
    setOptionData,
    selectedArray,
    setSelectedArray,
    setToRun,
    toRun,
  } = props;

  const inValid =
    !props.input?.validation(selectedArray) && props.state?.isTouched === true;

  // useEffect(() => {
  //   setOptions(props.input?.options || []);
  //   setOptionData(options)
  // }, []);

  useEffect(() => {
    // Check if the effect has already run
    if (!toRun) {
      // Run the effect logic
      setOptions(props.input?.options || []);
      setOptionData(options);
      // Set the ref to true to indicate that the effect has run
      setToRun(true);
    }
  }, []); // Empty dependency array ensures the effect runs only once

  const getOptionLabel = (option) => option.label || "";

  const handleInputChange = (newInputValue) => {
    {
      // Handle the onKeyDown event here
      const newOption = { value: newInputValue, label: newInputValue };

      // Check if the new input value already exists in the options
      const isOptionExists = options.some(
        (option) =>
          getOptionLabel(option).toLowerCase() === newOption.label.toLowerCase()
      );

      // If the option doesn't exist, add it to the options list and update state
      if (!isOptionExists) {
        setOptions([...options, newOption]);
        setOptionData([...options, newOption]);
        // setSelectedOptions([...selectedOptions, newOption]); // Update selected options
        setSelectedArray([...selectedArray, newOption]);
        props.handleChange(props.input?.title, [...selectedArray, newOption]);
      }
    }
  };

  // console.log('selectedArray', selectedArray);

  return (
    <div className="multi-select-box  mb-3">
      <label className="form-label d-flex mb-1 ms-1">
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <Autocomplete
        className="multiple-select-field"
        multiple
        onBlur={() => {
          props.handleTouch(props.input?.title);
        }}
        limitTags={4}
        id="multiple-limit-tags"
        options={optionData}
        getOptionLabel={getOptionLabel}
        defaultValue={[]} // Set the default selected options
        value={selectedArray} // Set the selected options
        onChange={(event, newValue) => {
          console.log("Onchage value::::", newValue);
          // setSelectedOptions(newValue);

          // Remove duplicates from the newValue array
          const uniqueValues = newValue.filter(
            (value, index, self) =>
              index === self.findIndex((v) => v.value === value.value)
          );

          setSelectedArray(uniqueValues);
          // Update the local state with the selected options
          props.handleChange(props.input?.title, newValue);
        }} // handle change event
        renderInput={(params) => (
          <TextField
            placeholder="Select options"
            {...params}
            className="multi-select-component"
            //on enter value intakes
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                params.inputProps.value.trim() !== ""
              ) {
                console.log("keyDown:::", params.inputProps.value);
                handleInputChange(params.inputProps.value);
              }
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option.label} {...getTagProps({ index })} />
          ))
        }
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

export default MultipleSelect;
