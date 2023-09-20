import React from 'react';
import { Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function NewsArticle() {
  return (
    <>
      <Stack.Screen options={{ title: 'News' }} />
      <View>
        <Text>(Header goes here)</Text>
        <Text>(Published)</Text>
        <Text>(Updated)</Text>
        <Text>(Body)</Text>
        <Text>(Img goes here)</Text>
      </View>
    </>
  );
}
