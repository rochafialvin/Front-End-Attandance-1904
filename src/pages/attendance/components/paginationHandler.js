import React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function PaginationHandler(props) {
  const { pagination, setPagination } = props;
  const { page, lastPage } = pagination;

  const btnPrevPageHandler = () => {
    setPagination({ ...pagination, page: page - 1 });
  };
  const btnNextPageHandler = () => {
    setPagination({ ...pagination, page: page + 1 });
  };

  return (
    <Box textAlign="right" paddingTop="120px" color="#9FA2B4" position="static">
      {page} of {lastPage}
      <IconButton
        disabled={`${page === 1 ? "true" : ""}`}
        onClick={btnPrevPageHandler}
      >
        <ArrowBackIosNewOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton
        disabled={`${page === lastPage ? "true" : ""}`}
        onClick={btnNextPageHandler}
      >
        <ArrowForwardIosOutlinedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default PaginationHandler;
