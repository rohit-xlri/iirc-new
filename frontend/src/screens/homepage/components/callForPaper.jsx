import React from "react";
import { Container, Typography,Box } from "@mui/material";

export default function CallForPaper() {
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
          CALL FOR PAPERS
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#2d2d2d",
            mt: "40px",
            textAlign: "justify",
            "@media (max-width: 900px)": {
              fontSize: "14px",
              "@media (max-width: 450px)": {
                mt: "20px",
              },
            },
            }} className="text"
        >
            We at XLRI-Xavier School of Management in Jamshedpur, India are celebrating the 75th anniversary of the founding of our institute. XLRI, the first institution of higher education in the country to impart education in the field of human resource management and industrial relations has witnessed several things changing over the past 75 years. However, there are many which have not changed and the labour and industrial relations research at XLRI is one of them that got refined without losing its vitality and solemnity.
            <br /><br />
            Today, as levels of inequality of wealth and opportunities reflect those of several decades ago, in the time of uncertainty caused by the economic recession, pandemic and political hostilities, labour research is more important than ever. However, with the changes in every sphere of work and its varying labour market effects the research focus, motivation, agenda, questions, and objectives to create a democratic industrial society based on inclusive growth have changed.
            <br /><br />
            To mark 75 years of our labour and industrial relations research and education, we at XLRI Xavier School of Management in Jamshedpur, India with Leeds University Business School, Leeds, the UK are calling on the academic and research fraternity to submit their chosen work to be presented at the two-day International Industrial Relations Conference at XLRI in Jamshedpur from 08-09 January 2024.
            <br /><br />
            Our invitation is to scholars from disciplines such as industrial relations, law, economics, sociology, psychology, political science, history, labour geography, and anthropology who have produced a range of evidence-based empirical, conceptual and theoretical research to advance theory and contribute to policy-making.

            {/* <br /><br />
            Authors who would like their abstract of papers to be considered for presentation in the two-day conference should submit them to irconference@xlri.ac.in through e-mail by 15 August 2023. The submission of abstracts should comply with the following guidelines: Abstracts in English should be no longer than 500 words and cover research question(s), methodology and findings with a maximum of four keywords.
            <br /><br />
            The authors of selected abstracts will be informed by 15 September 2023 and invited to submit their papers by 15 December 2023 for presentation at the two-day international conference at XLRI Xavier School of Management in Jamshedpur, India. */}
            Best papers from the 10 tracks will get published in edited volumes (books) by Routledge International.



        </Typography>
      </Container>
      </Box>
    </>
  );
}
