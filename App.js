import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
        <Decks />
        <NewDeck />
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
