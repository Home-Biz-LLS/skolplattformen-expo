import React from 'react';
import { Text, View } from 'react-native';
import { Stack } from 'expo-router';

type NewsArticleProps = {
  article: {
    id: string;
    author: string;
    header: string;
    intro: string;
    body: string;
    imageUrl: string;
    fullImageUrl: string;
    imageAltText: string;
    published: string;
    modified: string;
  };
};

export default function NewsArticle({ article }: NewsArticleProps) {
  console.log(article);
  return (
    <>
      <Stack.Screen options={{ title: 'News' }} />
      <View>
        <Text>Hello there!</Text>
      </View>
    </>
  );
}
