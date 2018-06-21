import React from 'react'
import { View,
          StyleSheet
        } from 'react-native'
import CameraFrame from './components/CameraFrame.js'



export default class App extends React.Component {
  
  
  render() {

    return (
        <View style={styles.container}>
          <View style={styles.topbar}>
          </View>
          <CameraFrame />
          <View style={styles.bottomArea}>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topbar: {
    flex: 0.15
  },
  bottomArea: {
    flex: 0.3
  },
  header: {
    fontSize: 30,
    backgroundColor: 'lightgrey',
    padding : 20

  }
})
