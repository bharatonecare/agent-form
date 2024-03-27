import React from 'react'
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const DisabledAutoComplete = ({ disabledValue }) => {

  const fixedOptions = disabledValue;
  console.log(fixedOptions);
  const [value, setValue] = React.useState(fixedOptions);
  const [open, setOpen] = React.useState(false);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      options={disabledValue}
      getOptionLabel={(option) => option.title}
      open={open}
      disabled
      onInputChange={(event, newInputValue) => {
        setOpen(false); // Disables the options display
      }}

      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{ width: 500, overflow: 'auto' }}
      renderInput={(params) => (
        <TextField {...params} label="" placeholder="" />
      )}
    />
  );
}


export default DisabledAutoComplete