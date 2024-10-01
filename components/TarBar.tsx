import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { ReactNode, useState } from 'react';
import { Icon } from '@expo/vector-icons/build/createIconSet';
import {TarBarButton} from './TarBarButton';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const MyTabBar:React.FC<BottomTabBarProps> = ({ state, descriptors, navigation })=> {
  const [dimensions,setDimensions] = useState({height:20,width:200})
  
  const onTabbarLayout = (e:LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    })
  };
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(()=>{
    return {
      transform: [{ translateX: tabPositionX.value }],
    }
  })
  const buttonWidth = dimensions.width/state.routes.length;

  return (
    <View onLayout={onTabbarLayout} style={styles.tarbar}>
      <Animated.View style={[animatedStyle,{
        position: 'absolute',
        backgroundColor: '#723FEB',
        borderRadius: 30,
        marginHorizontal: 12,
        height: dimensions.height-15,
        width: buttonWidth-25,
      }]}/>
      {state.routes.map((route, index) => {
        //背景色变换
        
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log("123adasd")
          tabPositionX.value=withSpring(buttonWidth*index,{duration: 1500})

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
          // <TouchableOpacity
          //   accessibilityRole="button"
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarTestID}
          //   onPress={onPress}
            
          //   onLongPress={onLongPress}
          //   style={styles.tabItem}
          // >
          //   {iconList[route.name]===undefined? null:iconList[route.name]({color: isFocused? '#673ab7':'#222'})}
          //   {
                
          //     //  (iconList as any)[route.name as 'index'|'profile'|'explorer']({color: isFocused? '#673ab7':'#222'})
          //     //  myObject[route.name]({color: isFocused? '#673ab7':'#222'})
          //   }
          //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //     {label}
          //   </Text>
          // </TouchableOpacity>
          <TarBarButton
            key={route.name}
            isFocused={isFocused}
            routeName = {route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
          />
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

