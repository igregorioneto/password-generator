import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Container } from "./styles";
import { ChangeEvent, useState } from 'react';

interface ICheckboxValues {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const CheckboxComponent = () => {

  const [checkedUppercase, setCheckedUppercase] = useState<boolean>(false);
  const [checkedLowercase, setCheckedLowercase] = useState<boolean>(false);
  const [checkedLumbers, setCheckedNumbers] = useState<boolean>(false);
  const [checkedLymbols, setCheckedSymbols] = useState<boolean>(false);

  const handleChecked = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if(event.target.id === 'uppercase') setCheckedUppercase(value => !value);
    if(event.target.id === 'lowercase') setCheckedLowercase(value => !value);
    if(event.target.id === 'numbers') setCheckedNumbers(value => !value);
    if(event.target.id === 'symbols') setCheckedSymbols(value => !value);
  }

  return(
    <Container>
      <FormGroup>
          <FormControlLabel 
            control={<Checkbox value={checkedUppercase} id="uppercase" onChange={handleChecked}/>} 
            label="Include Uppercase Letters" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={checkedLowercase} id="lowercase" onChange={handleChecked}/>} 
            label="Include Lowercase Letters" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={checkedLumbers} id="numbers" onChange={handleChecked}/>} 
            label="Include Numbers" 
            className="checkbox"
          />
          <FormControlLabel 
            control={<Checkbox value={checkedLymbols} id="symbols" onChange={handleChecked}/>} 
            label="Include Symbols" 
            className="checkbox"
          />
      </FormGroup>
    </Container>
  );
}

export default CheckboxComponent;