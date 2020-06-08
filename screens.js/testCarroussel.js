import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, Image, ScrollView, Dimensions} from 'react-native'
import {Card, Icon } from 'react-native-elements';
import { faHeart, faStar, faVideo} from './node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardStyleInterpolators } from "react-navigation-stack";

 const {width} = Dimensions.get("window");
 const card = [
   {
     uri : 'https://www.ahstatic.com/photos/1146_rsr003_00_p_1024x768.jpg' ,title : title, note: note
   },
   {
    uri : 'https://restaurantdupalaisroyal.com/wp-content/uploads/2020/02/Restaurant_du_Palais_Royal_RDC_11_GdeLaubier.jpg' ,title : title, note: note
  },
  {
    uri : 'https://www.ilristorante.fr/wp-content/uploads/2019/12/Il-ristorante-restaurant-italien.jpg' ,title : title, note: note
  },
  {
    uri : 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/577/209577/source/restaurant-h-vue-de-la-salle-bdb5e.jpg' ,title : title, note: note
  },
 ]

export default HomePage = () => {

  const [serch,setSearch] = useState('')
  

    return (
      <View style={styles.container}>
        <View style={{width: 1000, height: 50, backgroundColor: '#00CDC1', marginTop: 30}} >
          <Text style={{textAlign: "center", fontSize : 35, color : "white"}}>
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

             
              <ScrollView 
              horizontal = {true} pagingEnabled style = {{ width, height}}> 

              {/* {
                card.map((image, index) => (
                  <Image
                  key = {{index}}
                  source={{ uri : image}}
                  style={{ width, height, resizeMode: 'cover'}}
                )
                ) */}
    
                
               
                
              <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              /> 

            </ScrollView>
            </View>     
            
            <View style = {{ flex : 1, backgroundColor : 'white', paddingTop : 20}}>

              <Text style={{fontSize : 24, fontWeight  :'700', paddingHorizontal : 10, paddingBottom : 20}}>
                Meilleurs avis
              </Text>

            <View style = {{height : 130}}>
            <ScrollView 
              horizontal = {true}>
                
              <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />
          
                <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('./assets/resto.jpg')}
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
              source={require('./assets/resto.jpg')}
              style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
              name = "nom du restaurant"
            />

              <Image
              source={require('./assets/resto.jpg')}
              style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
              name = "nom du restaurant"
            />

              <Image
              source={require('./assets/resto.jpg')}
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
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('./assets/resto.jpg')}
                style = {{width : 250, height : 150,  marginTop : 20, marginRight : 8}}
                name = "nom du restaurant"
              />

                <Image
                source={require('./assets/resto.jpg')}
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
  
  const cards = StyleSheet.create({
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
  