import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, StatusBar, ImageBackground, Alert } from 'react-native';

export default function Login({ navigation }) {


  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

  var handleSubmitSignUp = async (email) => {

    const emailCheck = regex.test(email);

    if (emailCheck == false) {
      Alert.alert(
        'Email invalide',
        'veuillez entrer un Email valide :)',
        [


          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    } else {
      const data = await fetch("http://172.17.190.54:3000/sign-up", {
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


  }




  var handleSubmitSignIn = async () => {
    const data = await fetch("http://172.17.190.54:3000/sign-in", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })
    const body = await data.json()
    console.log(body)
    if (body.result == true) {
      navigation.navigate("Accueil")
    } else {
      Alert.alert(
        'Email ou mot de passe invalide',
        'veuillez entrer un Email ou un mot de passe valide :)',
        [


          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }

  }


  return (

    <ImageBackground style={styles.container} source={require('../assets/anna.jpg')} >
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#dfe4ea" translucent={true} />
      <Text style={{ fontSize: 55, fontStyle: "italic", color: "#EDAA27", marginBottom: 30 }}> Diner Access </Text>

      <TextInput
        onChangeText={(e) => setSignUpFirstName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 15, borderRadius: 25 }}
        placeholder="Prénom"
      />

      <TextInput
        onChangeText={(e) => setSignUpLastName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 15, borderRadius: 25 }}
        placeholder="Nom"
      />

      <TextInput
        onChangeText={(e) => setSignUpEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 15, borderRadius: 25 }}
        placeholder="Email"
      />

      <TextInput
        secureTextEntry
        onChangeText={(e) => setSignUpPassword(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 30, backgroundColor: "white", paddingLeft: 15, borderRadius: 25 }}
        placeholder="Mot de passe"
      />

      <Button
        onPress={() => handleSubmitSignUp(signUpEmail)}
        title="Inscription"
        color="#EDAA27"
      />

      <TextInput
        onChangeText={(e) => setSignInEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 15, borderRadius: 25, marginTop: 30 }}
        placeholder="Email"
      />

      <TextInput
        onChangeText={(e) => setSignInPassword(e)}
        secureTextEntry
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 25, backgroundColor: "white", paddingLeft: 15, borderRadius: 25 }}
        placeholder="Mot de passe"
      />

      <Button
        onPress={() => handleSubmitSignIn()}
        title="Connexion"
        color="#EDAA27"
      />

    </ImageBackground>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



});

