
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions
} from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;

export default class SeguimientoEntiempoReal extends Component{

  constructor(props) {
    super(props);

  }

   alerta = () => {
         Alert.alert(
          'Obtener Servicio',
          'Desea registrar el Servicioo',
          [
            {text: 'Mas tarde', onPress: () => console.log('Mas tarde')},
            {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK')},
          ],
          { cancelable: false }
        )

     }




    render(){
        return(
            <View style={styles.container}>
             
              <View style={styles.textCont1}>
               <Image
                  style={{width: 500, height: 600}}
                  source={{uri: 'https://cdn.arstechnica.net/wp-content/uploads/2018/04/Screenshot_20180313-180800-1-800x1422.png'}}
                />
                </View>

               <View style={styles.textCont2}>
                <Text style={{fontSize: 20, color: '#ffffff'}} onPress={this.alerta}> Alerta de riesgo</Text>
               </View>

            </View>
        )
    } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textCont1: {
    flex: 15,
    height: box_height,
    backgroundColor: '#F4F5F9',
  },
  textCont2: {
    flex: 1,
    height: box_height,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
  },
});
