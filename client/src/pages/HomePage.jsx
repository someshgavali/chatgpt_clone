import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import JavascriptSharp from "@mui/icons-material/JavascriptSharp";
import Image from "@mui/icons-material/Image";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varient="h5">
                TEXT SUMMARY
              </Typography>
              <Typography varient="h6">
                Summarize Long Text To Short Sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* Box 2 */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varient="h5">
                PARAGRAPH
              </Typography>
              <Typography varient="h6">
                Generate Paragraph With Words
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* Box 3 */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varient="h5">
                ChatBot
              </Typography>
              <Typography varient="h6">
                Generate Paragraph With Words
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* Box 4 */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Javascript Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <JavascriptSharp
              sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varient="h5">
                JS CONVERTER
              </Typography>
              <Typography varient="h6">Translate To Javascript Code</Typography>
            </Stack>
          </Card>
        </Box>
        {/* Box 5 */}
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCIFI Image
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <Image sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varient="h5">
                Scifi Image
              </Typography>
              <Typography varient="h6">Genarate Your Scifi Images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
