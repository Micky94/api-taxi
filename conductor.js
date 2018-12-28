import React , {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SocketIOClient from 'socket.io-client';

class MyClass extends Component {
  constructor(props) {
        super(props);
     this.socket = SocketIOClient('http://192.168.0.13:3000');
     this.socket.emit('channel1', 'Hi server'); // emits 'hi server' to your server
    //  this.socket.on('messages', this.onReceivedMessage);

      this.socket.on('channel2', (data) => {
          console.log('Data recieved from server', data); //this will console 'channel 2'
        });

      console.log(this.socket);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> MyClass </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
});

export default MyClass;