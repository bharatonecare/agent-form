import React, { useState } from "react";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import "./FilterMultiSelect.css";
import { RxCrossCircled } from "react-icons/rx";
import SearchIcon from "@mui/icons-material/Search";

const FilterMultiSelect = (props) => {
  //   const inValid =
  //     !props.input?.validation(props.state?.value) &&
  //     props.state?.isTouched === true;
  //   const optionArray = props.item.selectedDoctors?.map((ele) => {
  //     return { label: ele.name, id: ele.id };
  //   });

  const renderTags = (value, getTagProps) =>
    value.map((option, index) => (
      <Chip
        key={index}
        label={option}
        variant='outlined'
        // size="small"
        {...getTagProps({ index })}
        // Add your custom styles for chips here
        style={{
          backgroundColor: "white",
          // marginRight: 5,
          borderColor: "black",
        }}
        deleteIcon={
          <RxCrossCircled
            className='custom-delete-icon'
            style={{ color: "black" }}
          />
        }
        onDelete={() =>
          props.onSelect(
            value.filter((v) => v !== option),
            props.category
          )
        }
      />
    ));

  return (
    <div className='filter-multi-select-container'>
      <Autocomplete
        multiple
        limitTags={4}
        id='multiple-limit-tags'
        // freeSolo
        // disablePortal
        popupIcon={<SearchIcon />}
        sx={{
          [`& .${autocompleteClasses.popupIndicator}`]: {
            transform: "none",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: props.size === "small" ? "0" : "5px",
            "& fieldset": {
              borderColor: "black", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#EF5EA2", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#EF5EA2", // Border color when focused
            },
          },
        }}
        options={props.options}
        getOptionLabel={(option) => option}
        // defaultValue={[indianCities[13], indianCities[12], indianCities[11]]}
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField
            {...params}
            label=''
            placeholder={props.hospital ? "Search Hospital" : "Search Location"}
            {...(props.size === "small" && {
              size: "small",
            })}
            sx={{
              maxHeight: 100, // Set the maximum height for the TextField
              overflowY: "auto",
              marginLeft: props.size === "small" ? "1rem" : "0",
            }}
          />
        )}
        value={props.value || []}
        onChange={(event, value) => props.onSelect(value, props.category)}

        // sx={{  }}
      />
      {/* {inValid && (
        <p
          data-testid="errorElement"
          className="validate-text text-danger mb-0 ms-1"
        >
          please Select at least one element
        </p>
      )} */}
    </div>
  );
};

export default FilterMultiSelect;
