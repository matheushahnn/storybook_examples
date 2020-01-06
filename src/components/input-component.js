import React, { useState } from 'react';
import styled from "styled-components";

const InputComponentStyled = styled.div`
  {
    margin-bottom: 20px;
    height: 55px;
  }

  > .label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  > .label > .span {
    font-size: 12px;
    font-weight: normal;
    color: #999;
  }

  > .text {      
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 2px;  
    font-size: 16px;
    padding: 0 15px;
  }

  > .error {
    display: block;
    font-size: 10px;
    margin-top: 5px;
    color: #f05a5b;  
  }
`

export default function InputComponent() {

  return (
    <InputComponentStyled className="input-component">
      <label 
        className="label" 
        htmlFor="email"
      >E-MAIL *</label>

      <input 
        className="text"
        type="text" 
        id="email"
        name="email"
        placeholder="Seu melhor e-mail"
      />
    </InputComponentStyled>
  )
}