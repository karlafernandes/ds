import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { string } from "prop-types";
import { typography, colors } from "../../tokens";

/* MultilineInput
 *
 * Multiline input area, disabled by default, with button to enter editing mode
 */
const MultilineInput = ({ label, text }) => {
  const [isDisabled, setDisabled] = useState(true);
  return (
    <>
      <StyledTitleContainer>
        <Title size="small">
          <label htmlFor="addressInput">{label}</label>
        </Title>
        <Button isBorderless onClick={() => setDisabled(false)}>
          Change
        </Button>
      </StyledTitleContainer>
      <StyledTextarea
        rows="3"
        disabled={isDisabled}
        id="addressInput"
        name="textValue"
        onBlur={() => setDisabled(true)}
        defaultValue={text}
      />
    </>
  );
};

MultilineInput.propTypes = {
  label: string,
  text: string,
};

const StyledTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-family: ${typography.paragraph3FontFamily};
  font-size: ${typography.paragraph3FontSize};
  font-weight: ${typography.paragraph3FontWeight};
  line-height: ${typography.paragraph3LineHeight};
  letter-spacing: ${typography.paragraph3LetterSpacing};
  color: ${colors.onBackground500};
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default MultilineInput;
