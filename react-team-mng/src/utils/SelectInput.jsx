import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


export default function SelectInput({handleChange, value, name, options, label}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
