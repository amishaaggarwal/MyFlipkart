import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.scss";

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const navigate = useNavigate();
  const shopNow = () => {
    navigate("/");
  };
  return (
    <Box className="component">
      <Box className="container">
        <img src={imgurl} className="image" alt="" />
        <h3>Your cart is empty!</h3>
        <span>Add items to it now.</span>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={shopNow}
        >
          Shop Now!
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
