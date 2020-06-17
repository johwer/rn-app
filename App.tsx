import React from 'react';
import styled from 'styled-components/native'
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const StyledRootView = styled.View`
  color: black;
  font-size: 18px;
`
