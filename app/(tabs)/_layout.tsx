import { Tabs } from "expo-router"
import MyTabBar from "@/components/TarBar"

const RootLayout = () => {
  return (
    <Tabs tabBar={props=>   <MyTabBar {...props} /> }>
        <Tabs.Screen name="index"/>
    </Tabs>
  )
}

export default RootLayout;