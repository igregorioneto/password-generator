import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  background: ${props => props.theme.palette.primary.main};

  color: ${props => props.theme.palette.secondary.contrastText};

  span {
    font-size: 24px;
    margin-left: 15px;
    font-weight: bold;
  }

  button {
    svg {
      color: ${props => props.theme.palette.secondary.contrastText};
    }
  }

  .not-password {
    color: #686868;
  }
`;