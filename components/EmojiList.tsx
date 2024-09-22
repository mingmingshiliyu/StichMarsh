import { Dispatch, SetStateAction, useState } from "react"
import { FlatList, Image, ImageSourcePropType, Pressable } from "react-native";

type EmojiListProps = {
    onSelect:Dispatch<SetStateAction<ImageSourcePropType|undefined>>

}

const EmojiList:React.FC<EmojiListProps> = ({onSelect}) => {
    const [emoji] = useState([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);
    return (
        <>
            <FlatList horizontal data={emoji}
            // numColumns={5}

            contentContainerStyle={{flexDirection:'row' ,alignItems:'center'}}
            renderItem={({item,index})=>(
                <Pressable onPress={()=>{
                    console.log("item:",JSON.stringify(item))
                    console.log(typeof item)
                    onSelect(item)
                }}>
                    <Image source={item} key={index} style={{width:100,height:100}}></Image>
                </Pressable>
            )}
            >

            </FlatList>
        </>
    )
}

export default EmojiList;