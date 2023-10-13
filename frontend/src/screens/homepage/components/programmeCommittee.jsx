import React from "react";

import { Container, Typography, Box, Paper, Avatar } from "@mui/material";

const members = [
  { name: "Prof. Abdul Quadir", location: "XLRI Jamshedpur", img: "avatar1" },
  { name: "Prof. Abhishek Srivastava", location: "IIM Kashipur", img: "avatar2" },
  { name: "Prof. Ajith Kumar J", location: "XLRI Jamshedpur", img: "avatar3" },
  { name: "Prof. Amitava Mukherjee", location: "XLRI Jamshedpur", img: "avatar4" },
  { name: "Prof. Apratim Guha", location: "XLRI Jamshedpur", img: "avatar5" },
  { name: "Prof. Arshinder Kaur", location: "IIT Madras", img: "avatar30" },
  { name: "Prof. Ashis K Pani", location: "XLRI Jamshedpur", img: "avatar6" },
  { name: "Prof. Bijaya K Mangaraj", location: "XLRI Jamshedpur", img: "avatar7" },
  { name: "Prof. Debmallya Chatterjee", location: "SPJIMR, Mumbai", img: "avatar8" },
  { name: "Prof. Dipankar Bose", location: "XLRI Jamshedpur", img: "avatar9" },
  { name: "Prof. H.K Pradhan", location: "XLRI Jamshedpur", img: "avatar10" },
  { name: "Prof. Haritha Saranga", location: "IIM Bangalore", img: "avatar11" },
  { name: "Prof. Kalyan Bhashkar", location: "XLRI Jamshedpur", img: "avatar12" },
  { name: "Prof. Kushal Shah", location: "XLRI Jamshedpur", img: "avatar13" },
  { name: "Prof. Mayukh Majumdar", location: "Knauss School of Business, USA", img: "avatar14", },
  { name: "Prof. Mrinalini Shah", location: "IMT Ghaziabad", img: "avatar15" },
  { name: "Prof. Pratik Tarafdar", location: "XLRI Delhi-NCR", img: "avatar16" },
  { name: "Prof. Pritha Guha", location: "XLRI Jamshedpur", img: "avatar17" },
  { name: "Prof. Rajeev Ranjan Kumar", location: "IIM Ranchi", img: "avatar18" },
  { name: "Prof. Ruchita Gupta", location: "NITIE, Mumbai", img: "avatar19" },
  { name: "Prof. Rupesh Kumar Pati", location: "IIM Kozhikode", img: "avatar20" },
  { name: "Prof. Sambit Brata Rath", location: "XLRI Delhi-NCR", img: "avatar21" },
  { name: "Prof. Shakshi Singhal", location: "XLRI Delhi-NCR", img: "avatar22" },
  { name: "Prof. Sayan Mukherjee", location: "XLRI Delhi-NCR", img: "avatar23" },
  { name: "Prof. Shounak Basak", location: "XLRI Jamshedpur", img: "avatar24" },
  { name: "Prof. Sreejith Krishnakumar", location: "IIM Udaipur", img: "avatar25" },
  { name: "Prof. Sumit Sarkar", location: "XLRI Jamshedpur", img: "avatar26" },
  { name: "Prof. Supriya Kumar De", location: "XLRI Jamshedpur", img: "avatar27" },
  { name: "Prof. Varun Sharma", location: "TAPMI", img: "avatar28" },
  { name: "Prof. Vijaya Dixit", location: "IIM Ranchi", img: "avatar29" },
];

export default function ProgrammeCommittee() {
  return (
    <>
        <Container
          maxWidth="xl"
          sx={{
            py: "70px",
            "@media (max-width: 450px)": {
              py: "30px",
            },
          }}
          id="pgrmcommitte"
        >
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
                  lineHeight: "50px",
                },
              },
            }}
          >
            PROGRAMME COMMITTEE
          </Typography>
          <Box
            sx={{
              display: "grid",
              mt: "70px",
              alignItems: "stretched",
              gridTemplateColumns: "repeat(4,23%)",
              gap: "20px",
              justifyContent: "space-between",
              "@media (max-width: 1200px)": {
                gap: "15px",
                "@media (max-width: 1000px)": {
                  gridTemplateColumns: "repeat(3,32%)",
                  gap: "10px",
                  "@media (max-width: 450px)": {
                    mt: "20px",
                  },
                },
              },
            }}
          >
            {members?.map((e, i) => {
              return (
                <>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 1,
                      borderRadius: "70px",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
                      "@media (max-width: 1200px)": {
                        borderRadius: "10px",
                        flexDirection: "column",
                        gap: "10px",
                        "@media (max-width: 450px)": {
                          p: 1,
                        },
                      },
                    }}
                  >
                    <Avatar
                      alt="Fr S George, S J"
                      // src={require(`../../../components/assets/programmeCommittee/avatar${
                      //   i + 1
                      // }.jpg`)}
                      src={require(`../../../components/assets/programmeCommittee/${e?.img
                      }.jpg`)}
                      sx={{ height: "55px", width: "55px" }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        textAlign={"center"}
                        sx={{
                          fontSize: "16px",
                          "@media (max-width: 1000px)": {
                            fontSize: "14px",
                          },
                        }}
                      >
                        {e?.name}
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        sx={{
                          fontSize: "14px",
                          color: "#8d8d8d",
                          "@media (max-width: 1000px)": {
                            fontSize: "12px",
                          },
                        }}
                      >
                        ({e?.location})
                      </Typography>
                    </Box>
                  </Paper>
                </>
              );
            })}
          </Box>
        </Container>
    </>
  );
}
