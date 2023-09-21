import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabFiveScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Class goes here (2B)</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
        <View style={styles.outline}>
          <Text>Avatar</Text>
          <Text>name</Text>
          <Text>Parents</Text>
          <Text>3 dots</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
