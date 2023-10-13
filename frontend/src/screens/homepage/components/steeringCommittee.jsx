import React from 'react'

import { Container, Typography,Box,Paper, Avatar} from "@mui/material";

const members = [
  { name: "Fr. Sebastian George, S J",designation:"Director", location: "XLRI, Jamshedpur", email:"sgeorge@xlri.ac.in", img: "avatar1", },
  { name: "Prof. Andy Charlwood", designation: "Professor of Human Resource Management", location: "Leeds University Business School, UK", email: "A.Charlwood@leeds.ac.uk", img: "avatar1", },
  { name: "Prof. Santanu Sarkar", designation:"Professor of Human Resource Management", location: "XLRI, Jamshedpur", email:"ssarkar@xlri.ac.in", img: "avatar1", },
  { name: "Prof. Arup Varma", designation: "Professor and Frank W. Considine Chair in Applied Ethics", location: "Quinlan School of Business", location1: "Loyola University, Chicago", email: "avarma@luc.edu", img: "avatar1", },
  { name: "Prof. R K Premarajan",designation:"Professor", location: "XLRI, Jamshedpur", email:"prem@xlri.ac.in", img: "avatar1", },
  { name: "Prof. Markus Helfen", designation: "Hertie School", location: "Berlin’s University of Governance Alexanderstrasse 3, Berlin", email: "m.helfen@hertie-school.org", img: "avatar1", },
  { name: "Prof. Takahiro Endo", designation: "CAPI Jarislowsky Chair ", location: "Peter B Gustavson Business School University of Victoria, Canada", email: "endo.takahiro@gmail.com", img: "avatar1", },
  { name: "Prof. Meichun Liu", designation: "Director", location: "Graduate Institute of Labor Research College of Social Science", location1: "National Chengchi University, Taiwan", email: "meicliu@nccu.edu.tw", img: "avatar1", },
]

export default function SteeringCommittee() {
  return (
    <>
      <Box sx={{ background: "rgb(213 237 252)" }}>
        <Container id="steering" maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
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
           CONFERENCE CHAIRS AND CONVENORS
          </Typography>
          <Box sx={{display:"grid",  mt:"70px", alignItems:"stretched", gridTemplateColumns: "repeat(4,23%)", justifyContent:"space-between", gap:"40px 10px","@media (max-width: 1200px)": {
                gridTemplateColumns: "repeat(3,32%)", gap:"10px",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
              }}}>
                 {
                  members?.map((e,i)=>{
                    return(
                      <>
                      <Paper elevation={3} sx={{p:4, borderRadius:"10px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", boxShadow: "rgba(0, 0, 0, 0.25) 0px 15px 25px","@media (max-width: 750px)": {
              p:2
              }}}>
                <Avatar alt="Fr S George, S J" src={require(`../../../components/assets/chairs/avatar${i+1}.png`)} sx={{height:"150px", width:"150px", border:"1px solid gray","@media (max-width: 750px)": {
               height:"100px", width:"100px"
              }}}/>
                <Typography textAlign={"center"} sx={{ mb:1, fontSize:"18px", mt:"20px","@media (max-width: 750px)": {
               fontSize:"14px"
              }}}>{e?.name}</Typography>
                <Typography textAlign={"center"} sx={{fontSize:"14px", color:"#8d8d8d","@media (max-width: 750px)": {
               fontSize:"12px"
                          }
                          }}>({e?.designation})<br />{e?.location}<br />{e?.location1}<br />Email : {e?.email}
              
              </Typography>
            </Paper>
                      </>
                      )})}
          </Box>
        </Container>
        </Box>
    </>
  )
}
