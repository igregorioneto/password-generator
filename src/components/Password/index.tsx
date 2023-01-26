import { IconButton } from "@mui/material";
import { Container } from "./styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface IPassword {
  randomPassword: string;
}

const Password = ({randomPassword}: IPassword) => {
  return(
    <Container>
      <span className={`${randomPassword} ? '' : not-password`}>
        {randomPassword ? randomPassword : 'Px1$'}
      </span>
      <IconButton>
        <ContentCopyIcon />
      </IconButton>
    </Container>
  );
}

export default Password;