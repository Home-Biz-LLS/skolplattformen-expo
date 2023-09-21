import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

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
    <>
      <Stack.Screen options={{ title: '(Kids Name)' }} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}
      >
        <Tabs.Screen
          name="NewsList"
          options={{
            // This is the tab bar title
            title: 'News',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="newspaper-o" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            // This is the tab bar title
            title: 'Notifications',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="exclamation-circle" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            // This is the tab bar title
            title: 'Calendar',
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="calendar" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="lunch"
          options={{
            // This is the tab bar title
            title: 'Lunch',
            // This is the title at the top of the screen
            headerTitle: '(Week number goes here) - Lunch Menu',
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
    </>
  );
}
