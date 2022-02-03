import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import "./Menubar.scss";

function Menubar() {
  return (
    <AppBar position="static" sx={{ padding: "0px 124px",backgroundColor:"white" }}>
      <Toolbar
        className="menubar"
      >
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
              padding: "0px",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Electronics
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          TVs &amp; Aplliances
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Men
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Women
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Baby &amp; Kids
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Home &amp; Furniture
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Sports,Books, &amp; More
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Flights
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Offer Zone
        </Button>
        <Button
          className="btn"
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-outlined": {
              color: "black",
              fontWeight: 500,
              border: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ height: "12px" }} />}
        >
          Grocery
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Menubar;
