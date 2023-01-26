import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Container } from "./styles";
import { ChangeEvent, useState } from 'react';

interface ICheckbox {
  onCheckboxComponent: (key: string, value: boolean) => void;
  valueUppercase: boolean;
  valueLowercase: boolean;
  valueNumbers: boolean;
  valueSymbols: boolean;
}

const CheckboxComponent = ({
  onCheckboxComponent,
  valueUppercase,
  valueLowercase,
  valueNumbers,
  valueSymbols
}: ICheckbox) => {
  
  const handleChecked = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if(onCheckboxComponent) onCheckboxComponent(event.target.id,checked);
  }

  return(
    <Container>
      <FormGroup>
          <FormControlLabel 
            control={<Checkbox value={valueUppercase} id="uppercase" onChange={handleChecked}/>} 
            label="Include Uppercase Letters" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={valueLowercase} id="lowercase" onChange={handleChecked}/>} 
            label="Include Lowercase Letters" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={valueNumbers} id="numbers" onChange={handleChecked}/>} 
            label="Include Numbers" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={valueSymbols} id="symbols" onChange={handleChecked}/>} 
            label="Include Symbols" 
            className="checkbox"
          />
      </FormGroup>
    </Container>
  );
}

export default CheckboxComponent;