
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
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


export default class PedidoEnProceso extends Component{

  constructor(props) {
      super(props)
        // console.log(this.props)
        this.state = {
            usuario: this.props.navigation.state.params.usuario,
            loaded: false,
            imagePath:''
        }
      //console.log(this.state.usuario);
  }

  componentDidMount() {
    var id=this.state.usuario[0]["id"];
    return fetch('https://api-taxi.herokuapp.com/pedidoEnProceso/'+id)
          .then((response) => response.json())
          .then((responseJson) => {
            //console.log(responseJson);
           if (responseJson.status=== 'true') {
                this.setState({
                    loaded: true,
                });
           }else{
            alert(responseJson.msg);
              const navigateAction = NavigationActions.navigate({
              routeName: 'Inicio',
              params: {usuario: this.state.usuario}
              });
             this.props.navigation.dispatch(navigateAction);
           }
          })
          .catch((error) => {
            console.error(error);
          });
    
  }

   pedidoEnProceso = () => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'SeguimientoEnTiempoReal'
      });
      this.props.navigation.dispatch(navigateAction);

     }

    reconocerImagen = () => {
      const options = {
        title: 'seleccionar una Foto',
        storageOptions:{
          skipBackup: true,
          path: 'images'
        }
      }
      ImagePicker.launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('cancelado por el usuario')
        } else if (response.error) {
          console.log('error' + response.error)
        }else if (response.customButton) {
          console.log('user custon' + response.customButton)
        }else {
          this.setState({
            imagePath: 'data:image/jpeg;base64,' + response.data,
            loaded: false
          });
          //console.log(this.state.imagePath)
           this.verfi();
        }
      })

     }

    verfi = () => {
      fetch('https://api-taxi.herokuapp.com/compararImagen', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idConductor: 69,
          imagen: this.state.imagePath
        }),

      })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
         if (responseJson.status=== 'true') {
           alert(responseJson.msg);
            this.setState({
            loaded: true
            });
         }else{
          alert(responseJson.msg);
          this.setState({
            loaded: true
          });
         }

        })
      .catch((error) => {
            console.error(error);
      });
    
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

    reclamo = () => {
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
        if (!this.state.loaded) {
         return(
          <View style={styles.cargar}>
             <Text style={{fontSize: 20}}>cargando....</Text>
          </View>
          ) 
        }
        return(
            <View style={styles.container}>
               
               <View style={styles.textCont}>
                <TouchableOpacity style={styles.button} onPress={this.pedidoEnProceso}>
                 <Text style={styles.buttonText}>ver ruta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.reconocerImagen}>
                 <Text style={styles.buttonText}>reconocimiento facial</Text>
                </TouchableOpacity>
               </View>
                <View style={styles.textCont}>
                <TouchableOpacity style={styles.button} onPress={this.reclamo}>
                 <Text style={styles.buttonText}>reclamo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.datosConductor}>
                 <Text style={styles.buttonText}>conductor asignado</Text>
                </TouchableOpacity>
               </View>

            </View>
        )
    } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    alignItems:'center',
  },
    textCont: {
    backgroundColor: '#F4F5F9',
    alignItems:'center',
    flexDirection: 'row',
    marginVertical:10,
  },
  button: {
    width: 150,
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingHorizontal:16,
    marginVertical:0,
    paddingVertical:12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  cargar: {
    flex: 1,
    backgroundColor: '#F4F5F9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
