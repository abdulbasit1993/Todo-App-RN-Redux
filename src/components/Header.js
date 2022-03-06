import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: colors.PRIMARY,
    height: height * 0.09,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});

export default Header;
