import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "../../config/axios.js";
import { useSelector } from "react-redux";

import AttendanceList from "./components/attendanceList";
import PaginationHandler from "./components/paginationHandler";
import ManageAttendances from "./components/manageAttendances";

import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import picture from "./components/logo192.png";

function Attendance() {
  // const { id } = useSelector((state) => {
  //   return state.auth;
  // });
  const userId = 1;

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

  const [filteredAttendances, setFilteredAttendances] = useState([]);
  const [sortedAttendances, setSortedAttendances] = useState([]);

  const fetchAttendances = async () => {
    try {
      const res = await axios.get(`/attandances/${userId}`);
      const { data } = res;
      setAttendances(data[0]);
      setFilteredAttendances(data[0]);
      setSortedAttendances(data[0]);
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

  const filterAttendances = (formData) => {
    const result = attendances.filter((attendance) => {
      return attendance.status.includes(formData.status);
    });

    setPagination({
      ...pagination,
      page: 1,
      lastPage: Math.ceil(result.length / pagination.itemsPerPage),
    });
    setFilteredAttendances(result);
    setSortedAttendances(result);
  };
  const sortAttendances = (value) => {
    const data = [...filteredAttendances];

    switch (value) {
      case "a-z":
        data.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
        break;
      case "z-a":
        data.sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal));
        break;
    }
    setSortedAttendances(data);
  };

  return (
    <Box display="flex">
      <Box className="profile" textAlign="center">
        <Box>
          <img src={picture} alt="LOGO" width="56px"></img>
          <Typography fontWeight="bold">{attendances[0].fullName}</Typography>
          <Typography>{attendances[0].email}</Typography>
        </Box>
        <Box mt="32px">
          <Typography mb="20px">Dashboard</Typography>
          <Typography mb="20px">Attendance List</Typography>
          <Typography> My Profile</Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="5px"
        >
          <Typography fontSize="26px" fontWeight="bold">
            Attendance List
          </Typography>
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
            <Typography
              fontSize="24px"
              fontWeight="bold"
              padding="8px 0 0 20px"
            >
              Your Attendance
            </Typography>
            <Box display="flex">
              {/* <Select></Select> */}
              <ManageAttendances
                filterAttendances={filterAttendances}
                sortAttendances={sortAttendances}
              />
            </Box>
          </Box>
          <Box
            className="column"
            display="flex"
            mt="32px"
            borderBottom="1px solid #DFE0EB"
            color="#9FA2B4"
          >
            <Typography ml="24px" fontSize="18px" paddingBottom="8px">
              Tanggal
            </Typography>
            <Typography ml="72px" fontSize="18px" paddingBottom="8px">
              {" "}
              Check In
            </Typography>
            <Typography ml="72px" fontSize="18px" paddingBottom="8px">
              Check Out
            </Typography>
            <Typography ml="auto" mr="80px" fontSize="18px" paddingBottom="8px">
              Status
            </Typography>
          </Box>
          <AttendanceList
            attendances={sortedAttendances}
            pagination={pagination}
          />
          <PaginationHandler
            pagination={pagination}
            setPagination={setPagination}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Attendance;
