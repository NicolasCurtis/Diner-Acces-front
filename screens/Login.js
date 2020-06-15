import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, ImageBackground } from 'react-native';

export default function Login({ navigation }) {


  const [signUpFirstName, setSignUpFirstName] = useState('');
  const [signUpLastName, setSignUpLastName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  
  var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  
    const emailCheck = (email) =>{
     console.log(regex.test(email))
   }
 var handleSubmitSignUp = async () => {
   if(emailCheck == false ){
     console.log("erreur")
   } else {
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
      

  return (



    <ImageBackground style={styles.container}  source={require('../assets/anna.jpg')} >
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#dfe4ea" translucent = {true}/>
      <Text style={{ fontSize: 55, fontStyle: "italic", color: "#EDAA27" }}> Diner Access </Text>
      <Text></Text>
      <Text></Text>


      <TextInput
        onChangeText={(e) => setSignUpFirstName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Prénom"
      />

      <TextInput
        onChangeText={(e) => setSignUpLastName(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Nom"
      />

      <TextInput 
        onChangeText={(e) => setSignUpEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Email"
      />

      <TextInput
        secureTextEntry
        onChangeText={(e) => setSignUpPassword(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Mot de passe"
      />

      <Text></Text>

      <Button 
        onPress={() => handleSubmitSignUp(signUpEmail)}
        title="Inscription"
        color="#EDAA27"
        


      />
      <Text></Text>
      <Text></Text>

      <TextInput
        onChangeText={(e) => setSignInEmail(e)}
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Email"
      />

      <TextInput
        onChangeText={(e) => setSignInPassword(e)}
        secureTextEntry
        style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 5, backgroundColor: "white", paddingLeft: 5, borderRadius: 25 }}
        placeholder="Mot de passe"
      />

      <Text></Text>

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

