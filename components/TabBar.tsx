import { Router, router } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp, NavigationState, ParamListBase, RouteProp, TabNavigationState } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';
type TabBarProps = {
    state: RouteProp<ParamListBase, string>,
    navigation: NavigationProp<ReactNavigation.RootParamList>
}
const TabBar:React.FC<TabBarProps> = ({ state, navigation }) =>  {
    const icons = {
        index: (props)=><Icon name="home" size={26} color={'grey'} {...props} />,
        explore: (props)=><Icon name="compass" size={26} color={'grey'} {...props} />,
        create: (props)=><Icon name="pluscircleo" size={26} color={'grey'} {...props} />,
        profile: (props)=><Icon name="home" size={26} color={'grey'} {...props} />
    }
    const isFocused = true;
    return (
    <View style={{  }}>

      {
        // const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;
        
        // const isFocused = state.index === index;

        // const onPress = () => {
          // const event = navigation.emit({
          //   type: 'tabPress',
          //   target: route.key,
          //   canPreventDefault: true,
          // });

          // if (!isFocused && !event.defaultPrevented) {
          //   navigation.navigate(route.name, route.params);
          // }
        // };

        // const onLongPress = () => {
          // navigation.emit({
          //   type: 'tabLongPress',
          //   target: route.key,
          // });
        // };

        // return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {
                icons['index']({
                  color: isFocused?'blue':'grey'
              })
            }
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {"hello"}
            </Text>
          </TouchableOpacity>
        // );
      }
    </View>
  );
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width:0,height:10},
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        // flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default TabBar;