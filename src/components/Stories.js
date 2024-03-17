/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';

const Stories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      <Text>테스트</Text>
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({});
