import { Container } from "./styles";
import SliderComponent from "../SliderComponent";
import CheckboxComponent from "../CheckboxComponent";
import StrengthPassword from "../StrengthPassword";
import ButtonComponent from "../ButtonComponent";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { generatePassword } from "../../features/PasswordGenerator/password-generator-slice";

const GeneratorForm = () => {
  const passwordGenerator = useAppSelector((state) => state.passwordGenerator);
  const dispatch = useDispatch();

  const [slider, setSlider] = useState<number | number[]>(10);

  const [checkedUppercase, setCheckedUppercase] = useState<boolean>(false);
  const [checkedLowercase, setCheckedLowercase] = useState<boolean>(false);
  const [checkedNumbers, setCheckedNumbers] = useState<boolean>(false);
  const [checkedSymbols, setCheckedSymbols] = useState<boolean>(false);

  useEffect(() => {
    console.log(passwordGenerator.lowercase);
  }, [passwordGenerator])

  const handleSubmitForm = () => {
    dispatch(generatePassword());
  }

  const handleSliderComponent = (value: number | number[]) => {
    setSlider(value);
  }

  const handleCheckboxComponent = (key: string, value: boolean) => {
    if(key === 'uppercase') setCheckedUppercase(value);
    if(key === 'lowercase') setCheckedLowercase(value);
    if(key === 'numbers') setCheckedNumbers(value);
    if(key === 'symbols') setCheckedSymbols(value);
  }

  return(
    <Container>
      <form>
        <SliderComponent 
          label="Character Length"
          max={20}
          min={0}
          defaultValue={10}
          onSliderComponent={handleSliderComponent}
          slider={slider}
        />

        <CheckboxComponent
          onCheckboxComponent={handleCheckboxComponent}
          valueUppercase={checkedUppercase}
          valueLowercase={checkedLowercase}
          valueNumbers={checkedNumbers}
          valueSymbols={checkedSymbols}
        />  

        <StrengthPassword 
          strengthValue={3}
        />

        <ButtonComponent 
          onSubmitButton={handleSubmitForm}
        />
      </form>
    </Container>
  );
}

export default GeneratorForm;