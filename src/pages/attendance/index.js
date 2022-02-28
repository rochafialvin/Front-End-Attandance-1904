import React from "react";
import "./style.css";
import axios from "../../config/axios.js";
import AttendanceList from "./components/attendanceList";
import PaginationHandler from "./components/paginationHandler";

import { useState, useEffect } from "react";
import { Box, Container, Select, tablePaginationClasses } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import picture from "./components/logo192.png";

function Attandance() {
  const [attendances, setAttendances] = useState([
    {
      fullName: "",
      email: "",
      tanggal: "",
      checkIn: "",
      checkOut: "",
      id: "",
      userId: "",
    },
  ]);
  const [pagination, setPagination] = useState({
    page: 1,
    lastPage: 0,
    itemsPerPage: 5,
  });
  const userId = 1;

  const fetchAttendances = async () => {
    try {
      const res = await axios.get(`/attandances/${userId}`);
      const { data } = res;
      setAttendances(data[0]);
      setPagination({
        ...pagination,
        lastPage: Math.ceil(data[0].length / pagination.itemsPerPage),
      });
    } catch (error) {
      console.log(alert(error.message));
    }
  };

  useEffect(() => {
    fetchAttendances();
  }, []);

  return (
    <Box display="flex">
      <Box className="profile" textAlign="center">
        <Box>
          <img src={picture} alt="LOGO" width="56px"></img>
          <Typography fontWeight="bold">{attendances[0].fullName}</Typography>
          <Typography>{attendances[0].email}</Typography>
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
          <AttendanceList attendances={attendances} pagination={pagination} />
          <PaginationHandler
            pagination={pagination}
            setPagination={setPagination}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Attandance;
