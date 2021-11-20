import { Grid } from "@mui/material";
import React from "react";
import FurnitureSelectCard from "../component/FurnitureSelectCard";

export default function SelectType() {
  return (
    <>
    <Grid container spacing={0}>
      <Grid item xs={12} md={4}>
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
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
    </Grid>
    </>
  );
}
