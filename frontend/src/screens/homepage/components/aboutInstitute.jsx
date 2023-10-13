import React from "react";

import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";

const itemData = [
  {
    img: require("../../../components/assets/xlri1.jpg"),
  },
  {
    img: require("../../../components/assets/xlri2.jpg"),
  },
  {
    img: require("../../../components/assets/xlri3.jpg"),
  },
  {
    img: require("../../../components/assets/background.jpg"),
  },
  {
    img: require("../../../components/assets/institute.jpg"),
  },
  {
    img: require("../../../components/assets/xlri4.jpg"),
  },
];

export default function AboutInstitute() {
  return (
    <>
      <Box sx={{ background: "#d6ffe1" }} id="about-institute">
        <Container
          maxWidth="xl"
          sx={{
            py: "70px",
            "@media (max-width: 450px)": {
              py: "30px",
            },
          }}
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
            ABOUT THE HOST INSTITUTE
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              mt: "50px",
              "@media (max-width: 900px)": {
                flexDirection: "column",
                "@media (max-width: 450px)": {
                  mt: "20px",
                },
              },
            }}
          >
            {/* <img
              style={{ borderRadius: "10px", width: "auto", height:"100%", maxWidth:"50%" }}
              src={require("../../../components/assets/institute.jpg")}
              alt=""
            /> */}
            <Box
              sx={{
                width: "50%",
                "@media (max-width: 900px)": {
                  width: "100%",
                },
              }}
            >
              <ImageList variant="masonry" cols={2} gap={8}>
                {itemData.map((item, i) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderRadius: "10px" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#2d2d2d",
                textAlign: "justify",
                width: "50%",
                "@media (max-width: 900px)": {
                  width: "100%",
                  "@media (max-width: 900px)": {
                    fontSize: "14px",
                  },
                },
              }} className="text"
            >
              XLRI – Xavier School of Management (XLRI or formerly Xavier Labour
              Relations Institute) is a private business school run by the
              Society of Jesus (Jesuits) in Jamshedpur, Jharkhand, India. It was
              founded in 1949 in the steel city of Jamshedpur, as the oldest
              business school in India. The institute, currently in its 74th
              year, celebrates its Platinum Jubilee in 2024.
              <br />
              <br />
              XLRI is the recipient of the AACSB and the AMBA accreditations.
              XLRI is recognized amongst the best management institutes in
              India; it has been ranked ninth amongst Indian management
              institutes by the NIRF in 2023. It is also the first institution
              to conceive and create a technology enabled and interactive online
              executive education program. Over the years, XLRI has developed a
              distinct identity. The hallmark of this identity is not to walk on
              the beaten path, but to strike new routes; not to benchmark, but
              to be benchmarked; to be second to none, but to be the first
              torespond to the needs of the people and the nation; taking up
              tasks that are bold, but necessary, that which nobody has hitherto
              taken up. This enterprising and pioneering spirit can be witnessed
              throughout the history of XLRI. XLRI has always had and maintains
              a global outlook.
              <br />
              <br />
              XLRI offers a wide range of academic programs in the field of
              management education. These include Post Graduate Programmes in
              Business Management\Human Resource Management, XLRI - RBS Double
              Master’s Programme in Supply Chain Management &amp; Supply Chain
              Analytics, Doctoral Programme in Management, Doctoral Programme in
              Management for Practitioners, and Executive PG Programmes for
              working executives. In addition, XLRI actively is involved in
              training practitioners and academicians through Management
              Development Programmes, Faculty Development Programmes, and so on.
              <br />
              <br />
              For further details on XLRI please visit{" "}
              <a
                style={{ textDecoration: "none", color: "#2d2d2d" }}
                href="https://xlri.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://xlri.ac.in/
              </a>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
