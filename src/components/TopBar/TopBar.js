import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../flipkart-logo.png";
import Paper from "@mui/material/Paper";
import { lightBlue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./TopBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginDialog from "components/LoginDialog/LoginDialog";
import { getUser, setLoggedIn } from "redux/actions/loginActions";
import { auth } from "firebase-config";
import { signOut } from "firebase/auth";
import { getCartItems } from "redux/actions/cartActions";

function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartSize, setCartSize] = useState(0);
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.loggedIn);
  const cart_list = useSelector((state) => state.cart.cart_items);
  const goToCart = () => {
    navigate("/cart");
  };
  useEffect(() => {
    dispatch(getUser());
    dispatch(getCartItems());
    setCartSize(cart_list.length);
  }, [cart_list.length, dispatch]);

  const openLoginDialog = () => {
    setOpen(true);
  };
  const handleLogout = async () => {
    dispatch(setLoggedIn(""));
    localStorage.removeItem("authToken");
    await signOut(auth);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" sx={{ padding: "0px 124px" }}>
        <Toolbar className="topbar">
          <div className="inline">
            <div className="logo-container">
              <img src={logo} className="logo" alt="Flipkart" />
              <div className="inline explore-plus">
                <Link to="/">
                  Explore
                  <span>Plus</span>
                  <img
                    width="10px"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                    alt="Plus"
                  ></img>
                </Link>
              </div>
            </div>
            <Paper
              component="form"
              sx={{
                p: "0 16px",
                fontSize: "14px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                minWidth: "304px",
                margin: "auto 10px",
              }}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  borderRadius: "0px",
                  minWidth: "304px",
                  width: "calc(100% - 540px)",
                }}
                placeholder="Search for products, brands and more"
                inputProps={{
                  "aria-label": "Search for products, brands and more",
                }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ color: lightBlue[400] }} />
              </IconButton>
            </Paper>
          </div>
          <div className="inline">
            {user ? (
              <Button
                variant="loginBtn"
                sx={{
                  "&.MuiButton-loginBtn": {
                    color: "#2874f0",
                    fontWeight: 500,
                    backgroundColor: "#fff",
                    borderRadius: "0px",
                    height: "32px",
                    padding: "5px 40px",
                  },
                }}
                className="btn"
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="loginBtn"
                sx={{
                  "&.MuiButton-loginBtn": {
                    color: "#2874f0",
                    fontWeight: 500,
                    backgroundColor: "#fff",
                    borderRadius: "0px",
                    height: "32px",
                    padding: "5px 40px",
                  },
                }}
                className="btn"
                onClick={() => openLoginDialog()}
              >
                Login
              </Button>
            )}
            <Button
              className="btn"
              variant="outlined"
              size="medium"
              sx={{
                "&.MuiButton-outlined": {
                  color: "white",
                  fontWeight: 500,
                },
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              More
            </Button>
            <Button
              variant="outlined"
              className="btn"
              size="medium"
              sx={{
                "&.MuiButton-outlined": {
                  color: "white",
                  fontWeight: 500,
                },
              }}
              onClick={goToCart}
              endIcon={
                <Badge badgeContent={cartSize} color="error">
                  <ShoppingCartIcon />
                </Badge>
              }
            >
              Cart
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

export default TopBar;
