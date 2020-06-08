import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, ImageBackground, Alert,
  Modal,} from 'react-native';

export default function Login({ navigation }) {


  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);



  var handleSubmitSignUp = async () => {
    const data = await fetch("http://192.168.1.40:3000/sign-up", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `firstnameFromFront=${signUpFirstName}&lastnameFromFront=${signUpLastName}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}`
    })
    const body = await data.json()
    console.log(body)
    if (body.result == true) {
      navigation.navigate("Accueil")
    }
      
    }

    var handleSubmitSignIn = async () => {
      const data = await fetch("http://192.168.1.40:3000/sign-in", {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
      })
      const body = await data.json()
      console.log(body)
      if (body.result == true) {
        navigation.navigate("Accueil")
      }
        
    }
      
  

        //var myRegex = /[\w.+-]{1,64}@([a-zA-Z\d-]{2,252}\.[a-zA-Z\.]{2,6}){5,255}$

  return (


    <View style={styles.container}>
      <Text style={{ fontSize: 55, fontStyle: "italic", color: "#FFCB44" }}>Diner Access </Text>
      <Text></Text>
      <Text></Text>


      <TextInput
        onChangeText={(e) => setSignUpFirstName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Prénom"
      />

      <TextInput
        onChangeText={(e) => setSignUpLastName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Nom"
      />

      <TextInput
        onChangeText={(e) => setSignUpEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Email"
      />

      <TextInput
        secureTextEntry
        onChangeText={(e) => setSignUpPassword(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Mot de passe"
      />

      <Text></Text>

      <Button
        onPress={() => handleSubmitSignUp()}
        title="Inscription"
        color="#FFCB44"


      />
      <Text></Text>
      <Text></Text>

      <TextInput
        onChangeText={(e) => setSignInEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Email"
      />

      <TextInput
        onChangeText={(e) => setSignInPassword(e)}
        secureTextEntry
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5 }}
        placeholder="Mot de passe"
      />

      <Text></Text>

      <Button
        onPress={() => handleSubmitSignIn()}
        title="Connexion"
        color="#FFCB44"
      />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D1BD',
    alignItems: 'center',
    justifyContent: 'center',
  },



});

