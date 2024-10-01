

import React, { Component, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


// isFocused={isFocused}
//             routeName = {route.name}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={styles.tabItem}
//             color={isFocused?"#673ab7":"#222"}
//             label={label}
type TarButtonProps = {
    routeName:string,
    onPress:Function,
    onLongPress:Function,
    label:string,
    isFocused:boolean,
}

const iconList = {
    index: (props:any) =><Feather name='home' size={24} color={'#222'} {...props}/>,
    explorer: (props:any) => <Feather name='compass' size={24} color={'#222'}  {...props}/>,
    profile: (props:any) => <Feather name='user' size={24} color={'#222'}  {...props}/>,
}


export const TarBarButton:React.FC<TarButtonProps> =({routeName,label,isFocused,onPress,onLongPress})=> {
    const scale = useSharedValue(100)
    useEffect(()=>{
        scale.value=withSpring(typeof isFocused==='boolean'?isFocused?1:0:isFocused,{duration: 350})
    },[scale,isFocused])

    

    const animatedStyles = useAnimatedStyle(()=>{
        const scaleValue = interpolate(scale.value,[0,1],[1,1.2]);
        const top = interpolate(scale.value,[0,1],[0,9]);
        return {
            transform:[{scale: scaleValue}],
            top
        }
    })
    const animatedTextStyles = useAnimatedStyle(()=>{
        const opacity = interpolate(scale.value,[0,1],[1,0]);
        return {opacity}
    })

    return (
    //     <TouchableOpacity
    //     accessibilityRole="button"
    //     accessibilityState={isFocused ? { selected: true } : {}}
    //     accessibilityLabel={options.tabBarAccessibilityLabel}
    //     testID={options.tabBarTestID}
    //     onPress={onPress}
        
    //     onLongPress={onLongPress}
    //     style={styles.tabItem}
    //   >
    <Animated.View style={[styles.tabItem,animatedStyles]}>
        <Pressable style={styles.tabItem} onPress={onPress} onLongPress={onLongPress}>
        {iconList[routeName]({color: isFocused? 'white':'#222'})}
        <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222' },animatedTextStyles]}>
          {label}
        </Animated.Text>
        </Pressable>
    </Animated.View>
    //   </TouchableOpacity>
    )
  
}


const styles = StyleSheet.create({
    tabItem: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})
