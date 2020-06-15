import React, { useState } from "react";
import { StyleSheet,
  Text,
  View,
  Button, 
  Image,
  ScrollView,
  Modal,
  Linking, 
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faHeart, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import ImageModal from 'react-native-image-modal';

import {connect} from 'react-redux';




import dataResto from '../dataResto.json';
import restoTriche from '../restoTriche.json';

HomePage = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [restoModal, setRestoModal] = useState('');
  const [likeResto, setLikeResto] = useState(false);

  var color = { color: '#f1c40f' }

  var handleClick = (restoEnQuestion) => {
     setShowModal(true)
     console.log(restoEnQuestion)
     setRestoModal(restoEnQuestion)
  }



 if (likeResto) {
  Alert.alert(
    'Ajouté aux Favoris',
    'Bon appétit :-)',
    [
      
     
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  );
 }
 

  return (


        <ImageBackground style={styles.container} source={require('../assets/anna.jpg')}>

                    <Modal visible={showModal} transparent={true} animationType="slide">
                      <View style={{backgroundColor : '#C9C7C7', flex : 1}}>

                     
                      <ScrollView>
                        <View style={{backgroundColor : '#f1f2f6',  padding : 25, borderRadius : 10, flex : 1, margin : 20}}>

                         
                           <View style={{justifyContent : "center"}}>
                                <ImageModal
                                    resizeMode="contain"
                                    imageBackgroundColor="#000000"
                                    style={{
                                      width: 270,
                                      height: 270, }}
                                      source={
                                        {uri: restoModal.img}}
                                
                                />
                            </View>

                          <Text  style={{fontSize : 30, marginBottom : 10, marginTop : 10, fontWeight : "bold"}}>
                          {restoModal.nom}
                          </Text>

                          <Text style={{marginBottom : 10,  fontSize : 15}}>
                            Spécialités : {restoModal.type}
                          </Text>


                          <Text style={{marginBottom : 10,  fontSize : 15, fontStyle : "italic"}}>
                            {restoModal.desc}
                          </Text>

                          <Text style={{marginBottom : 10, fontSize : 15}}>
                            Adresse : {restoModal.adresse}
                          </Text>

                          <Text style={{marginBottom : 10, fontSize : 15}}>
                            Horaires : {restoModal.horaires}
                          </Text>
               
               

                          <TouchableOpacity onPress={() => Linking.openURL(restoModal.site_url)}>
                                <Text style={{color: 'blue'}}>
                                  Visiter le site internet
                                </Text>
                          </TouchableOpacity>

                            <TouchableOpacity onPress={() => Linking.openURL(`tel:${restoModal.tel}`)
                             }>
                            
                               <View style={{flexDirection : "row", alignItems : "center" }}>

                                  <Text style={{marginBottom : 10, fontSize : 18,marginRight : 10, marginLeft : 40, marginTop : 10, color : 'red'}}>

                                  Cliquez ici pour reserver 

                                  </Text>  
                            

                                  <FontAwesomeIcon icon={faMobileAlt} style={{height : 10, width : 10}}/>

                               </View>

                          </TouchableOpacity>

                          <View style={{justifyContent : "flex-end", flex : 1}}>
                            <Button  color = "#EBA41B" title='Fermer' onPress={() => setShowModal(!showModal)} />
                          </View>

                        </View>
                        </ScrollView>
                      </View>

                    </Modal> 

                   

      <ScrollView  >
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: 20, marginLeft: 0, marginRight: 0 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, marginTop: 20, marginBottom: 20 }}>
            Les plus populaires
              </Text>

             

          <ScrollView horizontal={true}>
            {
              dataResto.restos.map((resto, i) => {
                return (
                  <View style={{ borderWidth: 0.2, borderColor: '#8E8E8E' , marginLeft: 5, marginBottom : 10, borderRadius : 10, backgroundColor : "#FFFFFF"}}>

                    <Image
                      source={{uri: resto.img}}
                      style={{ width: 250, height: 150, justifyContent: "center", borderRadius : 10 }}
                    />

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16, fontWeight : "bold" }}>
                      {resto.nom}
                    </Text>

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16 }}>
                      {resto.type}
                    </Text>

                    <View >

                      <View style={{ marginLeft: 8, alignItems : "center", marginBottom : 10 }}>
                        <FontAwesomeIcon icon={faHeart}  onPress={() => {props.addToFavoris(resto); setLikeResto(!likeResto) }}/>
                      </View>
                      <Button title=' En savoir plus' color="#EBA41B" onPress={() => handleClick(resto)} />
                      
                    </View>
                  </View>
                )
              })
            }
           

          </ScrollView>
        </View>

        <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: 20, marginLeft: 0, marginRight: 0 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, marginTop: 20, marginBottom: 20 }}>
            Les mieux Notés
              </Text>

             

          <ScrollView horizontal={true}>
            {
              restoTriche.tricheur.map((restaurant, i) => {
                return (
                  <View style={{ borderWidth: 0.2, borderColor: '#8E8E8E' , marginLeft: 5, marginBottom : 10, borderRadius : 10, backgroundColor : "#FFFFFF"}}>

                    <Image
                      source={{uri: restaurant.img}}
                      style={{ width: 250, height: 150, justifyContent: "center", borderRadius : 10  }}
                    />

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16, fontWeight : "bold" }}>
                      {restaurant.nom}
                    </Text>

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16 }}>
                      {restaurant.type}
                    </Text>

                    <View >

                      <View style={{ marginLeft: 8, alignItems : "center", marginBottom : 10 }}>
                        <FontAwesomeIcon icon={faHeart}  onPress={() =>{props.addToFavoris(restaurant);setLikeResto(!likeResto) }} />


                      </View>
                      <Button title=' En savoir plus' color="#EBA41B" onPress={() => handleClick(restaurant)} />
                      
                    </View>
                  </View>
                )
              })
            }
           

          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: "white"
  },
});
const cardstest = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardTmage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  cardText: {
    padding: 10,
    fontSize: 16
  }
})

function mapDispatchToProps(dispatch) {
    return {
      addToFavoris: function(restoAdded) {
        console.log(restoAdded)
        dispatch({type : 'addResto',
      restoLiked : restoAdded})
      }
    }
}

export default connect(
  null,
  mapDispatchToProps
) (HomePage)
