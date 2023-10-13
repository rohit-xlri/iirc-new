import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useNavigate, useLocation } from "react-router-dom";

const pages = [
  "Home",
  "About",
  "Attraction",
  "Tracks",
  "Fees",
  "Dates",
  "Submissions",
  "Committee",
  "Venue",
  "Faq",
  "Contact",
];

const navItems = [{ text: "", link: "" }];

function Navbar() {
  let navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [active, setActive] = useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(location.hash);

  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="./"
            sx={{
              //   mr: 2,
              display: { sm: "none", xs: "none", md: "none", lg: "flex" },
              // //fontFamily: "monospace",
              fontFamily:"revert",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            International Industrial Relations Conference 2024
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { md: "block", lg: "none" },
                zIndex: 0,
              }}
              PaperProps={{
                style: {
                  padding: "0px 20px",
                  minWidth: "250px",
                },
              }}
            >
              {/* {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </Button>
              ))} */}
              <a href="./#home" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#home" || location.hash === ""
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Home
                </Button>
              </a>

              <div className="mdropdown">
                <a
                  href="./#about-conference"
                  className="mdropbtn"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    endIcon={<ExpandMoreIcon sx={{ ml: "-8px" }} />}
                    sx={
                      location.hash === "#about-conference"
                        ? {
                            display: "inline-block",

                            fontWeight: "600",
                            color: "#1b4e9b",
                            fontSize: "13px",
                            textDecoration: "underline 3px",
                            textUnderlineOffset: "7px",
                          }
                        : {
                            display: "inline-block",
                            fontWeight: "600",
                            color: "#4d4d4d",
                            fontSize: "13px",
                            "&:hover": { color: "#bccf17" },
                          }
                    }
                  >
                    About
                  </Button>
                </a>
                <div className="mdropdown-content">
                  <a
                    href="./#about-conference"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      Conference
                    </Button>
                  </a>
                  <a
                    href="./#about-institute"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      Institute
                    </Button>
                  </a>
                  {/* <a href="./#about-poms" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      Poms
                    </Button>
                  </a> */}
                  {/* <a
                    href="./#about-highlights"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      highlights
                    </Button>
                  </a> */}
                </div>
              </div>
              {/* <a href="./#attraction" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#attraction"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Attraction
                </Button>
              </a> */}
              <a href="./#tracks" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#tracks"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Tracks
                </Button>
              </a>
              <a href="./#fee" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#fee"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Fees
                </Button>
              </a>
              <a href="./#dates" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#dates"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Dates
                </Button>
              </a>
              <a href="./#paper" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#paper"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Submission
                </Button>
              </a>
              <div className="mdropdown">
                <a
                  href="./#steering"
                  className="dropbtn"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    endIcon={<ExpandMoreIcon sx={{ ml: "-8px" }} />}
                    sx={
                      location.hash === "#steering"
                        ? {
                            display: "inline-block",
                            fontWeight: "600",
                            color: "#1b4e9b",
                            fontSize: "13px",
                            textDecoration: "underline 3px",
                            textUnderlineOffset: "7px",
                          }
                        : {
                            display: "inline-block",
                            fontWeight: "600",
                            color: "#4d4d4d",
                            fontSize: "13px",
                            "&:hover": { color: "#bccf17" },
                          }
                    }
                  >
                    Committee
                  </Button>
                </a>
                <div className="mdropdown-content">
                  <a href="./#steering" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      Steering Committee
                    </Button>
                  </a>
                  <a href="./#chairs" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      CONFERENCE CHAIRS
                    </Button>
                  </a>
                  <a href="./#advisory" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      ADVISORY COMMITTEE
                    </Button>
                  </a>
                  <a href="./#pgrmcommitte" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }}
                    >
                      PROGRAMME COMMITTEE
                    </Button>
                  </a>
                </div>
              </div>
              <a href="./#venue" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#venue"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Venue
                </Button>
              </a>
              <a href="./#how-to-reach" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#how-to-reach"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  How to Reach
                </Button>
              </a>
              <a href="./#contact" style={{ textDecoration: "none" }}>
                <Button
                  sx={
                    location.hash === "#contact"
                      ? {
                          display: "block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          display: "block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Contact
                </Button>
              </a>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              //   mr: 2,
              display: { md: "flex", lg: "none" },
              flexGrow: 1,
              fontFamily: "revert",
              fontWeight: 700,
              //   letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
              fontSize: "18px",
              "@media (max-width: 500px)": {
                fontSize: "14px",
              },
            }}
          >
            International Industrial Relation Conference 2024
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={page===active?{ my: 2, display: 'block',fontWeight:"600" , color:"#1b4e9b", fontSize:"13px", textDecoration:"underline 3px", textUnderlineOffset:"7px"}:{ my: 2, display: 'block',fontWeight:"600" , color:"#4d4d4d", fontSize:"13px", "&:hover": {color:"#bccf17" },}}
              >
                {page}
              </Button>
            ))} */}
            <a href="./#home" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#home" || location.hash === ""
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Home
              </Button>
            </a>

            <div className="dropdown">
              <a
                href="./#about-conference"
                className="dropbtn"
                style={{ textDecoration: "none" }}
              >
                <Button
                  endIcon={<ExpandMoreIcon sx={{ ml: "-8px" }} />}
                  sx={
                    (location.hash === "#about-conference"||location.hash === "#about-institute"||location.hash === "#about-poms"||location.hash === "#about-highlights")
                      ? {
                          my: 2,
                          // display: "inline-block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          my: 2,
                          //  display: "inline-block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  About
                </Button>
              </a>
              <div className="dropdown-content">
                <a href="./#about-conference" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    Conference
                  </Button>
                </a>
                <a href="./#about-institute" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    Institute
                  </Button>
                </a>
                {/* <a href="./#about-poms" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    Poms
                  </Button>
                </a> */}
                {/* <a href="./#about-highlights" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    highlights
                  </Button>
                </a> */}
              </div>
            </div>
            {/* <a href="./#attraction" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#attraction"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Attraction
              </Button>
            </a> */}
            <a href="./#tracks" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#tracks"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Tracks
              </Button>
            </a>
            <a href="./#fee" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#fee"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Fees
              </Button>
            </a>
            <a href="./#dates" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#dates"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Dates
              </Button>
            </a>
            <a href="./#paper" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#paper"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Submission
              </Button>
            </a>
            <div className="dropdown" style={{ display: "none" }}>
              <a
                href="./#steering"
                className="dropbtn"
                style={{ textDecoration: "none" }}
              >
                <Button
                  endIcon={<ExpandMoreIcon sx={{ ml: "-8px" }} />}
                  sx={
                   (location.hash === "#steering"||location.hash === "#chairs"||location.hash === "#advisory"||location.hash === "#pgrmcommitte")
                      ? {
                          my: 2,
                          // display: "inline-block",
                          fontWeight: "600",
                          color: "#1b4e9b",
                          fontSize: "13px",
                          textDecoration: "underline 3px",
                          textUnderlineOffset: "7px",
                        }
                      : {
                          my: 2,
                          //  display: "inline-block",
                          fontWeight: "600",
                          color: "#4d4d4d",
                          fontSize: "13px",
                          "&:hover": { color: "#bccf17" },
                        }
                  }
                >
                  Committee
                </Button>
              </a>
              <div className="dropdown-content">
                <a href="./#steering" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    Steering Committee
                  </Button>
                </a>
                <a href="./#chairs" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    CONFERENCE CHAIRS
                  </Button>
                </a>
                <a href="./#advisory" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    ADVISORY COMMITTEE
                  </Button>
                </a>
                <a href="./#pgrmcommitte" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "600",
                      color: "#4d4d4d",
                      fontSize: "13px",
                      "&:hover": { color: "#bccf17" },
                    }}
                  >
                    PROGRAMME COMMITTEE
                  </Button>
                </a>
              </div>
            </div>
            <a href="./#venue" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#venue"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Venue
              </Button>
            </a>
            <a href="./#how-to-reach" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#how-to-reach"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                How to Reach
              </Button>
            </a>
            <a href="./#contact" style={{ textDecoration: "none" }}>
              <Button
                sx={
                  location.hash === "#contact"
                    ? {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#1b4e9b",
                        fontSize: "13px",
                        textDecoration: "underline 3px",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        my: 2,
                        display: "block",
                        fontWeight: "600",
                        color: "#4d4d4d",
                        fontSize: "13px",
                        "&:hover": { color: "#bccf17" },
                      }
                }
              >
                Contact
              </Button>
            </a>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Button key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </Button>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
