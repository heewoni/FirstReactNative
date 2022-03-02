import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  /*return <View style={[styles.box, styles.rounded]} />; //배열형태 */
  return (
    <View
      style={[
        styles.box,
        rounded ? styles.rounded : null,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  ); //삼항연산자
}
Box.defaulPorps = {
  size: 'medium',
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});
const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
