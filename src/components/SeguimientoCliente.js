
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
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
    this.state = {
       coordinates:null,
       error: null,
       lat:null,
       lng:null,
       latOrigen:this.props.navigation.state.params.pedido[0]["lat_origen"],
       lngOrigen:this.props.navigation.state.params.pedido[0]["lon_origen"],
       usuario: this.props.navigation.state.params.usuario,
       loaded: false,
       latDestino:this.props.navigation.state.params.pedido[0]["lat_destino"],
       lngDestino:this.props.navigation.state.params.pedido[0]["lon_destino"],
       latFija:null,
       lngFija:null,
    }
  }

  componentDidMount() {
    this.actualizarPosicion();    
  }

  /*watchIdPosicion = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          latFija: position.coords.latitude,
          lngFija: position.coords.longitude,
          loaded: true,
          });
          this.actualizarPosicion();
        },
        (error) => this.setState({ error: error.message }),
      );
  }*/
  actualizarPosicion = () => {
  this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          latFija: position.coords.latitude,
          lngFija: position.coords.longitude,
          loaded: true
        });
       console.log(this.state.lat);
       console.log(this.state.lng);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 0.4 },
    );
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
        if (!this.state.loaded) {
         return(
          <View style={styles.cargar}>
           <Text style={{fontSize: 20}}>obteniendo coordenadas....</Text>
             <TouchableOpacity style={styles.button}  onPress={this.actualizarPosicion}>
                 <Text style={styles.buttonText}>{this.state.textoConductor}</Text>
                </TouchableOpacity>
          </View>
          ) 
        }
        return(
            <View style={styles.container}>
             
              <View style={styles.textCont1}>
                <MapView
                 style={styles.map}
                 region={{
                   latitude: this.state.latFija,
                   longitude: this.state.lngFija,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
                 }}
                >
                  <Marker
                  coordinate={{
                      latitude: this.state.lat,
                      longitude: this.state.lng,
                  }}
                  title={"tu"}
                  description={this.state.lat+','+this.state.lng}
                  >
                  <Image source={{uri: 'https://image.ibb.co/j8PGxq/automobile-1.png'}} style={{ width: 40, height: 40 }} />
                  </Marker>
                  <Marker
                  coordinate={{
                      latitude: this.state.latOrigen,
                      longitude: this.state.lngOrigen,
                  }}
                  title={"pasajero"}
                  description={this.state.latOrigen+','+this.state.lngOrigen}
                  >
                  <Image source={{uri: 'https://image.ibb.co/bvZh2q/cliente-origen.png'}} style={{ width: 60, height: 65 }} />
                  </Marker>
                  <Marker
                  coordinate={{
                      latitude: this.state.latDestino,
                      longitude: this.state.lngDestino,
                  }}
                  title={"destino pasajero"}
                  description={this.state.latDestino+','+this.state.lngDestino}
                  >
                  <Image source={{uri: 'https://image.ibb.co/j3rjFA/location.png'}} style={{ width: 40, height: 40 }} />
                  </Marker>

                </MapView>
              </View>

               <View style={styles.textCont2}>
                <Text style={{fontSize: 20, color: '#ffffff'}} onPress={this.alerta}> Inicio recorrido
                <Text style={{fontSize: 20, color: '#ffffff'}} onPress={this.alerta}>      Fin recorrido</Text>
                </Text>
                
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
    flex: 14,
    height: box_height,
    backgroundColor: '#F4F5F9',
  },
  textCont2: {
    flex: 2,
    height: box_height,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
  },
  map: {
   ...StyleSheet.absoluteFillObject,
  },
  cargar: {
    flex: 1,
    backgroundColor: '#F4F5F9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    width: 250,
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingHorizontal:16,
    marginVertical:10,
    paddingVertical:12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

});
