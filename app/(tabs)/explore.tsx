import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Drawer} from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
            <Drawer.Screen
              name= "explore"
              options={{
                drawerLabel: 'Home',
                title: 'overcview',
              }}
            />
            <Drawer.Screen
              name="user/[id]"
              options={{
                drawerLabel: 'user',
                title:'overview',
              }}
            />
            
          </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
