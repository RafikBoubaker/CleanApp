import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,

} from "react-native";
import Logo from "./assets/maid.png";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>CLEANING CHEFS</Text>
          <Text style={styles.h2}>
            Providing Best cleaning Services All Over Tunisia.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
       
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.onPress()}
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}










  // const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  //  const [secondText , setSecondText] = useState('')

  // const InputHandler=(enteredText) => {
  //   setSecondText(enteredText)
  // }


  // return (
  //   <View style={styles.container}>
  //     <Text>{outputText}</Text>
  //     <Text>{secondText}</Text>
  //     <TextInput placeholder="type your text in here" style={{ borderColor: 'black' }}
  //       onChangeText={InputHandler }/>
  //     <Button title ='change text' onPress={()=>{setOutputText('text changed ! ')}} />
  //     <StatusBar style="auto" />
  //   </View>
  // );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#17D9EC',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#175BEC',
    fontSize: 40,
    fontFamily: "Cochin"
  },
  h2: {
    color: '#5286F5',
    fontSize: 18,
    marginTop: 8,
     fontFamily: "Gill Sans"
  },
  image: {
  width: 300,
  height: 260,
  justifyContent: 'center',
  },
  buttonContainer: {
  backgroundColor: '#141BF5',
  borderRadius: 5,
  padding: 8,
  margin: 8,
},

});