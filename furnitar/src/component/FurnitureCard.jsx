import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 600,
        margin: "auto",
        marginTop: "20px",
        marginBottom: "50px",
      }}
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={props.data.image_url}
        alt="Furniture"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          style={{
            color: "#408CFF",
            fontWeight: "bold",
            fontSize: "1rem",
            fontFamily: "Inter",
            marginTop: "10px",
          }}
          align="center"
          component="div"
        >
          {props.data.product_name.substring(0, 50)}...
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          style={{
            color: "#408CFF",
            fontWeight: "medium",
            fontSize: "1rem",
            fontFamily: "Inter",
          }}
          component="div"
        >
          Price: {props.data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ margin: "auto", marginBottom: "20px", marginTop: "-10px" }}
          style={{
            backgroundColor: "#408CFF",
            color: "#FFFFFF",
            border: 0,
            borderRadius: 8,
            height: 40,
            padding: "0 20px",
            fontFamily: "Inter",
          }}
          href={props.data.product_url}
        >
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
}
