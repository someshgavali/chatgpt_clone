import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Alert,
  Collapse,
  TextField,
  Card,
} from "@mui/material";

const JsConverter = () => {
  const theme = useTheme();

  // media
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  // states

  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // handleSubmit function on form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/js-converter", {
        text,
      });
      setCode(data);
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
        <Typography varient="h3">Js Converter</Typography>

        <TextField
          placeholder="Add Your Text"
          type="text"
          multiline={true}
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="btn" //btn extra style in index.css
          type="submit"
          fullWidth
          varient="contained"
          size="large"
          sx={{ color: "white", mt: 2, backgroundColor: "green" }}
        >
          Convert
        </Button>
        <Typography mt={2}>
          Not This Tool ? <Link to="/">Go Back</Link>
        </Typography>
      </form>

      {code ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "Background.default",
          }}
        >
          <pre>
            <Typography p={2}>{code}</Typography>
          </pre>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "Background.default",
            overflow: "auto",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Your Code Will Appear Here
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default JsConverter;
