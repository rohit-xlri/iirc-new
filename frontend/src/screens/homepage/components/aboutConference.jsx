import React from "react";
import { Container, Typography } from "@mui/material";

export default function AboutConference() {
  return (
    <div id="about-conference">
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
          ABOUT CONFERENCE
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
          With globalisation in the contemporary world rapidly changing its nature and form and the free market economy bringing in inequalities of wealth and opportunities, especially in the Global South, the world of work is fast changing. Driven by globalisation, global competition, technological advancements, the rise of information technology, re-engineering of business processes, demographic shifts, environmental concerns, and the growing disappearance of “the job” as a fixed bundle of tasks the changes are transforming the nature of work, the structure of the labour market and employment relations in every part of the globe including the Global South where spaces and people are already adversely impacted by contemporary capitalist globalisation. However, the neo-liberals by promoting a free market economy, especially in the Global South have caused much harm that Polanyi (1957) pointed to while warning us against relying too much on the economic interests of given classes in the explanation of history. 
          <br />
          <br />
          Global South portrays a deterritorialised geography (the decline of the nation-state) of capitalism’s externalities and means to account for a subjugated class within the boundaries of developed economies. In a postnational sense, it relates to an internal periphery and subaltern relational position (Mahler, 2017). With the meaning of work and job rapidly changing in the Global South, the inadvertent consequence of the neoliberal free-market ideal is the presence of labour who have either joined the ranks of the unemployed and are still seeking employment or have left the labour force altogether to run the risk of being trapped in long-lasting poverty or have faced the brunt of the changing world of work. As these changes hit precarious labour markets in the Global South more than anywhere else, the intense crisis causes joblessness, employment insecurity and insecure working conditions (Bayat, 2000), while posing a credible threat to decent work and social dialogue.<br />
          <br />

          As the impact of deregulation is more damaging in the Global South than elsewhere, Polanyi’s proposed developmental alternatives to liberalism are more effective in the South with the emergence of labour as a global social movement and labour movement assuming the form of transnational and cross-border solidarity campaigns (Ness, 2016; McCallum, 2013). As Marx and Weber analysed, the social bases of capitalist industrial society were organised around the productive economic activities of human beings and the modern forms of social solidarity started growing from a complex struggle between working classes and capital, aggravating conflict and social unrest (Woodcock, 2019). As the Marxian theory of socialism viewed classes as the outcome of struggles structured by objective economic, political and ideological conditions, the necessary consequence of capitalist development is the emergence of unutilised labour power that tend to socially organise in forms of class struggle (Baldwin, 1990).<br />
          <br />

          Today, as deep inequality surfaces, some of the significant trends in the changing world of work include the rise of the gig economy where a labour market is characterised by ‘control without contract’, increasing use of automation and artificial intelligence (AI) in the workplace posing challenges in terms of job displacement, skill gaps and replacement of human interface in jobs bringing back Luddism and fear of backlash due to joblessness in industrial society with a surplus supply of labour, increasing prevalence of flexible work arrangements, paid work shaping up in the Global South, the spread of temporary and insecure employment and rising precarity (Vallas and Schor, 2020; Graham and Hjorth, 2017; Woodcock and Graham, 2019). The necessity to examine how labour processes and changing labour market effects get unfolded in the Global South is more important than ever.
        </Typography>
        {/* <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#6d6d6d",
            mt:"50px"
            // textDecoration: "underline 5px #bccf17",
            // textUnderlineOffset: "15px",
          }}
        >
          Hybrid mode*
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#2d2d2d", mt:"10px","@media (max-width: 900px)": {
               fontSize:"14px"
              }}}>Participants are encouraged to attend the conference offline at XLRI Jamshedpur</Typography> */}
        <br />
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
          <b>References</b>
          <ul>
            <li>Baldwin, P. (1990). The politics of social solidarity: class bases of the European welfare state, 1875-1975. Cambridge University Press.</li>
            <li>Bayat, A. (2000). From `Dangerous Classes’ to `Quiet Rebels’: Politics of the Urban Subaltern in the Global South. International Sociology, 15(3), 533–557.</li>
            <li>Graham, M., Hjorth, I., & Lehdonvirta, V. (2017). Digital labour and development: impacts of global digital labour platforms and the gig economy on worker livelihoods. Transfer: European review of labour and research, 23(2), 135-162.</li>
            <li>Mahler, A. G. (2017). Global South. Oxford University Press.</li>
            <li>McCallum, J. K. (2013). Global unions, local power: The new spirit of transnational labor organizing. Cornell University Press.</li>
            <li>Ness, I. (2016). Southern insurgency: The coming of the global working class. Pluto Press.</li>
            <li>Polanyi, K. (1957). The Great Transformation: The Political and Economic Origins of Our Time, Beacon Press, Boston.</li>
            <li>Vallas, S., & Schor, J. B. (2020). What do platforms do? Understanding the gig economy. Annual Review of Sociology, 46, 273-294.</li>
            <li>Woodcock, J. (2019). Marx at the Arcade: Consoles, controllers, and class struggle. Haymarket Books.</li>
            <li>Woodcock, J., & Graham, M. (2019). The gig economy. A critical introduction. Cambridge: Polity.</li>
          </ul>
        </Typography>
      </Container>
    </div>
  );
}
