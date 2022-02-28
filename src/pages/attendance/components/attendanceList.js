import React from "react";
import { Box, Typography } from "@mui/material";

function AttendanceList(props) {
  const { attendances, pagination } = props;
  const { page, itemsPerPage } = pagination;

  const renderAttendance = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedAttendances = attendances.slice(startIndex, endIndex);

    return slicedAttendances.map((attendance) => {
      const tanggal = attendance.tanggal.substr(0, 10);
      const checkIn = attendance.checkIn.substr(0, 5);
      const checkOut = attendance.checkOut.substr(0, 5);
      return (
        <Box
          display="flex"
          borderBottom="1px solid #DFE0EB"
          padding="14px 0"
          key={attendance.id}
        >
          <Typography ml="24px">{tanggal}</Typography>
          <Typography ml="56px">{checkIn}</Typography>
          <Typography ml="100px">{checkOut}</Typography>
          <Typography ml="auto" mr="68px" width="65px">
            {attendance.status}
          </Typography>
        </Box>
      );
    });
  };
  return <div>{renderAttendance()}</div>;
}

export default AttendanceList;
