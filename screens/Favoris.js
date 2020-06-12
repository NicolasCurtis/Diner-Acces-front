
import React, {useState} from 'react';
import {View, Button, TouchableOpacity, Image,StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Card} from 'react-native-elements'
export default reservation = (  ) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const affichage = (date) => {
    setDate(currentDate)
  }

  return (

    <View style={styles.container}>

        <View style={{width: 370, height: 50, backgroundColor: '#001F5A'}} >
          <Text style={{textAlign: "center", fontSize : 35, color : "#FFCB44"}}>
            Diner Access
          </Text>
        </View>

      <Card
        title='Le comptoir Duquesne'
        image={require('../assets/dudu.jpg')}>
        <Text style={{marginBottom: 10}}>
         Restaurant atypique situé dans le sixième arrondissement de lyon ....
        </Text>

      
</Card>
    
      
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : 25,
    backgroundColor : 'white'
  },
  card : {
    backgroundColor : '#FFFFFF',
    marginBottom :10,
    marginLeft : '2%',
    width : '96%',
    shadowColor : "#000000",
    shadowOpacity : 0.2,
    shadowRadius : 1,
    shadowOffset : {
      width : 3,
      height : 3,
    }
  },
  cardImage : {
    width : '100%',
    height : 200,
    resizeMode : 'cover',
  },
  cardText : {
    padding: 10,
    fontSize : 16
  }
})
