import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, Image, ScrollView, Modal, Linking, TouchableOpacity } from 'react-native'
import dataResto from '../dataResto.json';
import restoTriche from '../restoTriche.json';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faHeart, faPhone, faMobileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import ImageModal from 'react-native-image-modal';

import {connect} from 'react-redux';




Favoris = (props) => {

const [search, setSearch] = useState('');
const [restoList, setRestoList] = useState([]);
const [showModal, setShowModal] = useState(false);
const [restoModal, setRestoModal] = useState('');
const [likeResto, setLikeResto] = useState(false);
const [restoLiked, setRestoLiked] = useState('')

var color = { color: '#f1c40f' }

var handleClick = (restoEnQuestion) => {
   setShowModal(true)
   console.log(restoEnQuestion)
   setRestoModal(restoEnQuestion)
}

if (likeResto) {
var colorLike = {color : "red"}
}else {
 var colorLike = {}
}



  return(

    <View style={styles.container}>
      <View style={{ width: 1000, height: 50, backgroundColor: '#001F5A', marginTop: 30 }} >
        <Text style={{ textAlign: "center", fontSize: 35, color: "#FFCB44" }}>
          Diner Access
          </Text>
      </View>

      <Modal visible={showModal} transparent={true} animationType="slide">
                      <View style={{backgroundColor : '#C9C7C7', flex : 1}}>

                     
                      <ScrollView>
                        <View style={{backgroundColor : '#FFE7DA',  padding : 25, borderRadius : 10, flex : 1, margin : 20}}>

                         
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

                          {/* <Text style={{marginBottom : 10, fontSize : 15}}>
                            Adresse : {restoModal.menu}
                          </Text> */}
          

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
                            <Button  color = "#001F5A" title='Fermer' onPress={() => setShowModal(!showModal)} />
                          </View>

                        </View>
                        </ScrollView>
                      </View>

                    </Modal> 

      <ScrollView >

      <View style={{ flex: 1, backgroundColor: '#FFF6F1', paddingTop: 20, marginLeft: 0, marginRight: 0 }}>
        

          
            {
              props.myRestos.map((resto, i) => {
                return (
                  <View style={{ borderWidth: 1, borderColor: '#CCCCCC' , marginLeft: 5, marginBottom : 10}}>

                    <Image
                      source={{uri: resto.img}}
                      style={{ width: 250, height: 150, justifyContent: "center" }}
                    />

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16, fontWeight : "bold" }}>
                      {resto.nom}
                    </Text>

                    <Text style={{ marginBottom: 10 , textAlign : "center", fontSize : 16 }}>
                      {resto.type}
                    </Text>

                    <View style={{ marginLeft: 8, alignItems : "center", marginBottom : 10 }}>
                        <FontAwesomeIcon icon={faTrash} type='delete' onPress={() => {props.deleteToFavoris(resto) }}/>
                      </View>

                   
                  </View>
                )
              })
            }
           
           </View>
          </ScrollView>
        

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  },
});

function mapStateToProps(state) {
  return {myRestos : state.wishList}
}

function mapDispatchToProps(dispatch) {
  return {
    deleteToFavoris: function(restoAdded) {
      console.log(restoAdded)
      dispatch({type : 'deleteResto',
    restoLiked : restoAdded})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favoris)