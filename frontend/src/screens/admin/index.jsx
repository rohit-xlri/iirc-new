import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";

import {
    Container,
    Paper,
    Button,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Stack,
    CircularProgress,
  } from "@mui/material";
  import LoginDialogBox from "../../components/loginDialogBox";

export default function Admin() {

    const [open, setOpen] = useState(false)
    const [payments, setPayments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isUpdateLoading, setIsUpdateLoading] = useState(false)

    const updatePayment = async (e) => {
      try {
        setIsUpdateLoading(true)
        const response = await axios.get("/api/v1/payment/updateStatus");
        alert(response.data?.message)
      } catch (error) {
        console.log(error);
      } finally{
        fetchPayments()
        setIsUpdateLoading(false)
      }
    };

    const fetchPayments = async (e) => {
        try {
            setIsLoading(true)
            const response = await axios.get(`/api/v1/payment/allPayments`);
            setPayments(response.date?.payments)
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
        finally {
            setIsLoading(false)
        }
      };

      const checkAuth = (e) => {
        if(localStorage.getItem("adminAuth")!=="authenticate"){
            setOpen(true)
        }
      };

      const logoutHandler = (e) => {
        localStorage.setItem("adminAuth", "");
        setOpen(true)
      };

      useEffect(() => {
        checkAuth()
       }, [])
      
      useEffect(() => {
        fetchPayments()
       }, [])

  return (
    <>
      <LoginDialogBox open={open} setOpen={setOpen}/>
       <Container
        maxWidth="xl"
        sx={{
          py: "70px",
          "@media (max-width: 450px)": {
            py: "30px",
          },
        }}
      >
        <Box sx={{display:"flex", justifyContent:"space-between",mt:"20px","@media (max-width: 1405px)": {
            mt: "30px",
          },}}>
            <Button
            onClick={updatePayment}
            endIcon={isUpdateLoading?<CircularProgress sx={{color:"white"}} />:""}
            disabled={isUpdateLoading}
            loadingPosition="end"
            variant="contained"
          >
            update
          </Button>
          <Button variant="contained" onClick={logoutHandler}>
            Logout
          </Button>
        </Box>
    <Typography textAlign={"center"} sx={{fontSize:"24px", fontWeight:"600", my:"40px", color:"#2d2d2d"}}>ALL PAYMENTS</Typography>
    {isLoading  ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:"100vh"
            }}
          >
            <CircularProgress />
          </Box>
        ) : 
        <>
            <TableContainer sx={styles.table} component={Paper}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead sx={{ background: "#D3D3D3" }}>
                  <TableRow>
                    <TableCell sx={styles.headTxt}>S.No.</TableCell>
                    <TableCell sx={styles.headTxt} align="right">Name</TableCell>
                    <TableCell sx={styles.headTxt} align="right">
                      Email
                    </TableCell>
                    <TableCell sx={styles.headTxt} align="right">
                      Amount
                    </TableCell>
                    <TableCell sx={styles.headTxt} align="right">
                     Payment Status
                    </TableCell>
                    <TableCell sx={styles.headTxt} align="right">
                      Created At
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments?.map((row, i) => (
                    <TableRow
                      key={row?._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={styles.bodyTxt} component="th" scope="row">
                        {i + 1}.
                      </TableCell>
                      <TableCell sx={styles.bodyTxt} align="right">
                        {row?.name}
                      </TableCell>
                      <TableCell sx={styles.bodyTxt} align="right">
                      {row?.email}
                      </TableCell>
                      <TableCell sx={styles.bodyTxt} align="right">
                        {row?.amount}
                      </TableCell>
                      <TableCell sx={styles.bodyTxt} align="right">
                      {row?.status}
                      </TableCell>
                      <TableCell sx={styles.bodyTxt} align="right">
                      <Moment format="DD-MM-YYYY">{row?.createdAt}</Moment>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={styles.MobileBox}>
              {payments?.map((row, i) => (
                <Paper elevation={3} sx={styles.mobileCard}>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>S.No.</Typography>
                    <Typography sx={styles.txt2}>{i + 1}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>Name</Typography>
                    <Typography sx={styles.txt2}>{row?.name}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>Email</Typography>
                    <Typography sx={styles.txt2}>
                    {row?.email}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>Amount</Typography>
                    <Typography sx={styles.txt2}>{row?.amount}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>Status</Typography>
                    <Typography sx={styles.txt2}>{row?.status}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Typography sx={styles.txt1}>Created At</Typography>
                    <Typography sx={styles.txt2}><Moment format="DD-MM-YYYY">{row?.createdAt}</Moment></Typography>
                  </Stack>
                </Paper>
              ))}
            </Box>
            </>
}
    </Container> 
    </>
  )
}

const styles = {
    headTxt: {
      fontSize: "16px",
      fontWeight: "600",
    },
    bodyTxt: {
      fontSize: "15px",
      wordWrap: "break-word",
      maxWidth: "200px",
    },
    table: {
      "@media (max-width: 1000px)": {
        display: "none",
      },
    },
    MobileBox: {
      "@media (min-width: 1000px)": {
        display: "none",
      },
    },
    mobileCard: {
      p: 2,
      my: 1,
    },
    txt1: {
      fontWeight: "600",
      minWidth: "120px",
    },
    txt2: {
      wordWrap: "break-word",
      maxWidth: "180px",
    },
  };