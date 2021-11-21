import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useHistory } from "react-router";

export default function MediaCard(props) {
  const history = useHistory();
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
    axios
      .post("https://furnitar.herokuapp.com/furnitureData", apd)
      .then(async (res) => {
        // console.log(res);
        await history.push({
          pathname: "/furniture-select",
          state: {
            data: res.data,
          },
        });
      })
      .catch((err) => {
        // console.log(err);
      });

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
        backgroundColor: "#2F2A4B",
      }}
    >
      <CardMedia component="img" height="200px" image={props.url} alt="SOFA" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "1.5rem",
            fontFamily: "Inter",
          }}
          align="center"
          component="div"
          id="category"
        >
          {props.type}
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
