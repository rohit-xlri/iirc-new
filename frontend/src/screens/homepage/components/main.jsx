import { Box, Typography, Stack, Button, Container } from "@mui/material";
import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Zoom from '@mui/material/Zoom';
// import Fade from '@mui/material/Fade';
import './main.css';

export default function Main() {
  return (
    <>
      <Box
      id="home"
        sx={{
          mt: "60px",
          background:
            "linear-gradient(0deg,rgba(0 0 0 / 80%),rgba(27 78 155 / 70%)), url('https://xlri.ac.in/PhotoGallery/LargeImage/Large_201952715193.jpg')",
          minHeight: "calc(100vh - 60px)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
                "@media (max-width: 600px)": {
                  mt:"57px"
                 }
        }}
      >
        <Zoom>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "calc(100vh - 60px)",
          }}
        >
            <Box sx={{ width: "100%", textAlign: "center" }}>
            <img
                style={{ width: "550px", height: "auto", maxWidth: "100%" }}
                src={require("../../../components/assets/iirc-2023-logo.png")}
              alt=""
            />
              {/* <img
              style={{ width: "45%", height: "auto" }}
              src={require("../../../components/assets/poms-logo.png")}
              alt=""
            /> */}
          </Box>
          <Typography sx={{ fontSize: "28px", color: "white",mb:"30px",  "@media (max-width: 900px)": {
                fontSize: "22px",
                "@media (max-width: 550px)": {
                  fontSize: "18px",
                },
              }, }}>
              International Industrial Relations Conference 2024
          </Typography>
          {/* <Typography sx={{ fontSize: "28px", color: "white", mb: "30px",  "@media (max-width: 900px)": {
                fontSize: "22px",
                "@media (max-width: 550px)": {
                  fontSize: "18px",
                },
              }, }}>
            (Hybrid Mode)
          </Typography> */}
          <Typography
            sx={{ fontSize: "24px", color: "white", fontWeight: "600",  "@media (max-width: 900px)": {
              fontSize: "20px",
              "@media (max-width: 550px)": {
                fontSize: "16px",
              },
            }, }}
          >
              January 08 - 09, 2024
          </Typography>
          <Typography
            sx={{ fontSize: "20px", color: "white", fontWeight: "600",  "@media (max-width: 900px)": {
              fontSize: "16px",
              "@media (max-width: 550px)": {
                fontSize: "12px",
                width:"80%",
                mt:2
              },
            }, }}
            textAlign={"center"}
          >
              Changing world of work and labour in the Global South
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "#bccf17", my: "20px","@media (max-width: 550px)": {
                  fontSize: "16px",
                }, }}>
            "eProceedings available in session login"
            </Typography>
            <div className="conference-message">
              <p className="conference-text">
                Considering the overwhelming number of requests from scholars and researchers, it has been decided to extend
                the deadline for submission of abstracts to the International Industrial Relations Conference at XLRI Jamshedpur
                and the extended deadline is <strong>15 September 2023</strong>. Authors who would like their abstract of papers
                to be considered for presentation in the two-day conference should submit them to{' '}
                <a href="mailto:irconference@xlri.ac.in">irconference@xlri.ac.in</a> through e-mail by{' '}
                <strong>15 September 2023</strong>. The submission of abstracts should comply with the following guidelines:
              </p>
              <ul className="conference-guidelines">
                <li>Abstracts in English should be no longer than 500 words.</li>
                <li>They should cover research question(s), methodology, and findings.</li>
                <li>Include a maximum of four keywords.</li>
              </ul>
            </div>
          <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"20px","@media (max-width: 900px)": {
              flexDirection:"column", gap:"10px"
            }, }}>
              {/* <Button

              color="success"
              sx={{
                color: "white",
                px:2,
                fontSize:"14px",
                "@media (max-width: 550px)": {
                  fontSize: "12px",
                },
                border: "2px solid #bccf17",
                borderRadius: "20px",
                "&:hover": { background: "#1b4e9b",border: "2px solid #1b4e9b" },
              }}
            >
              Session Login
            </Button>
            <Button

              color="success"
              sx={{
                color: "white",
                px:2,
                fontSize:"14px",
                "@media (max-width: 550px)": {
                  fontSize: "12px",
                },
                border: "2px solid #bccf17",
                borderRadius: "20px",
                "&:hover": { background: "#1b4e9b",border: "2px solid #1b4e9b" },
              }}
            >
              Programme Schedule
            </Button>
            <Button

              color="success"
              sx={{
                color: "white",
                px:2,
                fontSize:"14px",
                "@media (max-width: 550px)": {
                  fontSize: "12px",
                },
                border: "2px solid #bccf17",
                borderRadius: "20px",
                "&:hover": { background: "#1b4e9b",border: "2px solid #1b4e9b" },
              }}
            >
              Best Paper Award Result
            </Button>
            <Button

              color="success"
              sx={{
                color: "white",
                px:2,
                fontSize:"14px",
                "@media (max-width: 550px)": {
                  fontSize: "12px",
                },
                border: "2px solid #bccf17",
                borderRadius: "20px",
                "&:hover": { background: "#1b4e9b",border: "2px solid #1b4e9b" },
              }}
            >
              Guest & Speakers
            </Button> */}
          </Box>
        </Box>
        </Zoom>
      </Box>
      <Fade>
      {/* <Container maxWidth="xl" sx={{ pt: "100px", display:"flex", justifyContent:"space-between","@media (max-width: 450px)": {
                 pt:"40px"
                } }} id="about-conference">
            <img style={{width:"18%", borderRadius:"30px 0px"}} src={require("../../../components/assets/technology.jpg")} alt="" />
            <img style={{width:"18%", borderRadius:"30px 0px"}} src={require("../../../components/assets/technology.jpg")} alt="" />
            <img style={{width:"18%", borderRadius:"30px 0px"}} src={require("../../../components/assets/technology.jpg")} alt="" />
            <img style={{width:"18%", borderRadius:"30px 0px"}} src={require("../../../components/assets/technology.jpg")} alt="" />
            <img style={{width:"18%", borderRadius:"30px 0px"}} src={require("../../../components/assets/technology.jpg")} alt="" />
      </Container> */}
      </Fade>
    </>
  );
}
