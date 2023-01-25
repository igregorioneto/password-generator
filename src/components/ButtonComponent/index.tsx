import { Box, Button } from "@mui/material";
import { Container } from "./styles";
import SendIcon from '@mui/icons-material/Send';

const ButtonComponent = () => {
  return(
    <Container>
      <Box>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Generate
        </Button>
      </Box>  
    </Container>
  );
}

export default ButtonComponent;