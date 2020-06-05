import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, ImageBackground  } from 'react-native';

export default function Login(navigation) {

  
const [signUpFirstName, setSignUpFirstName] = useState('');
const [signUpLastName, setSignUpLastName] = useState('');
const [signUpEmail, setSignUpEmail] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');

const [signInEmail, setSignInEmail] = useState('');
const [signInPassword, setSignInPassword] = useState('');

const [userExists, setUserExists] = useState(false)

  return (
    
    
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontStyle : "italic", color : "white" }}>Diner Access </Text>
      <Text></Text>
      <Text></Text>
      

      <TextInput
      onChange={(e) => setSignUpFirstName(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom : 5, backgroundColor : "white",paddingLeft : 5  }}
      placeholder="Prénom"
      />

<TextInput
      onChange={(e) => setSignUpLastName(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1 , marginBottom : 5, backgroundColor : "white", paddingLeft : 5 }}
      placeholder="Nom"
      
      />

<TextInput
      onChange={(e) => setSignUpEmail(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1,marginBottom : 5, backgroundColor : "white", paddingLeft : 5  }}
      placeholder="Email"
      />

<TextInput
      onChange={(e) => setSignUpPassword(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1,marginBottom : 5, backgroundColor : "white", paddingLeft : 5  }}
      placeholder="Mot de passe"
      />

<Text></Text>

<Button
  onPress ={()=>navigation.navigate("mapScreens")}
  title="Inscription"
  color="#DC3F3F"
  
  
  />
<Text></Text>
<Text></Text>

<TextInput
      onChange={(e) => setSignInEmail(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom : 5, backgroundColor : "white" ,paddingLeft : 5}}
      placeholder="Email"
      />

<TextInput
      onChange={(e) => setSignInPassword(e.target.value)}
      style={{ width : 250, height: 50, borderColor: 'gray', borderWidth: 1 , marginBottom : 5, backgroundColor : "white", paddingLeft : 5 }}
      placeholder="Mot de passe"
      />

<Text></Text>

<Button
  onPress ={()=>navigation.navigate("mapScreens")}
  title="Connexion"
  color="#DC3F3F"
  />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CDC1',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  

});

