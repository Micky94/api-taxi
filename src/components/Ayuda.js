
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
  Dimensions,
  ScrollView
} from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 2;
var box_height = height / box_count;

export default class Ayuda extends Component{

  constructor(props) {
    super(props);

  }

    render(){
        return(
          
            <View style={styles.container}>
              <View style={styles.textCont1}>
               <Text style={styles.titulo}>Sobre nosotros</Text>
                </View>
                
               <View style={styles.textCont2}>
               <ScrollView
               showsVerticalScrollIndicator={false}
               >
                 <Text style={styles.parrafo}>enviar informacion lohngsvijfhb
                 dfdgkuvdfikjv
                 fdjhbvfijkbm,Viewjfhbgvijf
                 ghkfbniujkbgnk
                 fgjhngbfvghjh,jmnb
                 fjnfbgvfdfdghjmnbv
                 fyjnbfdsfghjmnbvc
                 gymnbvfdcfghjkyutrdffgm NavigationActionsffgnb
                 fgnbvdvghnjm 
                 fgnbvnmmjuytredfcv
                 ghmnbvdc vbnhjytgrfdvc 
                 hjgfvbnjgyhtgrfdvcbnmjh
                 fgjgnbvcbnhtgrfdcvbnhtg
                 hggdfvcbnjhytfvbnhg
                 bnjhtrgdfcvbnjhygf
                 gfjmhnbvhjyftytgvcbnjuiuyrf
                 dfjhjgbnduifkolhgundviokf
                 dthigudfhijmoigijrtnufijfonjmgopl
                 fituhigjopdsgjrnijnklfbmvioklf
                 kfjgnvodmfihjbmigofdfkbmvoifkv
                 fkughjimofpblkvofpdñljibugokbv,propsfjgojbiofpknmuigofjmvopc
                 fgoijbivofpbkv,pofinjfiopvc
                 ihoigjbmovpflñv,doifhjiofklñ
                 ifguhjnvmofibhntiofvmoigkv
                 figjnbvmiofpbkmntyiufdofmck,ldfb
                 fgiubvnjmiofkbnjuiodvnbigofvmdc,ovknjbmiov
                 fgijbnvmiofnbjiugvofklbnbigjvklniogbkv
                 fgiunvimofkbnhijkvlcmv,okgbnvmokl
                 fgijbnvmokvnbgmofklbmogfficjnvimk
                 fgubjvm,fkbnimvofklfmvvbjghnbiovmfkvmjnhbmv
                 fjgbjnvmifoknbvmofkbnvmofkbnvimofkcl
                 fgkjbnvmofkbnivfokbmvofknbvmolcknbgifuodkmlcokfgv
                 fgkjbvofkmlbmvofklnbmvocfklnbvimokflmbvokfnbivomk
                 fgobnvmofkbngijfdvmcofkgnbiuvofk
                 fgufhvnmckovbnvmofknbigvofilvmdkfonkbmvoik
                 fgijbnvmckovnbivfoklvmgjbnvimofknb ijgnbviofkcbngijfnmcokvnb
                 fgjkvnmcokfbniufodklvmkjvbnivofdkmvogjbnivmofklmijgbvmcocnbv
                 gfbhfkuvijmcokfnbifodkmv,vkjbnivfokdk,fjgbjnvmifoknbvmofkbnvmofkbnvimofkclfg
                 gijhgjviofdobniugfoidlmvo,cdkfbnfvkl
                 fgihhgjfkodcpfbjiugfoojvlk,gknbimovkflc
                 gfobijvkc,kcvbnvifopdk,vkjbnfiovdkcbmihfugofd
                 fhogijgkvknjbopd,vkljnbofpdjvm,
                 fgohigjkfcopfjnhodpc,vkjbnbgofpdñljbjinhjgk
                 fgkkhgjfcm,sd,fhnbnvmiofpcdljbmigufobjv0odpc
                 gougihjgfkcopfknbivodckmokjgbhnvofdpojkbmv
                 fguihjfkcpdkfbnuivocfdñskvpokjgnbimovkl
                 fguihjfkcpodfihbjvocpdmvjgbhiofpdoñkcmkvjbhniodk
                 gfjnhbjvkcpodfknbhuviodpkv,ofgibhjg9iofc
                 fgiugofjokcmjnhugifodcpñvbkn9jtgiofpc
                 fujghngbfvdtgfhyguikjhnb</Text>
                 </ScrollView>
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
    marginVertical:15,
  },
  parrafo: {
    fontSize: 15,
    color: '#000000',
    textAlign:'left',
    marginVertical:15,
    marginHorizontal:10,
  },
  textCont1: {
    flex: 2,
    height: box_height,
    backgroundColor: '#F4F5F9',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  textCont2: {
    flex: 15,
    height: box_height,
    backgroundColor: '#F4F5F9',
    alignItems:'center',
  },
});
