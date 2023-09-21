import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Link href="https://www.breakit.se/artikel/21423/har-ar-it-bolaget-bakom-haveriet-pa-skolplattformen">
        <View>
          <Text>Planering och Bedömning</Text>
          <Text>Lärlogg</Text>
          <Text>4 days ago</Text>
          <Text>Ett nytt inlägg i en lärlogg har skapats.</Text>
        </View>
      </Link>
      <Link href="/">
        <View>
          <Text>Heading</Text>
          <Text>possible comment (lärlogg/bedömning/empty)</Text>
          <Text>published</Text>
          <Text>sub heading</Text>
        </View>
      </Link>
      <Link href="/">
        <View>
          <Text>Heading</Text>
          <Text>possible comment (lärlogg/bedömning/empty)</Text>
          <Text>published</Text>
          <Text>sub heading</Text>
        </View>
      </Link>
      <Link href="/">
        <View>
          <Text>Heading</Text>
          <Text>possible comment (lärlogg/bedömning/empty)</Text>
          <Text>published</Text>
          <Text>sub heading</Text>
        </View>
      </Link>
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
