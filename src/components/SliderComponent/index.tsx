import { Box, Slider } from "@mui/material";
import { Container } from "./styles";
import { useState } from "react";

interface ISlider {
  label: string,
  max: number,
  min: number,
  defaultValue: number,
  onSliderComponent: (value: number | number[]) => void,
  slider: number | number[]
}

const SliderComponent = (
  {label, max, min, defaultValue, onSliderComponent, slider}: ISlider
) => {
  const handleSlider = (event: Event, newValue: number | number[]) => {
    if(onSliderComponent) onSliderComponent(newValue);
    
  }

  return(
    <Container>
      <Box className="slider-info">
          <label htmlFor="slider">{label}</label>
          <span>{slider}</span>
      </Box>
      <Slider
        onChange={handleSlider}
        defaultValue={defaultValue} 
        aria-label="Default" 
        valueLabelDisplay="auto"
        max={max}
        min={min}
        className="slider"
      />
    </Container>
  );
}

export default SliderComponent;