import React from "react";
import { useState } from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

function Filter(props) {
  const { filterAttendances } = props;
  const [formState, setFormState] = useState({ status: "" });

  const handleChange = (e) => {
    setFormState({ status: e.target.value });
    filterAttendances({ status: e.target.value });
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
      <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        disableUnderline
        name="status"
        value={formState.status}
        onChange={handleChange}
        label="Filter"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="On Time">On Time</MenuItem>
        <MenuItem value="Late">Late</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;
