import React from "react";
import styled from "styled-components";
import { colors } from "../../tokens";

/* Hr
 *
 * A line to separate content
 */
const Hr = (props) => {
  return <StyledHr {...props} />;
};

export const StyledHr = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(12, 17, 24, 1);
  /* margin-bottom: 32px;
  margin-top: 32px; */
  opacity: 0.1;
`;

export default Hr;
