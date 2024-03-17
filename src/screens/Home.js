/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Instagram
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Icon name="add-circle-outline" size={25} />
          <Icon name="navigate-circle-outline" size={25} />
        </View>
      </View>
      <ScrollView>
        <Stories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
