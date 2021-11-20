import { Grid } from "@mui/material";
import React from "react";
import FurnitureSelectCard from "../component/FurnitureSelectCard";
import "./SelectType.css";
import { useLocation } from "react-router-dom";

export default function SelectType(props) {
  const location = useLocation();
  console.log(location.state.length);
  return (
    <>
      <h1>Select Type</h1>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Sofa"
            url ="https://user-images.githubusercontent.com/76126020/142725201-f4c9612c-dfa1-48c8-8f7f-115119d4be97.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Desk"
            url ="https://user-images.githubusercontent.com/76126020/142725201-f4c9612c-dfa1-48c8-8f7f-115119d4be97.png"
          />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <FurnitureSelectCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard />
        </Grid> */}
      </Grid>
    </>
  );
}
