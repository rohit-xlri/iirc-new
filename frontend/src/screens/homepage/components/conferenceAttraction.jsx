import React from 'react'

import { Container, Typography, Box, Paper } from "@mui/material";

export default function ConferenceAttraction() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
     <Container maxWidth="xl" sx={{ py: "70px" ,"@media (max-width: 450px)": {
                 py:"30px"
                }}} id="attraction">
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
          CONFERENCE ATTRACTION
        </Typography>
        <Box sx={{display:"grid",  mt:"70px", gridTemplateColumns: "repeat(3,32%)",justifyContent:"space-between", gap:"20px","@media (max-width: 1100px)": {
              gridTemplateColumns: "repeat(3,32%)", gap:"10px",
              "@media (max-width: 1000px)": {
                mt:"20px",
                gridTemplateColumns: "repeat(2,49%)"
               }
              }}}>
        <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon1.png")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Opportunity to receive inputs for enhancing the quality of research and potential publication
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon2.jpg")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Publication of e- proceedings of abstracts
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon3.jpg")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Opportunity to connect with eminent academicians and scholars of national and international repute
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon4.jpg")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Workshops and panel discussions by eminent academicians and industry practitioners
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon5.jpg")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Best paper award
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ width:"100%", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px", display:"flex",alignItems:"center","@media (max-width: 450px)": {
              flexDirection:"column"
               }}}>
              <img style={{width:"50%", height:"auto"}} src={require("../../../components/assets/icon6.jpg")} alt="" />
              <Typography sx={{m:4,fontSize:"18px", fontWeight:"600", color:"#4d4d4d","@media (max-width: 1400px)": {
              fontSize:"14px",m:2,
              "@media (max-width: 550px)": {
                fontSize:"12px"
               }
              }}} textAlign={"center"}>
              Keynote addresses by eminent academicians and practitioners
              </Typography>
            </Paper>
        </Box>
      </Container>
      </Box>
    </>
  )
}
