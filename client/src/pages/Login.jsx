import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Alert,
  Collapse,
  TextField,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // media
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  // states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // handleSubmit function on form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography varient="h3">Sign In</Typography>

        <TextField
          label="email"
          required
          margin="normal"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          required
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="btn" //btn extra style in index.css
          type="submit"
          fullWidth
          varient="contained"
          size="large"
          sx={{ color: "white", mt: 2, backgroundColor: "green" }}
        >
          Sign In
        </Button>
        <Typography mt={2}>
          Don't have an Account ? <Link to="/register">Please Register</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
