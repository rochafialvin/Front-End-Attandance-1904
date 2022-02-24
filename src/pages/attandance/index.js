import React from "react";

import "./style.css";
import AttendanceList from "./components/attendanceList";
import picture from "./components/logo192.png";
import { useState } from "react";
import { Box, Container, Select } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

function AttandanceList() {
  const [attendances, setAttendances] = useState([
    {
      tanggal: "May 26, 2022",
      checkIn: "09:10",
      checkOut: "18:00",
      status: "On Time",
    },
    {
      tanggal: "May 27, 2022",
      checkIn: "09:45",
      checkOut: "18:00",
      status: "Late",
    },
    {
      tanggal: "May 28, 2022",
      checkIn: "09:00",
      checkOut: "18:00",
      status: "On Time",
    },
  ]);
  return (
    <Box display="flex">
      <Box className="profile" textAlign="center">
        <Box>
          <img src={picture} alt="LOGO" width="56px"></img>
          <Typography fontWeight="bold">Bob Lightning</Typography>
          <Typography>JCWD1902-001</Typography>
        </Box>
        <Box mt="32px">
          <Box mb="20px">Dashboard</Box>
          <Box mb="20px">Attendance List</Box>
          <Box> My Profile</Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="5px"
        >
          <Box fontSize="20px">Attendance List</Box>
          <Button variant="outlined" color="error">
            Logout
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid #DFE0EB",
            borderRadius: "5px",
            marginTop: "10px",
            padding: "20px 25px",
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography>Your Attendance</Typography>
            <Box>
              <Select></Select>
              <Select></Select>
            </Box>
          </Box>
          <Box
            className="column"
            display="flex"
            mt="32px"
            borderBottom="1px solid #DFE0EB"
          >
            <Typography>Tanggal</Typography>
            <Typography ml="72px"> Check In</Typography>
            <Typography ml="72px">Check Out</Typography>
            <Typography ml="auto" mr="40px">
              Status
            </Typography>
          </Box>
          <AttendanceList attendances={attendances} />
          <Box textAlign="right" paddingTop="120px" color="#DFE0EB">
            1-5 of 20
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AttandanceList;
