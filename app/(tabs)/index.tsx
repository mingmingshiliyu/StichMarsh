import ColorList from "@/components/ColorList";
import TabBar from "@/components/TabBar";
import { Text, View } from "react-native"

const ScheduleTab = () => {
    return (
        <View style={{flex:1,top:50,flexDirection:'column',gap:20}}>
            {
                
                [1,0.8].map((opacity)=>
                     <ColorList color="blue" opacity={opacity}/>
                )
            }
        </View>
    )
}

export default ScheduleTab;