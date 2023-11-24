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
        <Grid item xs={12} md={6}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Sofa"
            url="https://user-images.githubusercontent.com/76126020/207986417-7520d89e-b965-4a8c-b678-88b7bba78aa3.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Desk"
            url="https://user-images.githubusercontent.com/76126020/207987310-56b6e96c-a439-44ec-89b2-ca69291f80a7.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type= "Drawer"
            url="https://user-images.githubusercontent.com/76126020/207987556-2c6e6977-8b2a-4c5f-ae0c-e7d9a3a79bce.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Wardrobe"
            url="https://user-images.githubusercontent.com/76126020/207987872-93017bd7-f7f5-44aa-9a0b-3bd052dea443.png"
          />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Bed"
            url="https://user-images.githubusercontent.com/76126020/207987996-2aa627b2-5a44-4f7e-8ee3-9357a72e508a.png"
          />
        </Grid> */}
        {/* <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Lamp"
            url="https://user-images.githubusercontent.com/76126020/207988260-e6a536ae-1a98-4e2f-b5c3-51882a651437.png"
          />
        </Grid> */}
        
      </Grid>
    </>
  );
}
