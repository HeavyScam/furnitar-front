import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#408CFF",
        }}
      >
        <Toolbar>
          <Button
            size="small"
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "1.5rem",
              fontFamily: "Inter",
              textTransform: "none",
            }}
            href="/"
          >
            FurnitAR
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
