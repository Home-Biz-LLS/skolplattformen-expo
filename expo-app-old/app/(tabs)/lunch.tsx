import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

const lunchMenu = [
  {
    title: 'Måndag',
    description: 'Kebabgryta ris Ratatouille med kikärter',
  },
  {
    title: 'Tisdag',
    description: 'Ost-broccolisås pasta Fusilli',
  },
  {
    title: 'Onsdag',
    description: 'Köttbullar potatis gräddsås lingon Falafel',
  },
  {
    title: 'Torsdag',
    description: 'Prinskorv potatis rödbetssallad + Inlagd och senapssill',
  },
  {
    title: 'Fredag',
    description:
      'Avslutning  Varmkorv bröd ketchup senap ( F-3 i matsalen från 10:30 )',
  },
];

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      {lunchMenu.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
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
