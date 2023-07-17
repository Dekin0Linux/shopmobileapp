import React from 'react';
import { View, StyleSheet } from 'react-native';

const BotomSheet = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius:10,
    elevation:10,
    shadowColor:'gray'
  },
});

export default BotomSheet;
