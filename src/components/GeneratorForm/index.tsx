import { Container } from "./styles";
import SliderComponent from "../SliderComponent";
import CheckboxComponent from "../CheckboxComponent";
import StrengthPassword from "../StrengthPassword";
import ButtonComponent from "../ButtonComponent";

const GeneratorForm = () => {

  const handleSubmitForm = () => {
    console.log('enviou');
  }

  return(
    <Container>
      <form>
        <SliderComponent 
          label="Character Length"
          max={20}
          min={0}
          defaultValue={10}
        />

        <CheckboxComponent 
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