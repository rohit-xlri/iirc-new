import React from 'react'

import { Container, Typography,Box,Stepper,Step,StepLabel ,StepContent,Button,Paper, Stack  } from "@mui/material";
import EventIcon from '@mui/icons-material/Event';

export default function ImportantDates() {

  const steps = [
    {
      label: '15th September, 2023',
      description: `Abstract submission deadline`,
    },
    {
          label: '30th September, 2023',
          description: `Selected Abstract Announcement`,
        },
        {
          label: '15th December, 2023',
          description:
            'Paper Submission Deadline',
        },
        {
          label: '08th-09th January, 2024',
          description: `Conference Date`,
        },
      ];

  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="dates" maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
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
            IMPORTANT DATES
          </Typography>
            <Box sx={{mt:"50px",  display:"flex", justifyContent:"center",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }}}>
            <Stepper  orientation='vertical'>
        {steps.map((step) => (
          <Step active={true} key={step.label}>
            <StepLabel icon={<EventIcon />}>
                <Stack direction="row" spacing={2}>
                <Typography sx={{fontSize:"18px", fontWeight:"600", color:"#4d4d4d",  "@media (max-width: 650px)": {
               fontSize:"14px"
              }}}>{step.label} </Typography>
                <Typography sx={{fontSize:"16px", color:"#2d2d2d",  "@media (max-width: 650px)": {
               fontSize:"12px"
              }}}>-</Typography>
                <Typography sx={{fontSize:"16px", color:"#2d2d2d",  "@media (max-width: 650px)": {
               fontSize:"12px"
              }}}>{step.description}</Typography>
                </Stack>
            </StepLabel>
            <StepContent>
              
            </StepContent>
          </Step>
        ))}
      </Stepper>
            </Box>
            <Typography
            textAlign={"center"}
          sx={{
            fontSize: "16px",
            color: "#6d6d6d",
            mt:"50px"
          }}
        >
         **International Participants are expected to submit as soon as possible so that if selected visa and other regulatory processes can be carried out in due time.
        </Typography>
          </Container>
          </Box>
    </>
  )
}
