import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{
        backgroundColor: "#272435",
      }}>
          <Toolbar>
            <Typography variant="h6" component="div" style={{
        color: "#E704B3", fontWeight: "bold", fontSize: "1.5rem",
      }}>
              FurnitAR
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
