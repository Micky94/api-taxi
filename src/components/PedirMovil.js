
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import MapView, { Marker } from 'react-native-maps';
import PushNotification from 'react-native-push-notification';
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
var refreshIntervalId=0;

export default class PedirMovil extends Component{
      constructor(props){
            super(props)
            // console.log(this.props)
            this.state = {
                coordinates:null,
                error: null,
                lat:null,
                lng:null,
                lt:null,
                ln:null,
                usuario: this.props.navigation.state.params.usuario,
                loaded: false,
                latDestino:null,
                lngDestino:null,
                latFija:null,
                lngFija:null,
                destino: false
            }
            //console.log(this.state.usuario);
        }

  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
    var id=this.state.usuario[0]["id"];
    return fetch('https://api-taxi.herokuapp.com/pedirMovilId/'+id)
          .then((response) => response.json())
          .then((responseJson) => {
            //console.log(responseJson);
           if (responseJson.status=== 'true') {
              navigator.geolocation.getCurrentPosition(
              (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    latFija: position.coords.latitude,
                    lngFija: position.coords.longitude,
                    loaded: true,
                });
              },
               (error) => this.setState({ error: error.message }),
              );
  
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



  enviarInformacion = (pops) => {
     var today = new Date(),
     datePedido = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
     horaPedido = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
     if (this.state.destino) {
       fetch('https://api-taxi.herokuapp.com/pedirMovil', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fecha:datePedido,
          hora:horaPedido,
          lat_origen: this.state.lat,
          lon_origen: this.state.lng,
          lat_destino: this.state.latDestino,
          lon_destino: this.state.lngDestino,
          estado: 'enviado',
          id_cliente:this.state.usuario[0]["id"]
        }),

        })
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
         if (responseJson.status=== 'true') {
            alert(responseJson.msg);
            this.time();
            const navigateAction = NavigationActions.navigate({
            routeName: 'Inicio',
            params: {usuario: this.state.usuario}
            });
           this.props.navigation.dispatch(navigateAction);
        
         }else{
          alert(responseJson.msg);
         }

        })
        .catch((error) => {
            console.error(error);
        });

      }else{
         alert('debe proporcionar un destino');
      }

    }

   actualizarUbicacion = () => {
      this.setState({
        latFija: this.state.lat,
        lngFija: this.state.lng,
      });
     }


    markerDestino = (e) => {
      this.setState({
        latDestino: e.nativeEvent.coordinate.latitude,
        lngDestino: e.nativeEvent.coordinate.longitude,
        latFija: e.nativeEvent.coordinate.latitude,
        lngFija: e.nativeEvent.coordinate.longitude,
        destino:true
      });
      //console.log(this.state)
     }

  time = () => {
    refreshIntervalId = setInterval(this.notificar, 5000);
    console.log(refreshIntervalId);  
  }


  notificar = () => {
    var id=this.state.usuario[0]["id"];
    console.log(id);
    return fetch('https://api-taxi.herokuapp.com/notificarPedido/'+id)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
           if (responseJson.status=== 'true') {
              let date = new Date(Date.now() + (1 * 5000));
              PushNotification.localNotificationSchedule({
              message: "Tu solicitud de pedido fue aceptada",
             date,
              });
              clearInterval(refreshIntervalId);
           }

          })
          .catch((error) => {
            console.error(error);
          });

  }

    render(){
        if (!this.state.loaded) {
         return(
          <View style={styles.cargar}>
           <Text style={{fontSize: 20}}>obteniendo coordenadas....</Text>
          </View>
          ) 
        }
        return(
            <View style={styles.container}>
             
              <View style={styles.textCont1}>
               <Text style={styles.titulo}>Email: {this.state.usuario[0]["email"]}</Text>
                </View>

                <View style={styles.textCont3}>
                <TouchableOpacity style={{position:'absolute',bottom:0,right:0,zIndex:2}} 
                onPress={this.actualizarUbicacion}>
                 <Image source={require('../img/boton.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                  <MapView
                 style={styles.map}
                 region={{
                   latitude: this.state.latFija,
                   longitude: this.state.lngFija,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
                 }}
                 onPress={e => this.markerDestino(e)}
               >
                <Marker
                coordinate={{
                    latitude: this.state.lat,
                    longitude: this.state.lng,
                }}
                title={"tu destino"}
                description={this.state.latDestino+','+this.state.lngDestino}
                >
                <Image source={{uri: 'https://image.ibb.co/bvZh2q/cliente-origen.png'}} style={{ width: 60, height: 65 }} />
                </Marker>
                {this.state.destino ? 
                <Marker
                coordinate={{
                    latitude: this.state.latDestino,
                    longitude: this.state.lngDestino,
                }}
                title={"tu destino"}
                description={this.state.latDestino+','+this.state.lngDestino}
                >
                <Image source={{uri: 'https://image.ibb.co/j3rjFA/location.png'}} style={{ width: 40, height: 40 }} />
                </Marker> : null}

               </MapView>
                </View>

               <View style={styles.textCont2}>
                <TouchableOpacity style={styles.button} onPress={this.enviarInformacion}>
                 <Text style={styles.buttonText}>enviar informacion</Text>
                </TouchableOpacity>
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
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign:'left',
    marginVertical:0,
    marginHorizontal:15,
  },
  textCont1: {
    flex: 1,
    height: box_height,
    backgroundColor: '#F4F5F9',
  },
  textCont2: {
    flex: 2,
    height: box_height,
    backgroundColor: '#F4F5F9',
    alignItems:'center',
    justifyContent: 'center',
  },
  textCont3: {
    flex: 12,
    height: box_height,    
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
  map: {
   ...StyleSheet.absoluteFillObject,
 },
inputBox: {
    width: 250,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:10,
    color :'#000000',
  },
cargar: {
    flex: 1,
    backgroundColor: '#F4F5F9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
