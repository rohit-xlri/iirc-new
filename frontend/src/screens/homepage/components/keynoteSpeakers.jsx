import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  Button,
  Modal
} from "@mui/material";

export default function KeynoteSpeakers() {
  const [popup1Open, setPopup1Open] = useState(false);
  const [popup2Open, setPopup2Open] = useState(false);

  const openPopup1 = () => {
    setPopup1Open(true);
  };

  const closePopup1 = () => {
    setPopup1Open(false);
  };

  const openPopup2 = () => {
    setPopup2Open(true);
  };

  const closePopup2 = () => {
    setPopup2Open(false);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{
        py: "70px", "@media (max-width: 450px)": {
          py: "30px"
        }, background: "#fff9f9"
      }} id="chairs">
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#1b4e9b",
            textDecoration: "underline 5px #bccf17",
            textUnderlineOffset: "15px",
            textTransform: "uppercase",
            "@media (max-width: 750px)": {
              fontSize: "22px",
              "@media (max-width: 450px)": {
                fontSize: "18px",
                lineHeight: "50px"
              }
            }
          }}
        >
          Keynote Speakers
        </Typography>
        <Box sx={{
          display: "grid", mt: "70px", alignItems: "center", gridTemplateColumns: "repeat(2,auto)", gap: "100px", justifyContent: "center", "@media (max-width: 850px)": {
            gap: "20px",
            "@media (max-width: 550px)": {
              gap: "10px",
              mt: "20px"
            }
          }
        }}>
          <Paper elevation={3} sx={{ borderRadius: "10px", display: "flex", justifyContent: "start", alignItems: "center", maxWidth: "575px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px" }}>
            <Avatar variant="square" alt="Prof. Alok Raj" src={require("../../../components/assets/Mark-Stuart.jpg")} sx={{
              height: "100%", width: "30%", borderRadius: "10px 0px 0px 10px", "@media (max-width: 550px)": {
                height: "80px", width: "auto"
              }
            }} />
            <Box sx={{ flexGrow: 1, padding: "10px" }} textAlign={"center"}>
              <Typography textAlign={"center"} sx={{
                fontSize: "20px", mt: "20px", "@media (max-width: 850px)": {
                  fontSize: "14px"
                }
              }}>Mark Stuart</Typography>
              <Typography textAlign={"center"} sx={{
                fontSize: "14px", color: "#8d8d8d", "@media (max-width: 850px)": {
                  fontSize: "12px"
                }
              }}>The Montague Burton Professor of Employment Relations and Human Resource
                Management (estd at Leeds in 1930), and Pro Dean for Research and Innovation at Leeds
                University Business School, University of Leeds. <Typography sx={{ fontweight: "bold", fontStyle: "italic", color: "#000" }}>Topic: Platform labour unrest in a global perspective.
                </Typography></Typography><br />
              <Button variant="contained" onClick={openPopup1}>View Profile</Button>
            </Box>

          </Paper>

          <Paper elevation={3} sx={{ borderRadius: "10px", display: "flex", justifyContent: "start", alignItems: "center", maxWidth: "575px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px" }}>
            <Avatar variant="square" alt="Prof. Abhishek chakraborty" src={require("../../../components/assets/Amitav-Mukherji.jpg")} sx={{
              height: "100%", width: "30%", borderRadius: "10px 0px 0px 10px", "@media (max-width: 550px)": {
                height: "80px", width: "auto"
              }
            }} />
            <Box sx={{ flexGrow: 1, padding: "10px" }} textAlign={"center"}>
              <Typography textAlign={"center"} sx={{
                fontSize: "20px", mt: "20px", "@media (max-width: 850px)": {
                  fontSize: "14px"
                }
              }}>Amitav Mukherji</Typography>
              <Typography textAlign={"center"} sx={{
                fontSize: "14px", color: "#8d8d8d", "@media (max-width: 850px)": {
                  fontSize: "12px"
                }
              }}>Executive Vice President, Human Resources, ITC Ltd.</Typography>
              <Typography sx={{ fontweight: "bold", fontStyle: "italic" }}>Topic: Employee Relations in an Era of Disruption - An Employer's Perspective
              </Typography>
              <br />
              <Button variant="contained" onClick={openPopup2}>View Profile</Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      <Modal
        open={popup1Open}
        onClose={closePopup1}
        aria-labelledby="popup1-modal-title"
        aria-describedby="popup1-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px'
        }} textAlign={"center"}>
          <Box sx={{ flexGrow: 1, padding: "10px" }} textAlign={"center"}>
            <Typography textAlign={"center"} sx={{
              fontSize: "20px", mt: "20px", "@media (max-width: 850px)": {
                fontSize: "14px"
              }
            }}>Mark Stuart</Typography>
            <Typography textAlign={"center"} sx={{
              fontSize: "14px", color: "#8d8d8d", "@media (max-width: 850px)": {
                fontSize: "12px"
              }
            }}>The Montague Burton Professor of Employment Relations and Human Resource
              Management (estd at Leeds in 1930), and Pro Dean for Research and Innovation at Leeds
              University Business School, University of Leeds. </Typography>
            <Typography sx={{ margin: "10px", fontFamily: "sans-serif" }}>
              He is the founding Director of the Centre for Employment Relations, Innovation and Change (CERIC) and the co-Director if the ESRC Digital Futures at Work research centre (a joint initiative between Sussex and Leeds Universities). He has published more than 100 journal articles, book chapters and reports on topics such as: the modernization of employment relations; skills, training and lifelong learning; corporate restructuring; trade union change; freelance work; and digital innovation and platform work. His work has been published in journals such as: British Journal of Industrial Relations, European Journal of Industrial Relations, Industrial Relations, Indian Journal of Industrial Relations, Journal of Industrial Relations. He has received grants from the UK Economic and Social Research Council, European Union Commission and Parliament, various UK governmental bodies, the International Labour Office, the OECD and various trade unions and charities. He was previously: Editor-in-Chief, Work, Employment and Society; President of the British Universities Industrial Relations Association (BUIRA); International Section Chair of the Labor and Employment Relations Association (US). A Fellow of the Academy of Social Sciences (FAcSS), and the British Universities Industrial Relations Association, Mark has held visiting positions in the USA (Cornell), Australia (Sydney, Monash, Griffiths), Sweden and France.

            </Typography>
          </Box>
          <Button textAlign={"center"} onClick={closePopup1}>Close</Button>
        </Box>
      </Modal>

      <Modal
        open={popup2Open}
        onClose={closePopup2}
        aria-labelledby="popup1-modal-title"
        aria-describedby="popup1-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: '10px'
        }} textAlign={"center"}>
          <Box sx={{ flexGrow: 1, padding: "10px" }} textAlign={"center"}>
            <Typography textAlign={"center"} sx={{
              fontSize: "20px", mt: "20px", "@media (max-width: 850px)": {
                fontSize: "14px"
              }
            }}>Amitav Mukherji</Typography>
            <Typography textAlign={"center"} sx={{
              fontSize: "14px", color: "#8d8d8d", "@media (max-width: 850px)": {
                fontSize: "12px"
              }
            }}>Executive Vice President Human Resources, ITC Ltd.</Typography>

            <Typography sx={{ margin: "10px", fontFamily: "sans-serif" }}>
              Amitav leads the Human Resources function at ITC since 2019. He joined ITC from campus in 1995 and in his career of close to three decades has had the opportunity to work across a range of assignments in Human Resources as well as cross functionally in Sales and Brand Management. Amitav enjoys learning from fellow practioners about building people capability for enduring high performance. His interests include reading, especially travel writing, current affairs, finance and economics.
            </Typography>
          </Box>
          <Button textAlign={"center"} onClick={closePopup2}>Close</Button>
        </Box>
      </Modal>
    </>
  )
}
