import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';

type NewsListItemProps = {
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

export default function NewsListItem({ article }: NewsListItemProps) {
  return (
    <View style={styles.newsListItem}>
      <Link
        href={{
          pathname: '/[article]',
          params: { article: article.id },
        }}
      >
        <Text>{article.imageUrl}</Text>
        <Text>{article.header}</Text>
        <Text>{article.author}</Text>
        <Text>{article.published}</Text>
        <Text>{article.intro}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  newsListItem: {
    marginHorizontal: 30,
    marginVertical: 30,
    borderColor: 'red',
    borderWidth: 1,
  },
});
