import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"

type ButtonType = 'primary'|'normal'

type ButtonProps = {
    label?:string,
    icon?,
    iconPrefix?:string,
    onPress?:()=>void,
    type?:ButtonType,
    imagePicker?:boolean,
    imageCallback?:React.Dispatch<React.SetStateAction<{uri:string|undefined,width:number|undefined,height:number|undefined}>>
    circle?:boolean,
}

// const [selectedImage, setSelectedImage] = useState<string>("");

const Button:React.FC<ButtonProps> = ({label,iconPrefix,onPress,type,imagePicker=false,imageCallback,circle=false,icon})=>{
    const decideCircle = (circle:boolean)=>{
        if(circle){
            bd=50
        }else{
            bd=18
        }
        console.log("bd:",bd)
        return style.press
    }

    const pickImageAsync = async () => {
        console.log("picked")
        // let result = ImagePicker.launchCameraAsync({
        //     quality: 1
        // })
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if(!result.canceled){
            if(imageCallback!==undefined) {
                imageCallback({uri:result.assets[0].uri,height:result.assets[0].height,width:result.assets[0].width})
            }
            // setSelectedImage(result.assets[0].uri)
        }else{
            alert('you did not select any image.')
        }
    }
    return (
        // <View style={style.view}>
         
            <View style={[style.viewInner,type==='primary'?{backgroundColor: 'yellow'}:{backgroundColor:'blue'}]}>
                {/* Pressable有天生的长度和高度，包裹View即可 */}
                <Pressable style={()=>decideCircle(circle)}  onPress={imagePicker?pickImageAsync:onPress}>
                    <View style={{alignItems:'center',justifyContent:'center',flexDirection: 'row',flexWrap:'nowrap',gap:10}}>
                        {iconPrefix?<FontAwesome6 name={iconPrefix} color="#25292e"></FontAwesome6>:<></>}
                        {
                            circle? 
                            // <MaterialIcons name={icon} size={24} color="#fff"/>//-
                            <MaterialIcons name={icon} size={38} color="#fff"/>//+
                            :
                            <Text style={style.text}>{label}</Text>
                        }
                    </View>
                </Pressable>
            </View>
        // </View>
    )
}

let  bd = 100

const style = StyleSheet.create({
    view: {
        

        
        
    },
    
    viewInner: {
        padding: 5,
        borderRadius: bd,
        textAlign: 'center',
        alignSelf: 'center',
        borderColor: 'yellow',
        borderWidth:5,
        
        overflow: 'hidden', //隐藏，不然里面的元素超出父元素的地方会显示出来
        width: 84,
        height: 84,
        // padding: 5,
        margin: 5,
        
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor: "#fff" ,
        backgroundColor: 'blue',
        // borderRadius: 18,
    },
    text:{
        textAlign: 'center',
    },
    press:{
        // borderRadius: bd,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
    
        gap: 10,
        // height: "100%",
        // width: "100%"
    },
    // pressCircle: {
    //     borderRadius: bd,
    //     flexDirection:'row',
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     padding: 10,
    
    //     gap: 10,
    //     height: "100%",
    //     width: "100%"
    // }
})


export default Button;