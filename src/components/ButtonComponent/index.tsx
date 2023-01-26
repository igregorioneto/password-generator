import { Box, Button } from "@mui/material";
import { Container } from "./styles";
import SendIcon from '@mui/icons-material/Send';

interface IButtonComponent {
  onSubmitButton: () => void;
}

const ButtonComponent = ({ onSubmitButton }: IButtonComponent) => {

  const handleSubmit = () => {
    onSubmitButton();
  }

  return(
    <Container>
      <Box>
        <Button onClick={handleSubmit} variant="outlined" endIcon={<SendIcon />}>
          Generate
        </Button>
      </Box>  
    </Container>
  );
}

export default ButtonComponent;