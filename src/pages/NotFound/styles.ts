import styled from "styled-components";
import { commonFlexPageStyle } from "../../assets/styles/globalStyle";

export const Container = styled.div`
  ${commonFlexPageStyle}

  user-select: none;
  gap: 12px;

  img {
    height: 100px;
    width: auto;
    pointer-events: none;
  }
`;