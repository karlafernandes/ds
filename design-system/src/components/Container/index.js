import React from "react";
import styled from "styled-components";
import { colors } from "../../tokens";
import { string, node, arrayOf, oneOf } from "prop-types";

/* Container
 *
 * A wrapper for the page content with paddings
 */

const Container = ({
  children,
  padding = ["top", "bottom", "left", "right"],
  background,
}) => {
  return (
    <StyledContainer padding={padding} background={background}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  background: string,
  children: node,
  padding: arrayOf(oneOf(["top", "bottom", "left", "right"])),
};

const StyledContainer = styled.div`
  ${({ padding, background }) =>
    padding.map((p) => {
      const paddingValue = p === "to" ? "64px" : "40px";
      return `padding-${p}: ${paddingValue};`;
    })}
  display: flex;
  flex-direction: column;
  background: ${({ background }) => colors[background]};
`;

export default Container;
