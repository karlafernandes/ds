import { string, oneOf } from "prop-types";
import React from "react";
import styled from "styled-components";

/*
 * Title
 */
const Title = ({ size = "big", ...props }) => {
  return size === "big" ? (
    <StyledTitleBig {...props} />
  ) : (
    <StyledTitleSmall {...props} />
  );
};

const StyledTitleBig = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
  display: inline-flex;
  justify-content: space-between;
`;

const StyledTitleSmall = styled.h2`
  margin-bottom: 16px;
  letter-spacing: -0.8px;
  display: inline-flex;
  justify-content: space-between;
`;

Title.propTypes = {
  size: string,
};

export default Title;
