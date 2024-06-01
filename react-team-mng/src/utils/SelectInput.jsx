import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


export default function SelectInput({handleChange, value, name, options, label, color, backgroundColor}) {
  return (
    <Box sx={{ minWidth: 120, backgroundColor: backgroundColor, height: "5vh", alignContent: 'center'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{color}}>{label}</InputLabel>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
          }}
          labelId="none"
          name= {name}
          id={name}
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
          <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
        </FormControl>
    </Box>
  );
}
