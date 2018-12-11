import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './views/_shared-components/PrimaryButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PrimaryButton onPress={() => alert('pressed')}>Todo List</PrimaryButton>
      </View>
    );
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
