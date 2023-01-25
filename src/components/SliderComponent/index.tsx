import { Box, Slider } from "@mui/material";
import { Container } from "./styles";
import { useState } from "react";

interface ISlider {
  label: string,
  max: number,
  min: number,
  defaultValue: number,
}

const SliderComponent = (
  {label, max, min, defaultValue}: ISlider
) => {
  const [slider, setSlider] = useState<number | number[]>(defaultValue);

  const handleSlider = (event: Event, newValue: number | number[]) => {
    setSlider(newValue);
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