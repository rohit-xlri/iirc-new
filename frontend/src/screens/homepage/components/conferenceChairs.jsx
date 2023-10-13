import React from 'react'

import { Container, Typography,Box,Paper, Avatar} from "@mui/material";

export default function ConferenceChairs() {
  return (
    <>
    <Container maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
                 py:"30px"
                } }} id="chairs">
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#1b4e9b",
              textDecoration: "underline 5px #bccf17",
              textUnderlineOffset: "15px",
              "@media (max-width: 750px)": {
                fontSize: "22px",
                "@media (max-width: 450px)": {
                  fontSize: "18px",
                  lineHeight:"50px"
                }
              }
            }}
          >
           CONFERENCE CHAIRS
          </Typography>
          <Box sx={{display:"grid",  mt:"70px", alignItems:"center", gridTemplateColumns: "repeat(2,auto)", gap:"100px", justifyContent:"center",  "@media (max-width: 850px)": {
               gap:"20px",
                "@media (max-width: 550px)": {
                  gap:"10px",
                  mt:"20px"
               }
              }}}>
            <Paper elevation={3} sx={{ borderRadius:"10px", display:"flex", justifyContent:"start", alignItems:"center", maxWidth:"500px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px"}}>
            <Avatar variant="square" alt="Prof. Alok Raj" src={require("../../../components/assets/Prof.-Alok-Raj.jpg")} sx={{
              height: "100%", width: "30%", borderRadius: "10px 0px 0px 10px", "@media (max-width: 550px)": {
                height:"80px", width:"auto"
               }}}/>
                <Box sx={{flexGrow:1,}}>
                <Typography textAlign={"center"} sx={{fontSize:"20px", mt:"20px",  "@media (max-width: 850px)": {
               fontSize:"14px"
              }}}>Prof. Alok Raj</Typography>
                <Typography textAlign={"center"} sx={{fontSize:"14px", color:"#8d8d8d",  "@media (max-width: 850px)": {
               fontSize:"12px"
              }}}>(XLRI Jamshedpur)</Typography>
                </Box>
            </Paper>

            <Paper elevation={3} sx={{ borderRadius:"10px", display:"flex", justifyContent:"start", alignItems:"center", maxWidth:"500px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px"}}>
            <Avatar variant="square" alt="Prof. Abhishek chakraborty" src={require("../../../components/assets/avatar2.jpg")} sx={{
              height: "100%", width: "30%", borderRadius: "10px 0px 0px 10px", "@media (max-width: 550px)": {
                height:"80px", width:"auto"
               }}}/>
                <Box sx={{flexGrow:1}}>
                <Typography textAlign={"center"} sx={{fontSize:"20px", mt:"20px",  "@media (max-width: 850px)": {
               fontSize:"14px"
              }}}>Prof. Abhishek chakraborty</Typography>
                <Typography textAlign={"center"} sx={{fontSize:"14px", color:"#8d8d8d",  "@media (max-width: 850px)": {
               fontSize:"12px"
              }}}>(XLRI Jamshedpur)</Typography>
                </Box>
            </Paper>
          </Box>
        </Container>
    </>
  )
}
