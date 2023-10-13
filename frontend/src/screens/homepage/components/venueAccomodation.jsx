import React from 'react'
import { Container, Typography,Box} from "@mui/material"

export default function VenueAccomodation() {
  return (
    <>
      <Box sx={{ background: "#fff" }}>
        <Container id="venue" maxWidth="xl" sx={{ py: "70px" ,"@media (max-width: 450px)": {
                 py:"30px"
                }}}>
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
          >CONFERENCE TEAM
          </Typography>
          <Box sx={{
            display: "flex", justifyContent: "space-between", gap: "50px", mt: "50px", alignItems: "center", "@media (max-width: 900px)": {
              flexDirection: "column",
              "@media (max-width: 450px)": {
                mt: "20px"
              }
            }
          }}>
            <img
              style={{
                borderRadius: "10px", width: "auto", height: "100%", maxWidth: "30%", "@media (max-width: 900px)": {
                  maxWidth: "100%",
                }
              }}
              src={require("../../../components/assets/FIRE@X BLACK LOGO.png")}
              alt=""
            />
            <Typography sx={{
              fontSize: "16px", color: "#2d2d2d", textAlign: "justify", "@media (max-width: 900px)": {
                fontSize: "14px"
              }
            }} className="text">
              The Forum for Industrial Relations at XLRI - FIRE@X is the committee for the promotion of industrial relations at XLRI. It was founded as a discussion forum in 1996 and over time, took shape into the formal society it is today. Fire@x is the hub of all IR-related activities in XLRI.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="venue" maxWidth="xl" sx={{
          py: "70px", "@media (max-width: 450px)": {
            py: "30px"
          }
        }}>
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
                  lineHeight: "50px"
                }
              }
            }}
          >
           VENUE AND ACCOMODATION
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", gap:"50px", mt:"50px", alignItems:"center",  "@media (max-width: 900px)": {
                flexDirection:"column",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
              }}}>
        
            <img
              style={{ borderRadius: "10px", width: "auto", height:"100%", maxWidth:"50%",  "@media (max-width: 900px)": {
                maxWidth:"100%",
              } }}
              src={require("../../../components/assets/institute.jpg")}
              alt=""
            /> 
            <Typography sx={{ fontSize: "16px", color: "#2d2d2d",textAlign:"justify","@media (max-width: 900px)": {
               fontSize:"14px"
            }
            }} className="text">
            Conference will be organized at the beautiful campus of Xavier School of Management (XLRI), Jamshedpur.
              <br />
              <br />
              Details:
XLRI
C. H. Area (East)
Jamshedpur - 831001
Jharkhand, India
Phone : +91 657 665 3333
Fax: +91-657-2227814
              <br />
              <br />
              There are large number hotels available in the Jamshedpur city and nearby XLRI. In addition to these hotels
limited number of accommodations is also available at XLRI Jamshedpur Guest House.
<br />
              <br />
              For booking accommodation one needs to forward their request to the conference committee. The available
rooms will be allotted on First Come Firsts Serve basis. The rates for the guest accommodation (including
GST) are as follows:
              <br />
              <br />
              Twin sharing: Rs. 2688/- per night
              <br />
Single: Rs. 4480/- per night
            </Typography>
          </Box>
        </Container>
        </Box>
    </>
  )
}
