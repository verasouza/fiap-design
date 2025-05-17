import styled from "styled-components";
import { commonFlexPageStyle } from "../../assets/styles/globalStyle";
import { colors } from "../../assets/styles/colors";
import { radius } from "../../assets/styles/radius";

export const Container = styled.div`
  ${commonFlexPageStyle}
`

export const SignInArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 541px;
  padding: 55px 44px;
  border-radius: ${radius.larger};
  border: 1px solid ${colors.highlight};
  gap: 1rem;
  margin-top: 3rem;
`  

    