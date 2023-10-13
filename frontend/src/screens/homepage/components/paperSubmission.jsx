import React from 'react'

import { Container, Typography,Box,Paper, Button } from "@mui/material";

export default function PaperSubmission() {
  return (
    <>
    <Container maxWidth="xl" sx={{ py: "70px" ,"@media (max-width: 450px)": {
                 py:"30px"
                }}} id="paper">
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
          ABSTRACT SUBMISSION
        </Typography>
        <Paper elevation={3} sx={{p:4,mt:"50px", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }}}>
        <Typography sx={{ fontSize: "16px", color: "#2d2d2d", textAlign:"justify",mb:"20px","@media (max-width: 900px)": {
               fontSize:"14px"
              } }}>
            Authors who would like their abstract of papers to be considered for presentation in the two-day conference should submit them to <a href="mailto:irconference@xlri.ac.in">irconference@xlri.ac.in</a> through e-mail by <b>15 September 2023</b>.The submission of abstracts should comply with the following guidelines: Abstracts in English should be no longer than 500 words and cover research question(s), methodology and findings with a maximum of four keywords.
            <br /><br />
            The authors of selected abstracts will be informed by 30 September 2023 and invited to submit their papers by 15 December 2023 for presentation at the two-day international conference at XLRI Xavier School of Management in Jamshedpur, India. 
          </Typography>
          {/* <Typography sx={{ fontSize: "24px", color: "#2d2d2d", textAlign:"justify", mt:"30px", mb:"20px","@media (max-width: 900px)": {
               fontSize:"20px"
              } }}>Submission Link</Typography> */}
          {/* <a href="https://easychair.org/cfp/content.cgi?a=31326933;draft=1" target="_blank" rel="noopener noreferrer"><Button variant="contained">Submission Link</Button></a>  */}
          {/* <Typography sx={{ fontSize: "24px", color: "#2d2d2d", textAlign:"justify", mt:"30px", mb:"10px","@media (max-width: 900px)": {
               fontSize:"20px"
              } }}>Authors Guideline</Typography>
          <Button>Click here</Button> */}
          </Paper>
      </Container>
    </>
  )
}
