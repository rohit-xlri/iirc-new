import React from 'react'

import { Container, Typography,Box,Paper, Avatar} from "@mui/material"

const members = [{ name: "Prof. Asoo Vakharia", location: "University of Florida", img: "avatar1", },
  { name: "Prof. Dehai Liu", location: "Dongbei University of Finance and Economics", img: "avatar2", },
  { name: "Prof. Debjit Roy", location: "Indian Institute of Management, Ahmedabad", img: "avatar3", },
  { name: "Prof. Diana G. Ramirez-Rois", location: "State University of New York at Buffalo", img: "avatar4", },
  { name: "Prof. Gemma berenguer falguera", location: "Universidad Carlos III de Madrid", img: "avatar19" },
  { name: "Prof. Gyula Vastag", location: "Corvinus University of Budapest", img: "avatar5", },
  { name: "Prof. Prashnat Chintapalli", location: "Ivey Business School at Western University", img: "avatar6", },
  { name: "Prof. Ravi Shankar", location: "IIT Delhi", img: "avatar7", },
  { name: "Prof. Rachna Shah", location: "University of Minnesota", img: "avatar8", },
  { name: "Prof. Rakesh Mallipeddi", location: "The Ohio State University", img: "avatar9", },
  { name: "Prof. Vinod Singhal", location: "Georgia Institute of Technology", img: "avatar10", },
  { name: "Prof. Milind Sohoni", location: "Indian School of Business", img: "avatar11", },
  { name: "Prof. Rajiv Misra", location: "XLRI Jamshedpur", img: "avatar12", },
  { name: "Prof. Samir Srivastava", location: "IIM Lucknow", img: "avatar13", },
  { name: "Prof. Sanjay Patro", location: "XLRI Jamshedpur", img: "avatar14", },
  { name: "Prof. Sriram Narayanan", location: "Michigan State University", img: "avatar15", },
  { name: "Prof. Subodha Kumar", location: "Temple University", img: "avatar16", },
  { name: "Prof. TAS Vijayaraghavan", location: "XLRI Jamshedpur", img: "avatar17", },
  { name: "Prof. Ujjal Mukherjee", location: "Gies college of Business, University of Illinois", img: "avatar18", },

]

export default function AdvisoryCommittee() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="advisory" maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
                 py:"30px"
                }  }}>
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
           CONFERENCE ADVISORY COMMITTEE
          </Typography>
          <Box sx={{display:"grid",  mt:"70px", alignItems:"stretched", gridTemplateColumns: "repeat(3,32%)",justifyContent:"space-between",gap:"20px","@media (max-width: 1000px)": {
                gap:"10px",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
              }}}>
                {
                  members?.map((e,i)=>{
                    return(
                      <>
                         <Paper elevation={3} sx={{p:1.5, borderRadius:"80px", display:"flex", justifyContent:"start", alignItems:"center", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px","@media (max-width: 1000px)": {
                            flexDirection:"column", borderRadius:"10px",
                            }}}>
                          <Avatar alt={e?.name} src={require(`../../../components/assets/advisoryCommittee/${e?.img}.jpg`)} sx={{ height: "80px", width: "80px" }} />
                              <Box sx={{flexGrow:1}}>
                              <Typography textAlign={"center"} sx={{fontSize:"18px","@media (max-width: 1000px)": {
                                fontSize:"14px", mt:1
                            }}}>{e?.name}</Typography>
                              <Typography textAlign={"center"} sx={{fontSize:"14px", color:"#8d8d8d","@media (max-width: 1000px)": {
                                fontSize:"12px"
                            }}}>({e?.location})</Typography>
                              </Box>
                          </Paper>
                      </>
                    )
                  })
                }
          </Box>
        </Container>
        </Box>
    </>
  )
}
