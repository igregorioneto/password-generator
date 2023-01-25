import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 100%;
    height: 50px;

    color: ${props => props.theme.palette.secondary.main};
    border-color: ${props => props.theme.palette.secondary.main};

    &:hover {
      background: ${props => props.theme.palette.secondary.main};
      color: ${props => props.theme.palette.common.black};
      border-color: ${props => props.theme.palette.secondary.main};
    }
  }
`;