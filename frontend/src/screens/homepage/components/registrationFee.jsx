import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

export default function RegistrationFee() {
  return (
    <>
    <Box id="call-paper">
      <Container
        maxWidth="xl"
        sx={{
          py: "70px",
          "@media (max-width: 450px)": {
            py: "30px",
          },
        }}
        id="fee"
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
          REGISTRATION FEE
        </Typography>
        <Box
          sx={{
            display: "grid",
            mt: "70px",
            gridTemplateColumns: "repeat(5,19%)",
            justifyContent: "space-between",
            alignItems: "stretched",
            // gap: "50px 50px",
            "@media (max-width: 1100px)": {
              gridTemplateColumns: "repeat(3,32%)",
              gap: "10px",
              "@media (max-width: 450px)": {
                mt: "20px",
              },
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
              "@media (max-width: 1250px)": {
                p: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4d4d4d",
                minHeight: "70px",
                "@media (max-width: 900px)": {
                  fontSize: "16px",
                  "@media (max-width: 550px)": {
                    fontSize: "12px",
                  },
                },
              }}
              textAlign={"center"}
            >
              Academicians within India
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#bccf17",
                "@media (max-width: 900px)": {
                  fontSize: "22px",
                  mb: 2,
                },
              }}
              textAlign={"center"}
            >
              8500 <sup style={{ fontSize: "20px" }}>INR</sup>
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#1b4e9b",
                "@media (max-width: 900px)": {
                  fontSize: "14px",
                },
              }}
              textAlign={"center"}
            >
              + 18% GST <Typography sx={{fontSize:"14px", color:"#2d2d2d"}}>per head</Typography>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
              "@media (max-width: 1250px)": {
                p: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4d4d4d",
                mb: 2,
                minHeight: "70px",
                "@media (max-width: 900px)": {
                  fontSize: "16px",
                  "@media (max-width: 550px)": {
                    fontSize: "12px",
                  },
                },
              }}
              textAlign={"center"}
            >
              Research Scholars within India <Typography sx={{fontSize:"12px", color:"#2d2d2d"}}>(Doctoral students and post-doctoral researchers)</Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#bccf17",
                "@media (max-width: 900px)": {
                  fontSize: "22px",
                  mb: 2,
                },
              }}
              textAlign={"center"}
            >
              3000 <sup style={{ fontSize: "20px" }}>INR</sup>
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#1b4e9b",
                "@media (max-width: 900px)": {
                  fontSize: "14px",
                },
              }}
              textAlign={"center"}
            >
              + 18% GST <Typography sx={{fontSize:"14px", color:"#2d2d2d"}}>per head</Typography>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
              "@media (max-width: 1250px)": {
                p: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4d4d4d",
                mb: 2,
                minHeight: "70px",
                "@media (max-width: 900px)": {
                  fontSize: "16px",
                  "@media (max-width: 550px)": {
                    fontSize: "12px",
                  },
                },
              }}
              textAlign={"center"}
            >
              Industry professionals
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#bccf17",
                "@media (max-width: 900px)": {
                  fontSize: "22px",
                  mb: 2,
                },
              }}
              textAlign={"center"}
            >
              10000 <sup style={{ fontSize: "20px" }}>INR</sup>
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#1b4e9b",
                "@media (max-width: 900px)": {
                  fontSize: "14px",
                },
              }}
              textAlign={"center"}
            >
              + 18% GST <Typography sx={{fontSize:"14px", color:"#2d2d2d"}}>per head</Typography>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
              "@media (max-width: 1250px)": {
                p: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4d4d4d",
                mb: 2,
                minHeight: "70px",
                "@media (max-width: 900px)": {
                  fontSize: "16px",
                  "@media (max-width: 550px)": {
                    fontSize: "12px",
                  },
                },
              }}
              textAlign={"center"}
            >
              Academicians from outside India
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#bccf17",
                "@media (max-width: 900px)": {
                  fontSize: "22px",
                  mb: 2,
                },
              }}
              textAlign={"center"}
            >
               21000 <sup style={{ fontSize: "20px" }}>INR</sup>
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#1b4e9b",
                "@media (max-width: 900px)": {
                  fontSize: "14px",
                },
              }}
              textAlign={"center"}
            >
              + 18% GST <Typography sx={{fontSize:"14px", color:"#2d2d2d"}}>per head</Typography>
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px",
              "@media (max-width: 1250px)": {
                p: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#4d4d4d",
                mb: 2,
                minHeight: "70px",
                "@media (max-width: 900px)": {
                  fontSize: "16px",
                  "@media (max-width: 550px)": {
                    fontSize: "12px",
                  },
                },
              }}
              textAlign={"center"}
            >
              Research Scholars from outside India <Typography sx={{fontSize:"12px", color:"#2d2d2d"}}>(Doctoral students and post-doctoral researchers)</Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: "38px",
                fontWeight: "600",
                color: "#bccf17",
                "@media (max-width: 900px)": {
                  fontSize: "22px",
                  mb: 2,
                },
              }}
              textAlign={"center"}
            >
               12000 <sup style={{ fontSize: "20px" }}>INR</sup>
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#1b4e9b",
                "@media (max-width: 900px)": {
                  fontSize: "14px",
                },
              }}
              textAlign={"center"}
            >
              + 18% GST <Typography sx={{fontSize:"14px", color:"#2d2d2d"}}>per head</Typography>
            </Typography>
          </Paper>
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#2d2d2d",
            textAlign: "justify",
            mt: "50px",
            "@media (max-width: 450px)": {
              fontSize: "14px",
            },
          }}
        >
          PAYMENT METHOD
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            "@media (max-width: 450px)": {
              fontSize: "12px",
            },
          }}
        >
          <ul>
            <li>
              For overseas participants, the exact amount of the registration
              fee will be computed based on the exchange rate on the date of the
              transaction.
            </li>
            <li>
              Only online payment is accepted. Cash and cheque payments are not
              accepted.
            </li>
          </ul>
        </Typography>
      </Container>
      </Box>
    </>
  );
}
