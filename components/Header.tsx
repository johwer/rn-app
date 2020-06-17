import React from "react";
import styled from 'styled-components/native'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

const Header = props => {
  return (
    <StyledHeader>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 36px;
  background-color: ${ Colors.primary };
  align-items: center;
`
const StyledTitle = styled.Text`
  color: black;
  font-size: 18px;
`

export default Header;