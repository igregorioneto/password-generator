import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid #fff;
  margin-top: 15px;

  padding: 10px;

  background: ${props => props.theme.palette.primary.main};

  color: ${props => props.theme.palette.secondary.contrastText};
`;