import React from "react";
import styled from "styled-components";
import { node, string } from "prop-types";

/* Navigation
 *
 * A wrapper component for the app navigation, with slots for two actions and a title.
 */
const Navigation = ({ firstAction = null, title, lastAction = null }) => {
  return (
    <StyledNavigation>
      {firstAction}
      {title && (
        <StyledTitle>
          <h4>{title}</h4>
        </StyledTitle>
      )}
      {lastAction}
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  firstAction: node,
  lastAction: node,
  title: string,
};

const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-top: 24px;
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export default Navigation;
