
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
 
var box_count = 3;
var box_height = height / box_count;

export default class Historial extends Component{

  constructor(props) {
    super(props);

  }

   datosConductor = () => {
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

    datosRuta = () => {
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
          
               <View style={styles.container1}>
               <View style={styles.textCont}>
                <Text style={{fontSize: 15,color: '#ffffff'}}>Fecha</Text>
               </View>
              <View style={styles.textCont1}>
               <Text style={{fontSize: 15,color: '#ffffff'}}>Monto</Text>
                </View>
               <View style={styles.textCont2}>
               <Text style={{fontSize: 15,color: '#ffffff'}}>Opciones</Text>
               </View>
               </View>

               <View style={styles.container1}>
               <View style={styles.textCont3}>
                <Text style={{fontSize: 15,color: '#000000'}}>2018-11-25</Text>
               </View>
              <View style={styles.textCont4}>
               <Text style={{fontSize: 15,color: '#000000'}}>50 bs</Text>
                </View>
               <View style={styles.textCont5}>
               <Text style={{fontSize: 15,color: '#000000'}}>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosConductor}>Conductor--</Text>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosRuta}>Ruta</Text>
               </Text>
               </View>
               </View>

                              <View style={styles.container1}>
               <View style={styles.textCont3}>
                <Text style={{fontSize: 15,color: '#000000'}}>2018-11-25</Text>
               </View>
              <View style={styles.textCont4}>
               <Text style={{fontSize: 15,color: '#000000'}}>50 bs</Text>
                </View>
               <View style={styles.textCont5}>
               <Text style={{fontSize: 15,color: '#000000'}}>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosConductor}>Conductor--</Text>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosRuta}>Ruta</Text>
               </Text>
               </View>
               </View>

                              <View style={styles.container1}>
               <View style={styles.textCont3}>
                <Text style={{fontSize: 15,color: '#000000'}}>2018-11-25</Text>
               </View>
              <View style={styles.textCont4}>
               <Text style={{fontSize: 15,color: '#000000'}}>50 bs</Text>
                </View>
               <View style={styles.textCont5}>
               <Text style={{fontSize: 15,color: '#000000'}}>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosConductor}>Conductor--</Text>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosRuta}>Ruta</Text>
               </Text>
               </View>
               </View>

                              <View style={styles.container1}>
               <View style={styles.textCont3}>
                <Text style={{fontSize: 15,color: '#000000'}}>2018-11-25</Text>
               </View>
              <View style={styles.textCont4}>
               <Text style={{fontSize: 15,color: '#000000'}}>50 bs</Text>
                </View>
               <View style={styles.textCont5}>
               <Text style={{fontSize: 15,color: '#000000'}}>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosConductor}>Conductor--</Text>
               <Text style={{fontSize: 15,color: 'blue'}} onPress={this.datosRuta}>Ruta</Text>
               </Text>
               </View>
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
  container1: {
    flexDirection: 'row',
  },
  textCont: {
    flex: 4,
    height: 30,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:5,
  },
  textCont1: {
    flex: 3,
    height: 30,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:5,
  },
  textCont2: {
    flex: 5,
    height: 30,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:5,
  },
    textCont3: {
    flex: 4,
    height: 30,
    backgroundColor: '#d5e7ef',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textCont4: {
    flex: 3,
    height: 30,
    backgroundColor: '#d5e7ef',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textCont5: {
    flex: 5,
    height: 30,
    backgroundColor: '#d5e7ef',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});
