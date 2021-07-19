import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}
        <Text style={styles.tagline}>Sell what you don't need!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'dodgerblue',
  },
  // logo: {
  //   width: '200%',
  //   height: 100,
  // },
  logoContainer: {
    position: 'absolute',
    top: 100,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fc5c65',
  },
  tagline: { fontSize: 20, fontWeight: 'bold' },
})

export default WelcomeScreen
