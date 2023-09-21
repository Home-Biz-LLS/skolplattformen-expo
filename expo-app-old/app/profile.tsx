import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

const profile = () => {
  return (
    <>
      <View style={styles.container}>
        <Link href="/(tabs)/NewsList">
          <View style={styles.outline}>
            <Text>Avatar</Text>
            <Text>Name</Text>
            <Text>Class</Text>
            <Text>School</Text>
            <Text>Arrow icon</Text>
            <Text>Start - end time</Text>
            <Text>Upcoming events</Text>
            <Text>News</Text>
            <Text>Todays Lunch</Text>
            <Text>! icon</Text>
            <Text>Report absence</Text>
          </View>
        </Link>
      </View>
    </>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  outline: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
