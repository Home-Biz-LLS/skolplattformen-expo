import { StyleSheet } from 'react-native';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';

export default function NewsArticle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Article Screen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/NewsArticle.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
