import React from "react";

import Fade from 'react-reveal/Fade';
// import Fade from '@mui/material/Fade';

import Main from "./components/main";
import AboutConference from "./components/aboutConference";
import AboutInstitute from "./components/aboutInstitute";
import AboutPoms from "./components/aboutPoms";
import ConferenceHighlights from "./components/conferenceHighlights";
import ConferenceAttraction from "./components/conferenceAttraction";
import CallForPaper from "./components/callForPaper";
import ConferenceTracks from "./components/conferenceTracks";
import RegistrationFee from "./components/registrationFee";
import ImportantDates from "./components/importantDates";
import PaperSubmission from "./components/paperSubmission";
import SteeringCommittee from "./components/steeringCommittee";
import ConferenceChairs from "./components/conferenceChairs";
import AdvisoryCommittee from "./components/advisoryCommittee";
import ProgrammeCommittee from "./components/programmeCommittee";
import VenueAccomodation from "./components/venueAccomodation";
import LocalInformation from "./components/localInformation";
import HowToReach from "./components/howToReach";
import Contact from "./components/contact";
import KeynoteSpeakers from "./components/keynoteSpeakers";

export default function Homepage() {

  return (
    <>
      <Main />
      <Fade >
        <AboutConference />
      </Fade>
      <Fade>
        <KeynoteSpeakers />
      </Fade>
      <Fade >
        <AboutInstitute />
      </Fade>
      {/* <Fade >
        <AboutPoms />
      </Fade> */}
      {/* <Fade >
        <ConferenceHighlights />
      </Fade> */}
      {/* <Fade >
        <ConferenceAttraction />
      </Fade> */}
      <Fade >
        <CallForPaper />
      </Fade>
      <Fade >
        <ConferenceTracks />
      </Fade>
      <Fade >
        <RegistrationFee />
      </Fade>
      <Fade >
        <ImportantDates />
      </Fade>
      <Fade >
        <PaperSubmission />
      </Fade>
      <Fade >
        <SteeringCommittee />
      </Fade>
      {/* <Fade >
        <ConferenceChairs />
      </Fade>
      <Fade >
        <AdvisoryCommittee />
      </Fade>
      <Fade >
        <ProgrammeCommittee />
      </Fade> */}
      <Fade >
        <VenueAccomodation />
      </Fade>
      <Fade >
        <LocalInformation />
      </Fade>
      <Fade >
        <HowToReach />
      </Fade>
      <Fade >
        <Contact/>
      </Fade>
    </>
  );
}
