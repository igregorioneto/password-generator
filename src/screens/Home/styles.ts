import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div.generator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  h1 {
    font-size: 18px;
    color: '#676271';
    margin-bottom: 15px;
  }
`;