import styled from "styled-components";

export const Container = styled.div`
  .strength {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 15px;
    background: ${props => props.theme.palette.common.black};

    span.title {
      font-size: 18px;
      font-weight: bold;

      color: ${props => props.theme.palette.primary.contrastText};
    }
  }
`;