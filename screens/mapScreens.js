import React, {useState, useEffect} from 'react';
import MapView,{Marker} from "react-native-maps"

import * as Location from "expo-location"
import * as Permissions from 'expo-permissions';


export default function mapScreens() { 
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [resto, setResto] = useState([]);
    
  useEffect(() => {
    async function askPermissions() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        Location.watchPositionAsync({distanceInterval: 2},
          (location) => {
             setCurrentLatitude(location.coords.latitude)
             setCurrentLongitude(location.coords.longitude);
          }
        );
      }
    };
    async function restolist(){
      var food = await fetch("http://172.17.190.54:3000/restolist")
      .then(res => res.json())
      .then(data => {;
        console.log(data.restaurant)
        setResto(data.restaurant)
      })
      .catch(error => console.log(error))
      // var jsonResponse = await food.json()
      //console.log(jsonResponse)
      
      
     };
    restolist();
    askPermissions();
  }, []);
    //setAddResto([...addResto, {longitude: resto.longitude, latitude: resto.latitude,  } ]);

   var restoMarker = resto.map((restaurant, i)=>{
    return (<Marker key={i} pinColor="blue" title={restaurant.restoName} coordinate={{latitude: restaurant.latitude, longitude: restaurant.longitude}}/>)
  });

    return(
      <MapView 
          style={{flex : 1}} 
          initialRegion={{
            latitude: 45.750000,
            longitude: 4.850000,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker key={"currentPos"}
              pinColor="red"  
              title="Hey !"
              description="Je suis ici"
              coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
          />   
          {restoMarker}
        </MapView>
      
      
      )};
