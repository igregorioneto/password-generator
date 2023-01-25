import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;

  padding: 20px;

  background: ${props => props.theme.palette.primary.main};

  color: ${props => props.theme.palette.secondary.contrastText};
`;