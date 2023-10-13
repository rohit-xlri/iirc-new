import React from 'react'

import { Container, Typography,Box,ImageList, ImageListItem, } from "@mui/material"

const itemData = [
    {
      img: require("../../../components/assets/jsr1.png"),
    },
    {
        img: require("../../../components/assets/jsr2.png"),
      },
      {
        img: require("../../../components/assets/jsr3.png"),
      },
      {
        img: require("../../../components/assets/jsr4.png"),
      },
      {
        img: require("../../../components/assets/jsr5.png"),
      },
      {
        img: require("../../../components/assets/jsr6.png"),
      },
      {
        img: require("../../../components/assets/jsr7.png"),
      },
      {
        img: require("../../../components/assets/jsr8.png"),
      },
      {
        img: require("../../../components/assets/jsr9.png"),
      },
    
  ];

export default function LocalInformation() {
  return (
    <>
    <Container maxWidth="xl" sx={{ py: "70px","@media (max-width: 450px)": {
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
           LOCAL INFORMATION
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", gap:"50px", mt:"50px", alignItems:"center",  "@media (max-width: 900px)": {
                flexDirection:"column-reverse",
                "@media (max-width: 450px)": {
                  mt:"20px"
                 }
              }}}>
           
            <Typography sx={{ fontSize: "16px", color: "#2d2d2d",textAlign:"justify","@media (max-width: 900px)": {
               fontSize:"14px"
          }
          }} className="text">
            Jamshedpur or Tatanagar is the largest and most populous city in Jharkhand and the first planned industrial
city in India. It is a Notified Area Council and Municipal Corporation and also the headquarter of the East
Singhbhum district. It is a popular tourist destination known for its forests, ancient temples and royal
palaces. It was founded by Jamsetji Tata, founder of the Tata Group, and was named after him. It was
established in 1919.
              <br />
              <br />
              Jamshedpur was ranked as the cleanest city of India in 2020 by Swach Survekshan. The city is also ranked
as 2nd in India in terms of quality of life. Jamshedpur is the 84th fastest growing city in the world according
to City Mayors Foundation. It is the headquarters of the East Singhbhum district of Jharkhand and is the 36th
– largest urban agglomeration and 72nd largest city in India by population. It is one of the first Smart Cities
in India along with Naya Raipur.
              <br />
              <br />
              Jamshedpur has a number of popular tourist destinations, including Jubilee Park, Dalma Wild Life Sanctuary
Dimna Lake,Tata Steel Zoological Park, JRD Tata Sports Complex, and The Russi Modi Centre of
Excellence.
<br />
              <br />
              For more on Tourist attraction around Jamshedpur, please refer to following website
              <br />
              <br />
              <a href="https://jamshedpur.nic.in/tourist-places-2/tourist-places/" style={{textDecoration:"none", color:"#2d2d2d"}} target="_blank" rel="noopener noreferrer">https://jamshedpur.nic.in/tourist-places-2/tourist-places/</a>
              <br />
            </Typography>
             <Box sx={{ maxWidth:"50%",  "@media (max-width: 900px)": {
                maxWidth:"100%"
              } }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item,i) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{borderRadius:"10px"}}
            />
          </ImageListItem>
        ))}
      </ImageList>
            </Box>
          </Box>
        </Container>
    </>
  )
}
