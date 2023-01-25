import { Box, Rating } from "@mui/material";
import { Container } from "./styles";
import StarIcon from '@mui/icons-material/Star';
import { SyntheticEvent, useState } from "react";

const labels: { [index: string]: string } = {
  1: 'Useless+',
  2: 'Poor+',
  3: 'Good',
  4: 'Excellent',
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