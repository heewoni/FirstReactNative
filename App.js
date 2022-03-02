/* eslint-disable no-unused-vars */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded={true} size="large" color="blue" />
    </SafeAreaView>
  );
};

export default App;
