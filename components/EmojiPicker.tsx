import { MaterialIcons } from "@expo/vector-icons"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { Modal,Pressable,Text, View } from "react-native"
import EmojiList from "./EmojiList"

type EmojiProps = {
    children?:ReactNode
}

const EmojiPicker:React.FC<EmojiProps> = ({children}) => {
    const [visible,setVisible] =useState(true)
    return (
        <View style={{maxHeight:200,overflow:'scroll',flex:0}}>
            {/* 对modal设置style无效，比如你自己封装的组件，没有暴露style，你设了也没用 */}
            <Modal   animationType="slide" style={{flex:0,height:100}}  visible={visible} transparent={true} > 
                <View style={{height:"25%",width:'100%',bottom:0,position:'absolute',backgroundColor: '#25292e'}}>
                    <View style={{height:"16%",backgroundColor:'#464C55',justifyContent:'space-between',flexDirection:"row"}}>
                        <Text style={{fontSize:22}}>Choose a sticker</Text>
                        <Pressable onPress={()=>{console.log("sisiis");setVisible(false)}}>
                            <MaterialIcons size={32} name="close"/>
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}


export default EmojiPicker;