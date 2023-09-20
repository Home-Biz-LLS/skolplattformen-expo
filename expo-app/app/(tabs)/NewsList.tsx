import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

import NewsListItem from '../../components/news/NewsListItem';

import { news } from '../../fakeData/news';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Search bar goes here</Text>
      {news.map(article => (
        <NewsListItem article={article} key={article.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
