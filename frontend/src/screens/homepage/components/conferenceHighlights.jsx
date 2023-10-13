import React from 'react'

import { Container, Typography, Box, Paper } from "@mui/material";

export default function ConferenceHighlights() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }} id="about-highlights">
        <Container maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
                 py:"30px"
                } }}>
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
          >ß
            HIGHLIGHTS OF THE CONFERENCE
          </Typography>
          <Box sx={{display:"grid", justifyContent:"space-between",  mt:"70px", alignItems:"stretched", gridTemplateColumns: "repeat(3,32%)", gap:"10px","@media (max-width: 800px)": {
               gridTemplateColumns: "repeat(2,50%)",
               "@media (max-width: 450px)": {
                 mt:"20px"
                }
              }}}>
            <Paper elevation={3} sx={{p:2, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px", "@media (max-width: 550px)": {
               }}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              } }} textAlign={"center"}>
              Keynote addresses by eminent academicians and practitioners
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{p:2, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px"}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
              //  width:"100px",
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px",
               }
              } }} textAlign={"center"}>Workshop/ Tutorials
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{p:2, display:"flex", justifyContent:"space-between", alignItems:"center",  borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px"}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
              //  width:"100px",
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              } }} textAlign={"center"}>
              Panel discussions
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{p:2, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px"}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
              //  width:"100px",
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              } }} textAlign={"center"}>
              Doctoral Colloquium
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{p:2,  display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px"}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
              //  width:"100px",
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              } }} textAlign={"center"}>           
              Paper presentations
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{p:2, display:"flex", justifyContent:"space-between", alignItems:"center", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 30px -12px", "@media (max-width: 550px)": {
                flexDirection:"column"
               }}}>
              <img style={{width:"80px"}} src={require("../../../components/assets/highlight-img1.jpg")} alt="" />
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1200px)": {
              //  width:"100px",
               fontSize:"14px",
               "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              } }} textAlign={"center"}>
              Publication of conference proceedings
              </Typography>
            </Paper>
            
           
          </Box>
        </Container>
      </Box>
    </>
  )
}
