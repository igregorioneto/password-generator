import { IconButton } from "@mui/material";
import { Container } from "./styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Password = () => {
  return(
    <Container>
      <span>PX10</span>
      <IconButton>
        <ContentCopyIcon />
      </IconButton>
    </Container>
  );
}

export default Password;