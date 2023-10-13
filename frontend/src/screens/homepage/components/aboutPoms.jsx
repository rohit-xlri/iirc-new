import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function AboutPoms() {
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
        id="about-poms"
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
          ABOUT POMS INDIA CHAPTER
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
            mt: "50px",
            alignItems: "center",
            "@media (max-width: 900px)": {
              flexDirection: "column-reverse",
              "@media (max-width: 450px)": {
                mt: "20px",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#2d2d2d",
              textAlign: "justify",
              "@media (max-width: 900px)": {
                fontSize: "14px",
              },
            }} className="text"
          >
            The Production &amp; Operations Management Society (POMS) is an
            international professional organisation representing the interests
            of Production and Operations Management academicians and
            professionals from around the world. POMS India Chapter is a vibrant
            network of academicians and professionals in the POM discipline in
            India. The purpose of the POMS India chapter is to support the POMS
            mission to provide a forum for sharing knowledge, exchanging ideas,
            collaborating on research, improving instructional pedagogy and
            curriculum, and sharing best business practices among the Production
            and Operations Management community in India and the global POM
            community. Further, the chapter aims to contribute to the POMS
            mission of globalizing the discipline of POM.
            <br />
            <br />
            For more on POMS India Chapter, please refer to{" "}
            <a
              style={{ textDecoration: "none", color: "#2d2d2d" }}
              href="https://www.poms.org/chapters/india_chapter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.poms.org/chapters/india_chapter/
            </a>
          </Typography>

          <img
            style={{ width: "300px", borderRadius: "10px" }}
            src={require("../../../components/assets/poms.jpg")}
            alt=""
          />
        </Box>
      </Container>
    </>
  );
}
