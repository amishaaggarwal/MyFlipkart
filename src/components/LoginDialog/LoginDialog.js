import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase-config";
import "./LoginDialog.scss";
import { setLoggedIn } from "redux/actions/loginActions";
import { useDispatch } from "react-redux";

const loginInitialValues = {
  email: "",
  password: "",
};

const signupInitialValues = {
  email: "",
  password: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};
function LoginDialog({ open, setOpen }) {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const dispatch = useDispatch();
  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    try {
      let response = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.password
      );
      dispatch(setLoggedIn(response.user.email));
    } catch (e) {
      console.log(e.message);
    }
    handleClose();
  };

  const signupUser = async () => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        signup.email,
        signup.password
      );
      toggleAccount(accountInitialValues.login);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        minWidth: "400px",
        maxWidth: "90%",
        minHeight: "200px",
        maxHeight: "90vh",
        borderRadius: "0px",
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", right: "0" }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className="dialog-component">
        <Box className="d-flex">
          <div className="dialog-image">
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
            <div>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                alt="loginImg"
              />
            </div>
          </div>
          {account.view === "login" ? (
            <Box className="login">
              <TextField
                onChange={(e) => onValueChange(e)}
                name="email"
                label="Enter Email/Mobile number"
                defaultValue={loginInitialValues.email}
                variant="standard"
              />
              {error && (
                <Typography className="error">
                  Please enter valid Email ID/Mobile number
                </Typography>
              )}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                type="password"
                defaultValue={loginInitialValues.password}
                label="Enter Password"
                variant="standard"
              />
              <Typography
                className="small-text"
                sx={{ marginTop: "20px", marginBottom: "10px" }}
              >
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                className="loginbtn"
                onClick={() => loginUser()}
                sx={{ backgroundColor: "#fb641b", color: "white" }}
              >
                Login
              </Button>
              <Typography
                className="small-text"
                style={{ textAlign: "center", margin: "10px 0px" }}
              >
                OR
              </Typography>
              <Button className="requestbtn">Request OTP</Button>
              <Typography
                className="createText"
                onClick={() => toggleSignup()}
                sx={{ margin: "50px 0px 10px 0px" }}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className="login">
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                type="password"
                label="Enter Password"
                variant="standard"
              />

              <Button
                className="loginbtn"
                variant="contained"
                onClick={() => signupUser()}
                sx={{ backgroundColor: "#fb641b", marginTop: "20px" }}
              >
                Continue
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
