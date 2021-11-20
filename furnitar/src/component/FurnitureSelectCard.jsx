import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #2F2A4B 100%, #2F2A4B 100%)",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
  },
  button: {
    background: "linear-gradient(45deg, #E704B3 100%, #E704B3 100%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 20px",
  },
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
      style={{
        backgroundColor: "#2F2A4B",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/76126020/142725201-f4c9612c-dfa1-48c8-8f7f-115119d4be97.png"
        alt="SOFA"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{
            color: "#FFFFFF",
            marginLeft: "120px",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          component="div"
        >
          SOFA
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ margin: "auto", marginBottom: "20px" }}
          style={{
            backgroundColor: "#E704B3",
            color: "#FFFFFF",
            border: 0,
            borderRadius: 8,
            height: 40,
            padding: "0 20px",
          }}
        >
          SELECT
        </Button>
      </CardActions>
    </Card>
  );
}
