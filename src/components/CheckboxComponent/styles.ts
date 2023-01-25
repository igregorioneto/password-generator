import styled from "styled-components";

export const Container = styled.div`

  div.MuiFormGroup-root {
    margin-bottom: 15px;

    label.checkbox {
      span.MuiButtonBase-root {
        color: ${props => props.theme.palette.secondary.main};
        margin-right: 15px;
      }
    }
  }  
`;