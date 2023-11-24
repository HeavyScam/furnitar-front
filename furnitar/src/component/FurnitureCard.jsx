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
        background:"linear-gradient(75deg, #171717 0%, #000 100%)",
        border : "1px solid #FFFFFF4F",
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
          <p>{props.data.product_name.substring(0, 50)}...</p>
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          style={{
            color: "#fff",
            fontWeight: "medium",
            fontSize: "1rem",
            fontFamily: "Inter",
          }}
          component="div"
        >
          <p>Price: {props.data.price}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ margin: "auto", marginBottom: "20px", marginTop: "-10px" }}
          style={{
            backgroundColor: "#ff4040",
            color: "#FFFFFF",
            border: 0,
            borderRadius: 8,
            height: 40,
            padding: "0 20px",
            fontFamily: "Inter",
          }}
          href={props.data.product_url}
        >
          <p>BUY NOW</p>
       
        </Button>
      </CardActions>
    </Card>
  );
}
