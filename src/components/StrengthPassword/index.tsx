import { Box, Rating } from "@mui/material";
import { Container } from "./styles";
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0: '',
  1: 'LOW',
  2: 'MEDIUM',
  3: 'STRONG',
  4: 'HARD',
};

interface IStrengthPassword {
  strengthValue: number;
}

const StrengthPassword = ({strengthValue}: IStrengthPassword) => {

  return(
    <Container>
      <Box className="strength">
          <span className="title">Strength</span>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {strengthValue !== null && (
              <>
                <Box sx={{
                  mr: 2,
                  fontSize: 24,
                  fontWeight: 'bold'
                }}>
                  {labels[strengthValue]}
                </Box>
                <Rating
                  size="large"
                  name="text-feedback"
                  value={strengthValue}
                  readOnly
                  precision={0.5}
                  max={4}
                  emptyIcon={
                    <StarIcon 
                      style={{ opacity: 0.9 }} 
                      fontSize="inherit" />} 
                />
              </>
            )}
          </Box>
        </Box>
    </Container>
  )
}

export default StrengthPassword;