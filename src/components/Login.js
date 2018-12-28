
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
  ScrollView
} from 'react-native';


export default class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      textoCliente:'Ingresar como cliente',
      textoConductor:'Ingresar como conductor',
      ok:true,
    };

  }

   register = () => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'Register'
      });
      this.props.navigation.dispatch(navigateAction);

     }

    login = () => {
     //console.log(this.state);
     if (this.state.ok) {
        this.setState({
         ok:false,
         textoCliente:'validando..'
        });
        fetch('https://api-taxi.herokuapp.com/ingresar', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),

        })
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
         if (responseJson.status=== 'true') {
            this.setState({
             ok:true,
             textoCliente:'Ingresar como cliente'
            });
            const navigateAction = NavigationActions.navigate({
            routeName: 'Inicio',
            params: {usuario: responseJson.data}
            });
           this.props.navigation.dispatch(navigateAction);
         }else{
            this.setState({
             ok:true,
             textoCliente:'Ingresar como cliente'
            });
          alert(responseJson.msg);
         }

        })
        .catch((error) => {
            this.setState({
             ok:true,
             textoCliente:'Ingresar como cliente'
            });
            console.error(error);
        });
     }

     
     }

     loginConductor = () => {
     //console.log(this.state);
      if (this.state.ok) {
         this.setState({
         ok:false,
         textoConductor:'validando..'
        });
        fetch('https://api-taxi.herokuapp.com/ingresarConductor', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),

        })
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
         if (responseJson.status=== 'true') {
            this.setState({
             ok:true,
             textoConductor:'Ingresar como conductor'
            });
            const navigateAction = NavigationActions.navigate({
            routeName: 'InicioConductor',
            params: {usuario: responseJson.data}
            });
           this.props.navigation.dispatch(navigateAction);
         }else{
            this.setState({
             ok:true,
             textoConductor:'Ingresar como conductor'
            });
          alert(responseJson.msg);
         }

        })
        .catch((error) => {
            this.setState({
             ok:true,
             textoConductor:'Ingresar como conductor'
            });
            console.error(error);
        });
      }
     

     }

    render(){
        return(
            <View style={styles.container}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              >
              <Text style={styles.titulo}>MyTurista</Text>
                <TextInput style={styles.inputBox} 
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder="Email"
                 placeholderTextColor = "#000000"
                 onChangeText={(email) => this.setState({email})}
                 />
                <TextInput style={styles.inputBox} 
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder="Password"
                 secureTextEntry={true}
                 placeholderTextColor = "#000000"
                 onChangeText={(password) => this.setState({password})}
                 />
                <TouchableOpacity style={styles.button}  onPress={this.login}>
                 <Text style={styles.buttonText}>{this.state.textoCliente}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={this.loginConductor}>
                 <Text style={styles.buttonText}>{this.state.textoConductor}</Text>
                </TouchableOpacity>
               </ScrollView>
               
               <View style={styles.textCont}>
                 <Text style={{fontSize: 15}}>No tienes una cuenta?
                 <Text style={{color: 'steelblue',fontSize: 15}} onPress={this.register}> Crear</Text>
                 </Text>
               </View>

            </View>
        )
    } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical:50,
  },
  textCont: {
    flex: 1,
    alignItems:'flex-end',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row',
  },
    inputBox: {
    width: 250,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color :'#000000',
    marginVertical:10,
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
