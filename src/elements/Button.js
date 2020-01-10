import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  border:0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 28px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;  

  :hover {
    background: #e14f50;
  }

  :disabled {
    background: #eee;
  }
`


export default function Button({
  isDisabled,
  label
}) {
  return ( 
    <ButtonStyled disabled={isDisabled}>
      { label }
    </ButtonStyled>
  )
}
