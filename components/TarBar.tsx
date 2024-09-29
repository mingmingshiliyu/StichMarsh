import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { ReactNode } from 'react';

const MyTabBar:React.FC<BottomTabBarProps> = ({ state, descriptors, navigation })=> {


  const iconList = {
    index: (props:any) => (
      <Feather name='home' size={24} color={'#222'} {...props}/>
    ),
    explore: (props:any) => (<Feather name='compass' size={24} color={'#222'}  {...props}/>),
    profile: (props:any) => (<Feather name='user' size={24} color={'#222'}  {...props}/>),
  }

  return (
    <View style={styles.tarbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {
               iconList[route.name:'index'|'explore']({color: isFocused? '#673ab7':'#222'})
            }
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

// ...

{/* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator> */}

const styles = StyleSheet.create({
  tarbar: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width:0,height:10},
    shadowOpacity: 0.1
  },
  tabItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

