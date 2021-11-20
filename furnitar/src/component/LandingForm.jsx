import React from 'react';
import './LandingForm.css'
import Button from "@mui/material/Button";

export default function LandingForm() {
    return (
        <>
      <div className='card flex flex-wrap content-center mt-24 mb-24'>
        <div className='card__front'>
            <h2>ENTER DIMENSIONS</h2>
          <form className='card__form ml-2'>
            <h3 className='mb-1 mt-8'>Length</h3>
            <input className='card__inputemail mt-1 mb-4' type='number' required/>
            <h3 className='mb-1 mt-8'>Breadth</h3>
            <input className='card__inputemail mt-1 mb-4' type='number' required/>
            <h3 className='mb-1 mt-8'>Height</h3>
            <input className='card__inputemail mt-1 mb-4' type='number' required/>
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
            fontFamily:"Inter",
          }}
          href="/select-type"  
        >
          SEARCH
        </Button>
          </form>
        </div>
      </div>
      </>
    )
}
