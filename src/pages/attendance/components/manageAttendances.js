import React from "react";
import { useState } from "react";
import { Box, Select, FormControl, MenuItem, InputLabel } from "@mui/material";

function ManageAttendances(props) {
  const { filterAttendances } = props;
  const [formState, setFormState] = useState({ status: "" });

  const filterHandler = (e) => {
    setFormState({ status: e.target.value });
    filterAttendances({ status: e.target.value });
  };
  const sortHandler = (e) => {
    props.sortAttendances(e.target.value);
  };

  return (
    <Box display="flex">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          disableUnderline
          name="sortBy"
          onChange={sortHandler}
          label="Sort"
        >
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="A-Z">A-Z</MenuItem>
          <MenuItem value="z-a">Z-A</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          disableUnderline
          name="status"
          value={formState.status}
          onChange={filterHandler}
          label="Filter"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="On Time">On Time</MenuItem>
          <MenuItem value="Late">Late</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ManageAttendances;
