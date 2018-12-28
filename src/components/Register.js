
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


export default class Regiter extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      email: '',
      password:'',
    };

  }

   register = (props) => {
    this.setState({
     loaded:false
    });
    console.log(this.state);
      fetch('https://api-taxi.herokuapp.com/insertUsersCliente', {
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
          console.log(responseJson);
         if (responseJson.status=== 'true') {
            Alert.alert('Registro exitoso');
            const navigateAction = NavigationActions.navigate({
            routeName: 'Login',
            });
           this.props.navigation.dispatch(navigateAction);
         }else{
          alert('verifique que sus datos sean correctos');
         }

        })
      .catch((error) => {
            console.error(error);
      });

     }

     ingresar = (props) => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'Login'
      });
      this.props.navigation.dispatch(navigateAction);
     
     }

    render(){
        if (!this.state.loaded) {
         return(
          <View style={styles.cargar}>
           <Text style={{fontSize: 20}}>registrando....</Text>
          </View>
          ) 
        }
        return(
            <View style={styles.container}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              >
              <Text style={styles.titulo}>Registrarse</Text>

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

                <TouchableOpacity style={styles.button} onPress={this.register}>
                 <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                 </ScrollView>

               <View style={styles.textCont}>
                 <Text style={{fontSize: 15}}>Ya tienes una cuenta?
                 <Text style={{color: 'steelblue',fontSize: 15}} onPress={this.ingresar}> Ingresar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 20,
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
  cargar: {
    flex: 1,
    backgroundColor: '#F4F5F9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
