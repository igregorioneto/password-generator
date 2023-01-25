import { Button, Checkbox, FormControlLabel, FormGroup, Rating, Slider } from "@mui/material";
import { Container } from "./styles";
import { Box } from "@mui/system";
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import SliderComponent from "../SliderComponent";
import CheckboxComponent from "../CheckboxComponent";

const labels: { [index: string]: string } = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Good',
  4: 'Excellent',
};

const GeneratorForm = () => {
  const value = 2;

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

        <div className="strength">
          <span>Strength</span>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ mr: 2 }}>{labels[value]}</Box>
            
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              max={4}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
        </div>

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