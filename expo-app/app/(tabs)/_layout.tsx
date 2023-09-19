import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="exclamation-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lunch"
        options={{
          title: 'Lunch',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="clipboard" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="classmates"
        options={{
          title: 'Classmates',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
