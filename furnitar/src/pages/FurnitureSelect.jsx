import { Grid } from "@mui/material";
import React from "react";
import FurnitureCard from "../component/FurnitureCard";
import "./SelectType.css";
import { useLocation } from "react-router-dom";

export default function FurnitureSelect(props) {
  const location = useLocation();
  console.log(location.state.data);
  return (
    <>
    
      <h1>Furniture Selection</h1>
      <Grid container spacing={0}>
        {location.state.data.length === 0 ? (
          <h1 style={{dispay:"contents"}}>No Furniture Found</h1>
        ) : (
          location.state.data.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
                <FurnitureCard data={item} />
            </Grid>
        ))
        )}
        {/* <Grid item xs={12} md={4}>
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
        </Grid> */}
      </Grid>
    </>
  );
}
