import React from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ConferenceTracks() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="tracks" maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
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
            CONFERENCE TRACKS
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#2d2d2d",
              textAlign: "justify",
              mt: "50px",
              "@media (max-width: 900px)": {
                fontSize:"14px",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
               }
            }}
          >
            As the changing world of work in the Global South has significant implications for labour, businesses, and society as a whole, we are particularly interested in research that addresses issues such as:
          </Typography>
          <Typography sx={{ fontSize: "16px","@media (max-width: 450px)": {
               fontSize:"12px"
          }
          }} className="text">
                  <ul>
              <li>Employment and labour market effects of the current global crises</li>
              <li>Technology innovation, work and employment</li>
              <li>Flexibility, autonomy and labour process</li>
              <li>Gender, equality and work</li>
              <li>Labour and social movements, trade unions and collective bargaining</li>
              <li>Pandemic, care work and Global South</li>
              <li>Labour movement strategies and policies to mitigate the unequal effects of crises</li>
              <li>Comparative institutional perspectives on regulations that are effective in mitigating the effects of crises on the working </li>class
              <li>Modern-day slavery and migrant workers</li>
              <li>Sustainable and green work</li>
                  </ul>
                </Typography>
        </Container>
        </Box>
    </>
  );
}
