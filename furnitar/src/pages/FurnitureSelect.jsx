import { Grid } from "@mui/material";
import React from "react";
import FurnitureCard from "../component/FurnitureCard";
import './SelectType.css'

export default function FurnitureSelect() {
  return (
    <>
    <h1>Furniture Selection</h1>
    <Grid container spacing={0}>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureCard />
      </Grid>
    </Grid>
    </>
  );
}
