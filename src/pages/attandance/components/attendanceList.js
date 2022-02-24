import React from "react";
import { Box, Typography } from "@mui/material";

function AttendanceList(props) {
  const { attendances } = props;
  const renderAttendance = () => {
    return attendances.map((attendance) => (
      <Box display="flex" borderBottom="1px solid #DFE0EB" padding="12px 0">
        <Typography>{attendance.tanggal}</Typography>
        <Typography ml="32px">{attendance.checkIn}</Typography>
        <Typography ml="96px">{attendance.checkOut}</Typography>
        <Typography ml="auto" mr="20px" width="65px">
          {attendance.status}
        </Typography>
      </Box>
    ));
  };
  return <div>{renderAttendance()}</div>;
}

export default AttendanceList;
