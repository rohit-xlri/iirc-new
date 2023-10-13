import React,{useState} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginDialogBox({ open, setOpen }) {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (creds.email === "welcome@xlri" && creds.password === "Admin1234") {
        localStorage.setItem("adminAuth", "authenticate");
        setOpen(false)
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode === 13) {
      loginHandler(e);
    }
  }

  return (
    <>
      <Dialog sx={{ backdropFilter:"blur(10px)"}} open={open}>
        <DialogTitle sx={{fontSize:"28px"}} textAlign={"center"}>Login</DialogTitle>
        <DialogContent>
          <TextField
            id="email"
            type="text"
            label="Enter your  Email"
            placeholder="Email"
            value={creds.email || ""}
            onChange={handleChange}
            sx={{
              mt: 2,
              width: "100%",
            }}
          />
          <FormControl
            variant="outlined"
            sx={{
              mt: 2,
              width: "100%",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              placeholder="*****"
              type={showPassword ? "text" : "password"}
              value={creds.password || ""}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{display:"flex", justifyContent:"center", pb:"20px"}}>
          <Button variant="contained" color="info" onClick={loginHandler}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
