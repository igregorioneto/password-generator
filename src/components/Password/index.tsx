import { IconButton } from "@mui/material";
import { Container } from "./styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from "copy-to-clipboard";

interface IPassword {
  randomPassword: string;
}

const Password = ({randomPassword}: IPassword) => {
  const handleCopy = () => {
    copy(randomPassword);
  }

  return(
    <Container>
      <span className={randomPassword ? '' : 'not-password'}>
        {randomPassword ? randomPassword : 'Generate Password'}
      </span>
      <IconButton
        onClick={handleCopy}
      >
        <ContentCopyIcon />
      </IconButton>
    </Container>
  );
}

export default Password;