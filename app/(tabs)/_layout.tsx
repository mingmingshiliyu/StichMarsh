import TabBar from "@/components/TabBar";
import { Navigator, router, Tabs, useNavigation, useRouter } from "expo-router"
import { BrowserRouter as Router, Route, Switch, useLocation, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { NavigationProp, ParamListBase, RouteProp, useNavigationState, useRoute } from "@react-navigation/native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
export type StateProps = {
    routes: RouteProp<ParamListBase>
    index: number
    navigation: NavigationProp<ReactNavigation.RootParamList>
}

const TabLayout = () => {
    const [headerShown,setHeaderShown]=useState(true)
    const state:StateProps={routes:useRoute(),index:0}
    const navigation = useNavigation()
    const toggleHeader = () => {
        setHeaderShown(!headerShown)
        //router.navigate.name
        navigation.getState().routes
        
    }
    return (
        <Tabs
            
            screenOptions={({route,navigation})=>({
                tabBarButton:(props)=><TabBar state={route} navigation={navigation}/>,
                tabBarStyle:styles.tabbar,
                tabBarItemStyle:{height:100,width:100},
                tabBarLabelStyle: {height:100,width:100},
                tabBarBadgeStyle: {},
                tabBarIconStyle: {backgroundColor:headerShown?'#673ab7':'#222',height:100,width:100},
                tabBarLabel: route.name,
                TabBarIcon:  (props) => <Button title="asdas"></Button>
            })}
        >
            <Tabs.Screen
                name="billing"
                options={{title:"Billing",headerShown:headerShown}}
            />
            <Tabs.Screen
                name="index"
                options={{title:'Schedule',headerShown:headerShown}}
            />
            <Tabs.Screen
                name="addButton"
                options={{title: 'add',headerShown:headerShown}}
            />
            <Tabs.Screen
                name="share"
                options={{title:'share',headerShown:headerShown}}
            />
            <Tabs.Screen
                name="me"
                options={{title:'me',headerShown:headerShown}}
            />
        </Tabs>
    )
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
        shadowOpacity: 0.1,
    },
})

export default TabLayout;
