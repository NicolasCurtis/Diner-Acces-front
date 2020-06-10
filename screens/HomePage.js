import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, onPressLearnMore, Image, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import dataResto from '../dataResto.json';

export default HomePage = () => {
  const [serch, setSearch] = useState('')
  const [restoList, setRestoList] = useState([])

  var color = { color: '#f1c40f' }

<<<<<<< HEAD
  return (
    <View style={styles.container}>
      <View style={{ width: 1000, height: 50, backgroundColor: '#001F5A', marginTop: 30 }} >
        <Text style={{ textAlign: "center", fontSize: 35, color: "#FFCB44" }}>
          Diner Access
=======
    return (
      <View style={styles.container}>
        <View style={{width: 1000, height: 50, backgroundColor: '#001F5A', marginTop: 30}} >
          <Text style={{textAlign: "center", fontSize : 35, color : "#FFCB44"}}>
            Diner Access
>>>>>>> 6cb44daeba2e9453c4cc9e56bba8a6978dfb882a
          </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 35, paddingRight: 100 }}>
        <View>
          <TextInput
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderColor: "#D2D2D2", borderWidth: 1, marginRight: 10, width: 200, paddingLeft: 5, height: 35, backgroundColor: "#F4F4F4" }}
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
      <ScrollView  >
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, marginLeft: 8, marginRight: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, marginTop: 20 }}>
            Les plus populaires
              </Text>
          <ScrollView horizontal={true}>
            {
              dataResto.restos.map((resto, i) => {
                return (
                  <View style={{ borderWidth: 1, borderColor: '#CCCCCC' }}>
                    <Image
                      source={{uri: resto.img}}
                      style={{ width: 250, height: 150, justifyContent: "center" }}
                    />
                    <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                      {resto.nom}
                  </Text>
                    <View style={{ color: "yellow" }}>
                      <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </View>
                      <Text></Text>
                      <View style={{ marginLeft: 8 }}>
                        <FontAwesomeIcon icon={faHeart} />
                      </View>
                      <Text></Text>
                    </View>
                  </View>
                )
              })
            }

            <View style={{ borderWidth: 1, marginLeft: 8 }}>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
                <Text></Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, paddingBottom: 20 }}>
            Meilleurs avis
              </Text>
          <ScrollView
            horizontal={true}
          >
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
          </ScrollView>
          {/*              
                <Card
                  image={require('../assets/resto.jpg')}>
                  <Text style={{marginBottom: 10}}>
                    Nom du resto
                  </Text>
                  <Text>
                  Text style={{marginBottom: 10}}>
                   note
                  </Text>
                </Card> */}
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, marginBottom: 20 }}>
            Vous avez déjà recherché
            </Text>
          <ScrollView
            horizontal={true}>
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require('../assets/resto.jpg')}
                style={{ width: 250, height: 150, marginTop: 20, marginLeft: 8, justifyContent: "center" }}
              />
              <Text style={{ marginBottom: 10, marginLeft: 8 }}>
                Nom du resto
                  </Text>
              <View style={{ color: "yellow" }}>
                <View style={{ flexDirection: "row", color: { color }, marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </View>
                <Text></Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesomeIcon icon={faHeart} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
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