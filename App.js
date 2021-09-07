import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
   const [secondText , setSecondText] = useState('')

  const InputHandler=(enteredText) => {
    setSecondText(enteredText)
  }


  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text>{secondText}</Text>
      <TextInput placeholder="type your text in here" style={{ borderColor: 'black' }}
        onChangeText={InputHandler }/>
      <Button title ='change text' onPress={()=>{setOutputText('text changed ! ')}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
