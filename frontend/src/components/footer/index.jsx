import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80px", background: "#1a4e9b" }}>
        <Typography sx={{
          color: "#ddd", fontSize: "14px", "@media (max-width: 700px)": {
                  fontSize: "14px",
                 }}}>© Copyright XLRI Jamshedpur. All Rights Reserved</Typography>
    </Box>
    </>
  )
}
