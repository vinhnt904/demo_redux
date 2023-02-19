import React from 'react';
import {View, StyleSheet} from 'react-native';

import {DogImage} from '../components';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DogImage />
        <DogImage />
      </View>
      <View style={styles.row}>
        <DogImage />
        <DogImage />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  row: {flex: 1, flexDirection: 'row'},
});
