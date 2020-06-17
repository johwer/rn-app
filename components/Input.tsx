import React from 'react';
import styled from 'styled-components/native'


const Input = props => {
    return (
      <StyledInput {...props} style={{...props.style}} />
    );
  };
    
  const StyledInput = styled.TextInput`
    height: 30px;
    border-bottom-color: grey;
    border-bottom-width: 1;
    margin-vertical: 10px;
  `
export default Input;