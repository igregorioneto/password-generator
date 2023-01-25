import { Button } from "@mui/material";
import { Container } from "./styles";
import { Box } from "@mui/system";

import SendIcon from '@mui/icons-material/Send';
import SliderComponent from "../SliderComponent";
import CheckboxComponent from "../CheckboxComponent";
import StrengthPassword from "../StrengthPassword";

const GeneratorForm = () => {
  return(
    <Container>
      <form >
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

        <Box>
          <Button variant="outlined" endIcon={<SendIcon />}>
            Generate
          </Button>
        </Box>  
      </form>
    </Container>
  );
}

export default GeneratorForm;