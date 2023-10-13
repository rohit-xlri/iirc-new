import React from 'react'

import { Container, Typography, Box, Paper } from "@mui/material";

export default function Contact() {
  return (
    <>
        <Container id="contact" maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
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
          >
           CONTACT
          </Typography>
          <Paper sx={{p:4, mt:"50px", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }}}>
                   <Typography sx={{fontSize:"24px", fontWeight:"600",  "@media (max-width: 850px)": {
               fontSize:"18px"
          }
          }}>Industrial Relations Conference</Typography>
                    <Typography sx={{fontSize:"20px" , color:"#4d4d4d",  "@media (max-width: 850px)": {
               fontSize:"16px"
          }
          }}>Email: irconference@xlri.ac.in</Typography>
           <Box sx={{display:"flex", justifyContent:"center", gap:"50px", alignItems:"center",mt:"30px",  "@media (max-width: 850px)": {
               flexDirection:"column", gap:"20px"
              }}}>
                <Box sx={{width:"50%",  "@media (max-width: 850px)": {
               width:"100%"
              }}}>
                    <Typography sx={{fontSize:"24px",  "@media (max-width: 850px)": {
               fontSize:"18px"
              }
              }}>Santanu Sarkar</Typography>
                    <Typography sx={{fontSize:"18px" , color:"#4d4d4d",  "@media (max-width: 850px)": {
               fontSize:"14px"
              }
              }}>Email: ssarkar@xlri.ac.in</Typography>
                </Box>
                <Box sx={{width:"50%",  "@media (max-width: 850px)": {
               width:"100%"
              }}}>
              {/* <Typography sx={{fontSize:"24px",  "@media (max-width: 850px)": {
               fontSize:"18px"
              }}}>Prof. Abhishek Chakraborty</Typography>
                    <Typography sx={{fontSize:"18px" , color:"#4d4d4d",  "@media (max-width: 850px)": {
               fontSize:"14px"
              }}}>Email: abhishekc@xlri.ac.in</Typography> */}
                </Box>
           </Box>
           <Typography sx={{fontSize:"26px", fontWeight:"600", mt:"30px", mb:"15px", color:"#6d6d6d",  "@media (max-width: 850px)": {
               fontSize:"20px"
              }}}>Address</Typography>
           <Typography sx={{fontSize:"16px",  "@media (max-width: 850px)": {
               fontSize:"14px"
              }}}>
           XLRI Xavier School of Management <br />
           C. H. Area (East) <br />
           Jamshedpur - 831001 <br />
           Jharkhand <br />
           India <br />
           Phone: +91 657 665 3333 <br />
           Fax: +91-657-2227814
           </Typography>
          </Paper>
        </Container>
    </>
  )
}
