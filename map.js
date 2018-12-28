import React , {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


class App extends Component {
  constructor(props){
        super(props)
        // console.log(this.props)
        this.state = {
            coordinates:null,
            error: null,
            lat:null,
            lng:null
        }
        console.log(this.state)
    }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          error: null,
        });
        console.log(this.state)
      },
      (error) => this.setState({ error: error.message })
    );
  }

    render() {
        return (
            <View style={styles.container}>
               <MapView
                 style={styles.map}
                 region={{
                   latitude: this.state.lat,
                   longitude: this.state.lng,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
                 }}
               >
               <MapView.Marker
                coordinate={{
                    latitude: this.state.lat,
                    longitude: this.state.lng,
                }}
                title={"tu ubicacion"}
                description={"esta es tu ubicacion"}
                image={require('./src/img/yo.png')}
                />
               </MapView>
 
              <Text>Latitude: {this.state.lat}</Text>
              <Text>Longitude: {this.state.lng}</Text>
              {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default App;