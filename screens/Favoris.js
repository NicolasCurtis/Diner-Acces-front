import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Modal, Linking, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMobileAlt, faTrash, faUtensils } from '@fortawesome/free-solid-svg-icons'
import ImageModal from 'react-native-image-modal';

import { connect } from 'react-redux';




Favoris = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [restoModal, setRestoModal] = useState('');


  var handleClick = (restoEnQuestion) => {
    setShowModal(true)
    setRestoModal(restoEnQuestion)
  }


  var NoRestaurant
  if (props.myRestos == 0) {
    NoRestaurant = <Text style={{ flex: 1, fontSize: 20, marginTop: 300 }}>Aucun restaurant dans vos Favoris<FontAwesomeIcon icon={faUtensils} /></Text>
  }

  return (

    <View style={styles.container}>
      {NoRestaurant}


      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={{ backgroundColor: '#C9C7C7', flex: 1 }}>


          <ScrollView>
            <View style={{ backgroundColor: '#f1f2f6', padding: 25, borderRadius: 10, flex: 1, margin: 20 }}>


              <View style={{ justifyContent: "center" }}>
                <ImageModal
                  resizeMode="contain"
                  imageBackgroundColor="#000000"
                  style={{
                    width: 270,
                    height: 270,
                  }}
                  source={
                    { uri: restoModal.img }}

                />
              </View>

              <Text style={{ fontSize: 30, marginBottom: 10, marginTop: 10, fontWeight: "bold" }}>
                {restoModal.nom}
              </Text>

              <Text style={{ marginBottom: 10, fontSize: 15 }}>
                Spécialités : {restoModal.type}
              </Text>

              <Text style={{ marginBottom: 10, fontSize: 15, fontStyle: "italic" }}>
                {restoModal.desc}
              </Text>

              <Text style={{ marginBottom: 10, fontSize: 15 }}>
                Adresse : {restoModal.adresse}
              </Text>

              <Text style={{ marginBottom: 10, fontSize: 15 }}>
                Horaires : {restoModal.horaires}
              </Text>



              <TouchableOpacity onPress={() => Linking.openURL(restoModal.site_url)}>
                <Text style={{ color: 'blue' }}>
                  Visiter le site internet
                                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL(`tel:${restoModal.tel}`)
              }>

                <View style={{ flexDirection: "row", alignItems: "center" }}>

                  <Text style={{ marginBottom: 10, fontSize: 18, marginRight: 10, marginLeft: 40, marginTop: 10, color: 'red' }}>

                    Cliquez ici pour reserver

                                  </Text>


                  <FontAwesomeIcon icon={faMobileAlt} style={{ height: 10, width: 10 }} />

                </View>

              </TouchableOpacity>

              <View style={{ justifyContent: "flex-end", flex: 1 }}>
                <Button color="#EBA41B" title='Fermer' onPress={() => setShowModal(!showModal)} />
              </View>

            </View>
          </ScrollView>
        </View>

      </Modal>

      <ScrollView >

        <View style={{ flex: 1, paddingTop: 10 }}>



          {
            props.myRestos.map((resto, i) => {
              return (
                <View style={{ borderWidth: 1, borderColor: '#CCCCCC', marginBottom: 10, backgroundColor: "#FFFFFF", borderRadius: 5 }}>

                  <Image
                    source={{ uri: resto.img }}
                    style={{ width: 250, height: 150, justifyContent: "center", borderRadius: 5 }}

                  />

                  <Text style={{ marginBottom: 10, textAlign: "center", fontSize: 16, fontWeight: "bold" }}>
                    {resto.nom}
                  </Text>

                  <Text style={{ marginBottom: 10, textAlign: "center", fontSize: 16 }}>
                    {resto.type}
                  </Text>

                  <View style={{ marginLeft: 8, alignItems: "center", marginBottom: 10 }}>
                    <FontAwesomeIcon icon={faTrash} type='delete' onPress={() => { props.deleteToFavoris(i) }} />
                  </View>

                  <Button title=' En savoir plus' color="#EBA41B" onPress={() => handleClick(resto)} />


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
    backgroundColor: "white",
    marginTop: 30
  },
});

function mapStateToProps(state) {
  return { myRestos: state.wishList }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteToFavoris: function (restoDeleted) {

      dispatch({
        type: 'deleteResto',
        unLike: restoDeleted
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favoris)