import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

const Card = props => {
  return (
    <StyledInputContainer style={{...props.style}}>
      {props.children}
    </StyledInputContainer>
  );
};


const StyledInputContainer = styled.View`
  width: 300px;
  max-width: 80%;
  flex-direction: column;
  align-items: center;
  shadow-color: black;
  box-shadow: 10px 5px 5px black;
  shadow-radius: 6px;
  shadow-opacity: 0.26;
  elevation: 5;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`

export default Card;