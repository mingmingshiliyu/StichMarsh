import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"

type ButtonProps = {
    label?:string,
    icon?:string,
    onPress?:()=>void
}

const Button:React.FC<ButtonProps> = ({label,icon,onPress})=>{
    return (
        <View style={style.view}>
            <Pressable style={style.press} onPress={onPress}>
                {icon?<FontAwesome6 name={icon} color="#25292e"></FontAwesome6>:null}
                <Text style={style.text}>{label}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        borderRadius: 10,
        textAlign: 'center',
        alignSelf: 'center',
        borderColor: 'yellow',
        borderWidth:1,
        // padding: 5,
        margin: 5,
        minWidth: 120,
        minHeight: 30,
        backgroundColor: "#fff" 
        
    },
    text:{
        textAlign: 'center'
    },
    press:{
        flexWrap: "nowrap",
    }
})


export default Button;