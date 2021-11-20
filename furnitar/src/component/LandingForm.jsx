import React, { useState } from "react";
import "./LandingForm.css";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';


export default function LandingForm() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const history = useHistory();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const dlength = document.getElementById("length").value;
    const dwidth = document.getElementById("width").value;
    const dheight = document.getElementById("height").value;
    // console.log(length, width, height);

    setLength(dlength);
    setWidth(dwidth);
    setHeight(dheight);
    history.push({
      pathname: '/select-type',
      state: {
        length: dlength,
        width: dwidth,
        height: dheight
      }
    })
  };

  return (
    <>
      <div className="card flex flex-wrap content-center mt-24 mb-24">
        <div className="card__front">
          <h2>ENTER DIMENSIONS</h2>
          <form className="card__form ml-2" onSubmit={HandleSubmit}>
            <h3 className="mb-1 mt-8">Length</h3>
            <input
              className="card__inputemail mt-1 mb-4"
              type="number"
              id="length"
              required
            />
            <h3 className="mb-1 mt-8">Breadth</h3>
            <input
              className="card__inputemail mt-1 mb-4"
              type="number"
              id="width"
              required
            />
            <h3 className="mb-1 mt-8">Height</h3>
            <input
              className="card__inputemail mt-1 mb-4"
              type="number"
              id="height"
              required
            />
            <Button
              size="small"
              sx={{ margin: "auto", marginBottom: "20px" }}
              style={{
                backgroundColor: "#E704B3",
                color: "#FFFFFF",
                border: 0,
                borderRadius: 8,
                height: 40,
                marginTop: "20px",
                padding: "0 20px",
                fontFamily: "Inter",
              }}
              // href="/select-type"
              type="submit"
            >
              SEARCH
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
