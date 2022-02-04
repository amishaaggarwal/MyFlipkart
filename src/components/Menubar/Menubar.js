import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import "./Menubar.scss";

function Menubar() {
  const menu = [
    "Electronics",
    "TV's & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports,Books & More",
    "Flights",
    "Offer Zone",
    "Grocery",
  ];
  return (
    <AppBar
      position="static"
      sx={{ padding: "0px 124px", backgroundColor: "white" }}
      className="menubar-parent"
    >
      <Toolbar className="menubar" sx={{ padding: "0" }}>
        {menu &&
          menu.map((row, i) => (
            <Button
              className="btn menuBtn"
              variant="outlined"
              size="small"
              key={i}
              sx={{
                "&.MuiButton-outlined": {
                  color: "black",
                  fontWeight: "500",
                  border: "none",
                  padding: "0",
                },
              }}
            >
              {row}
              <KeyboardArrowDownIcon
                sx={{ height: "10px", paddingLeft: "0", marginLeft: "0" }}
              />
            </Button>
          ))}
      </Toolbar>
    </AppBar>
  );
}

export default Menubar;
