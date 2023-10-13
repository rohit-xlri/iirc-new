import React from 'react'

import { Container, Typography,Box} from "@mui/material"

export default function HowToReach() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="how-to-reach" maxWidth="xl" sx={{ py: "70px" ,"@media (max-width: 450px)": {
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
          >
           HOW TO REACH
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", gap:"50px", mt:"50px", alignItems:"center",  "@media (max-width: 900px)": {
                flexDirection:"column",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
              }}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.708313732182!2d86.18856151536946!3d22.81326962984193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e39e000ddfd9:0x5c0dfa9771c7d7bf!2sxlri+-+xavier+school+of+management!5e0!3m2!1sen!2sin!4v1454411094024?pb=!1m18!1m12!1m3!1d3677.708313732182!2d86.18856151536946!3d22.81326962984193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e39e000ddfd9%3A0x5c0dfa9771c7d7bf!2sXLRI+-+Xavier+School+of+Management!5e0!3m2!1sen!2sin!4v1454411094024" frameborder="0" height={"400px"} width={"100%"} allowfullscreen></iframe>
            {/* <img
              style={{ borderRadius: "10px", width: "auto", height:"100%", maxWidth:"50%",  "@media (max-width: 900px)": {
                maxWidth:"100%",
              } }}
              src={require("../../../components/assets/institute.jpg")}
              alt=""
            />  */}
            <Typography sx={{ fontSize: "16px", color: "#2d2d2d",textAlign:"justify",width:"50%","@media (max-width: 900px)": {
               fontSize:"14px",
               width:"100%"
            }
            }} className="text">
           The Railway Station at Jamshedpur is known as Tatanagar and is well connected by Trains from Alleppy, Bangalore, Bhubaneswar, Chennai, Delhi, Guwahati, Kolkata (Howrah), Mumbai, Patna and Pune. The nearest airports to Jamshedpur are Kolkata and Ranchi. The Journey will take approximately 3.5 hours to 4 hours to reach Jamshedpur from Kolkata by train and 2.5 hours to 3 hours from Ranchi by road.
<br />
<br />
XLRI Campus is about 7 kms from the Tatanagar Railway Station and can safely be reached by auto - rickshaws or taxis round-the-clock at a reasonable charge of Rs. 120/- and Rs. 200/- respectively (approximate rates). XLRI is located near the Jubliee Park in the Circuit House Area (East). The campus has two gates - one opens to the Marine Drive and the other to CH Area. XLRI campus can be approached from either of the gates.
            </Typography>
          </Box>
        </Container>
        </Box>
    </>
  )
}
