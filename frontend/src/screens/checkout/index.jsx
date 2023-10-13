import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
  CircularProgress
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Checkout() {

  let navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true)

  const handleIfrmeLoad = () => setLoading(false);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          py: "70px",
          "@media (max-width: 450px)": {
            py: "30px",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
        >
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            my: "50px",
            color: "#6d6d6d",
          }}
        >
          Registation Form
        </Typography>

        <Paper
          sx={{
            p: 4,
            mt: "20px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
            {
                loading?
            <CircularProgress  sx={{
            position:"absolute",
            left: 0,
            right: 0,
            top: "700px",
            margin: "0 auto",
            zIndex:1000
            }}/>:""}
            <iframe
              src="https://register.xlri.ac.in/public-form?formId=FORM-DYN-2023-7XUS2Z"
              width="100%"
              height="1000px"
              title="XLRI Website"
              frameborder="0"
              border="0"
              onLoad={handleIfrmeLoad}
            ></iframe>
        </Paper>
      </Container>
    </>
  );
}
