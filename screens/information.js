import React from 'react';
import { 
    Text,
     View,
     TouchableOpacity,
     Linking,
     ScrollView,
    ImageBackground } from 'react-native';

import { Card } from 'react-native-elements';

import { Ionicons} from '@expo/vector-icons';

var icon = "logo-linkedin" ;

export default function information() {
  return (
    <ScrollView>
    <ImageBackground source={require('../assets/bool.jpg')} style={{marginTop: 25}}>
            <Text style={{padding: 20, fontWeight:"bold", fontStyle: "italic", fontSize:20, color: "#494949"}} >
                Diner Access a été imaginé par Nicolas Curtis et a été par la suite developpé avec la participation de Allan Kadous.
            </Text>
           
    <Card 
  title=' Curtis Nicolas'
  image={require('../assets/nico.jpg')}
  containerStyle={{backgroundColor:"#F7F7F7", borderRadius:15}}>
    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/nicolas-curtis-2a62961a0/")}>
                <Text style={{ color: 'blue' }}>
                <Ionicons name={icon} size={20} /> Mon linkedin 
                </Text>
    </TouchableOpacity>
    <Text style={{fontStyle: "italic"}}>
        A propos de moi : Anciennement Aide-Soignant, je suis en pleine reconversion professionnelle dans le milieu du développement web :)
    </Text>
</Card> 
<View style={{marginTop:20, marginBottom:25}}>
<Card 
  title=' Kadous Allan'
  image={require('../assets/Allan.jpg')}
  containerStyle={{backgroundColor:"#F7F7F7", borderRadius:15}}>
  
    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/allan-kadous-87141ab7/?fbclid=IwAR0DmipCt9jb0KCcdqWGl2u6pFhJERVZh9v9RguyU6X1bCtX8yPQTpGKn3U")}>
                <Text style={{ color: 'blue' }}>
                <Ionicons name={icon} size={20} /> Mon linkedin
                </Text>
                <Text style={{fontStyle: "italic"}}>
        A propos de moi : Je suis en pleine reconversion professionnelle dans le milieu du développement web :)
                </Text>
    </TouchableOpacity>
    <Text>

    </Text>
</Card> 
</View>

</ImageBackground>
</ScrollView>

)}