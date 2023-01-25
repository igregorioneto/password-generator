import styled from "styled-components";

export const Container = styled.div`
  .slider-info {
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    span {
      font-size: 24px;

      color: ${props => props.theme.palette.secondary.main};
    }
  }

  .slider {
    color: ${props => props.theme.palette.secondary.main};

    span.MuiSlider-rail {
      color: ${props => props.theme.palette.common.black};
    }
    
    span.MuiSlider-thumb {
      color: ${props => props.theme.palette.common.black};
      border: 2px solid ${props => props.theme.palette.secondary.main};
    }
  }
`;