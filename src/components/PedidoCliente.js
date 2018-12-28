
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


export default class PedidoCliente extends Component{

  constructor(props) {
    super(props);
    this.state = {
      usuario: this.props.navigation.state.params.usuario,
      pedido:null,
      loaded: false
    }
    //console.log(this.props);
  }

  componentDidMount() {
    var id=this.state.usuario[0]["id"];
    //console.log(id);
    return fetch('https://api-taxi.herokuapp.com/pedidoEnProcesoConductor/'+id)
          .then((response) => response.json())
          .then((responseJson) => {
           if (responseJson.status=== 'true') {
                this.setState({
                    loaded: true,
                    pedido:responseJson.msg
                });
                //console.log(this.state.pedido);
           }else{
            alert(responseJson.msg);
              const navigateAction = NavigationActions.navigate({
              routeName: 'InicioConductor',
              params: {usuario: this.state.usuario}
              });
             this.props.navigation.dispatch(navigateAction);
           }
          })
          .catch((error) => {
            console.error(error);
          });
    
  }
   seguimientoCliente = () => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'SeguimientoCliente',
        params: {usuario: this.state.usuario, pedido: this.state.pedido}
      });
      this.props.navigation.dispatch(navigateAction);

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
                <TouchableOpacity style={styles.button} onPress={this.seguimientoCliente}>
                 <Text style={styles.buttonText}>ver ruta</Text>
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
