import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

const profile = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          This is the screen where you can see your children
        </Text>
        <Link href="/(tabs)/NewsList">
          <Text style={styles.linkText}>Child 1</Text>
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
