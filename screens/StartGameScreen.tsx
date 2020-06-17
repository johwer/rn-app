import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  return (
    <StyledScreen>
      <StyledTitle>Start a New Game!</StyledTitle>
      <Card>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} />
        <Text>Select a Number</Text>
        <StyledButtonContainer>
          <StyledButton>
            <Button title="Reseet" onPress={() => {}} color={Colors.primary} />
          </StyledButton>
          <StyledButton>
            <Button title="Confirm" onPress={() => {}} color={Colors.accent} />
          </StyledButton>
        </StyledButtonContainer>
      </Card>
    </StyledScreen>
  );
};
  
const StyledScreen = styled.View`
  padding: 10px;
  align-items: center;
  background: orange;
`

/*  const StyledInputContainer = styled.View`
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
` */
const StyledButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 15px;
  background-color: blue;
`

const StyledButton = styled.View`
  width: 100px;
  color: black;
  font-size: 20px;
  margin-vertical: 10px;
`


const StyledTitle = styled.Text`
  color: black;
  font-size: 20px;
  margin-vertical: 10px;
`

const styles = StyleSheet.create({
  /*StyledScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  StyledTitle: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10
  },
  StyledInputContainer: {
    width: 300,
    maxWidth: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  StyledButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'blue',
  }*/
  input: {
    width: 100
  } 
}); 


export default StartGameScreen;