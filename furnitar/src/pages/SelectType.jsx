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
            url="https://user-images.githubusercontent.com/76126020/142725201-f4c9612c-dfa1-48c8-8f7f-115119d4be97.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Desk"
            url="https://user-images.githubusercontent.com/76126020/142737199-cada0e93-dbee-4125-ad61-6c76cb856254.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type= "Drawer"
            url="https://user-images.githubusercontent.com/76126020/142737301-021025d8-174c-4fd8-8aa0-8f49a06bb3d1.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Wardrobe"
            url="https://user-images.githubusercontent.com/76126020/142737413-49524911-d89f-45bc-8006-5f2a3327b281.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Bed"
            url="https://user-images.githubusercontent.com/76126020/142737345-cd3b9ea3-18d6-48b2-b4ab-d405ec5ad37e.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FurnitureSelectCard
            length={location.state.length}
            width={location.state.width}
            height={location.state.height}
            type="Lamp"
            url="https://user-images.githubusercontent.com/76126020/142737552-b8a52cea-529a-46eb-8e9b-8a86d1879fe2.png"
          />
        </Grid>
      </Grid>
    </>
  );
}
