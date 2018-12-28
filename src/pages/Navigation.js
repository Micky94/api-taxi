import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/Login';
import Register from '../components/Register';
import Inicio from '../components/Inicio';
import PedirMovil from '../components/PedirMovil';
import PedidoEnProceso from '../components/PedidoEnProceso';
import SeguimientoEnTiempoReal from '../components/SeguimientoEnTiempoReal';
import Historial from '../components/Historial';
import Ayuda from '../components/Ayuda';

import InicioConductor from '../components/InicioConductor';
import PedidoCliente from '../components/PedidoCliente';
import SeguimientoCliente from '../components/SeguimientoCliente';


const Navigation = StackNavigator({
   Login:{
   	screen: Login,
      navigationOptions:{
        header:null,
      }
   },	
   Register:{
    screen: Register,
      navigationOptions:{
        header:null,
      }
   },
   Inicio:{
    screen: Inicio,
      navigationOptions:{
        header:null,
      }
   }, 
   PedirMovil:{
    screen: PedirMovil,
      navigationOptions:{
        title: "Informacion a enviar",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   }, 
   PedidoEnProceso:{
    screen: PedidoEnProceso,
      navigationOptions:{
        title: "lista de pedidos en proceso",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },
   SeguimientoEnTiempoReal:{
    screen: SeguimientoEnTiempoReal,
      navigationOptions:{
        title: "seguimiento en tiempo real",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },
   Historial:{
    screen: Historial,
      navigationOptions:{
        title: "mis viajes",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },
   Ayuda:{
    screen: Ayuda,
      navigationOptions:{
        title: "ayuda",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },
   InicioConductor:{
    screen: InicioConductor,
      navigationOptions:{
        header:null,
      }
   }, 
   PedidoCliente:{
    screen: PedidoCliente,
      navigationOptions:{
        title: "pedidos pendientes",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },
   SeguimientoCliente:{
    screen: SeguimientoCliente,
      navigationOptions:{
        title: "seguimiento del cliente",
        headerStyle: {backgroundColor: '#000000'},
        headerTintColor: 'white',
      }
   },

  });

export { Navigation };
