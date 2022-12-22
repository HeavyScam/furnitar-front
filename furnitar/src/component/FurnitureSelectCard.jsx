import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useHistory } from "react-router";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FFFFFF 100%, #FFFFFF 100%)",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
  },
  button: {
    background: "linear-gradient(45deg, #ff4040 100%, #ff4040 100%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 20px",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [furniture, setFurniture] = useState();
  console.log(props.length);
  const handleClick = () => {
    let apd;
    if (props.height) {
      apd = {
        length: Number(props.length),
        width: Number(props.width),
        height: Number(props.height),
        category: props.type.toLowerCase(),
      };
    } else {
      apd = {
        length: Number(props.length),
        width: Number(props.width),
        height: 5000,
        category: props.type.toLowerCase(),
      };
    }
    console.log(props.length, props.width, props.height);
    axios
      .post("http://localhost:3000/furnitureData", apd)
      .then(async (res) => {
        console.log(res);
        // setFurniture(res);
        await history.push({
          pathname: "/furniture-select",
          state: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(props.type);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        marginTop: "20px",
        marginBottom: "50px",
      }}
      style={{
        background: "linear-gradient(75deg, #171717 0%, #000 100%)",
        border : "1px solid #FFFFFF4F",
      }}
    >
      <CardMedia component="img" image={props.url} alt="SOFA" style={{zIndex:10}}/>
      <CardContent>
        {/* <Typography
          gutterBottom
          variant="h5"
          style={{
            color: "#408CFF",
            fontWeight: "525",
            fontSize: "1.5rem",
            fontFamily: "Inter",
            display: "hidden",
          }}
          align="center"
          component="div"
          id="category"
          
        >
          {props.type}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ margin: "auto", marginBottom: "20px" }}
          style={{
            backgroundColor: "#ff4040",
            color: "#FFFFFF",
            border: 0,
            borderRadius: 8,
            height: 40,
            padding: "0 20px",
            fontFamily: "Inter",
          }}
          type="submit"
          onClick={handleClick}
        >
          SELECT
        </Button>
      </CardActions>
    </Card>
  );
}
