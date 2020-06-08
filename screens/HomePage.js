import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, Image, ScrollView} from 'react-native'
import {Card } from 'react-native-elements';

export default HomePage = () => {

  const [serch,setSearch] = useState('')
  

    return (
      <View style={styles.container}>
        <View style={{width: 1000, height: 50, backgroundColor: '#A0A0A0', marginTop: 30}} >
          <Text style={{textAlign: "center", fontSize : 35, color : "#FFCB44"}}>
            Diner Access
          </Text>
        </View>

        <View style={{flexDirection  : "row",  marginTop : 35, paddingRight : 100}}>
          <View> 
            <TextInput
              onChange={(e) => setSearch(e.target.value)}
              style={{borderColor : "#D2D2D2",  borderWidth: 1, marginRight : 10, width  : 200, paddingLeft : 5, height : 35, backgroundColor : "#F4F4F4"}}
              placeholder="Rechercher ..."
           />
          </View>

        <View>
          <Button
             onPress={onPressLearnMore}
             title="OK"
             color="#C4C4C4"
          />
          </View>
    
        </View>
        
         <ScrollView> 
        
           <View style = {{ flex : 1, backgroundColor : 'white', paddingTop : 20}}>

              <Text style={{fontSize : 24, fontWeight  :'700', paddingHorizontal : 10, marginTop : 20}}>
                Les plus populaires
              </Text>

              <View style = {{height : 130}}>

                <ScrollView 
                horizontal = {true}>
                
                  <Image
                    source={require('../assets/resto.jpg')}
                    style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                    name = "nom du restaurant"
                  />

                    <Image
                    source={require('../assets/resto.jpg')}
                    style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                    name = "nom du restaurant"
                  />

                    <Image
                    source={require('../assets/resto.jpg')}
                    style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                    name = "nom du restaurant"
                  /> 

                </ScrollView>
               </View>    
             </View>

            <View style = {{ flex :1, backgroundColor : 'white', paddingTop : 20}}>

              <Text style={{fontSize : 24, fontWeight  :'700', paddingHorizontal : 10, paddingBottom : 20}}>
                Meilleurs avis
              </Text>

            <View style = {{height : 240, flex : 1 }}>
             

                <Card
                  
                  image={require('../assets/resto.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Nom du resto
                  </Text>
                  <Text style={{marginBottom: 10}}>
                   note
                  </Text>
                  

                </Card>
                
                
             
                <Card
                  
                  image={require('../assets/resto.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Nom du resto
                  </Text>
                  

                </Card>
          
                
                <Card
                  style = {{ height : 150,  marginTop : 20, marginRight : 8}}
                  image={require('../assets/resto.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Nom du resto
                  </Text>
                  

                </Card>

               
                <Card
                  style = {{ height : 150,  marginTop : 20, marginRight : 8}}
                  image={require('../assets/resto.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Nom du resto
                  </Text>
                  

                </Card>

            
          </View>    
        </View>

        
        <View style = {{ flex : 1, backgroundColor : 'white', paddingTop : 20}}>

            <Text style={{fontSize : 24, fontWeight  :'700', paddingHorizontal : 10, marginBottom : 20}}>
            Vous avez déjà recherché
            </Text>

            <View style = {{height : 130, }}>
            <ScrollView 
            horizontal = {true}>
            <Image
              source={require('../assets/resto.jpg')}
              style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
              name = "nom du restaurant"
            />

              <Image
              source={require('../assets/resto.jpg')}
              style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
              name = "nom du restaurant"
            />

              <Image
              source={require('../assets/resto.jpg')}
              style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
              name = "nom du restaurant"
            /> 

            </ScrollView>
            </View>    
        </View>     

        <View style = {{ flex : 1, backgroundColor : 'white', paddingTop : 20}}>

              <Text style={{fontSize : 24, fontWeight  :'700', paddingHorizontal : 10, marginBottom : 20}}>
                Vous avez déjà recherché
              </Text>

              <View style = {{height : 130, }}>
              <ScrollView 
              horizontal = {true}>
              <Image
                source={require('../assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('../assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('../assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              /> 

              </ScrollView>
              </View>    
              </View>     
              <Text></Text>

        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor : "white"
    },
  
  });
  
  const cardstest = StyleSheet.create({
    container: {
      marginTop : 20,
      backgroundColor: 'white'
      
    },
    
      card: {
        backgroundColor: '#FFF',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
        shadowColor : '#000',
        shadowOpacity:0.2,
        shadowRadius: 1,
        shadowOffset:{
          width:3,
          height:3
        }
      },
      cardTmage:{
        width:'100%',
        height:200,
        resizeMode:'cover'
      },
      cardText:{
        padding: 10,
        fontSize: 16
      }
    
    
  })