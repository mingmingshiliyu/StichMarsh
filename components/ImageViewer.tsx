import { useContext } from "react"
import { View,Image, StyleSheet, ImageSourcePropType } from "react-native"

type ImageProps = {
    placeholderImageSource?:ImageSourcePropType,
    selectedImage?:{uri:string|undefined,width:number|undefined,height:number|undefined}
}

const ImageViewer:React.FC<ImageProps> = ({placeholderImageSource,selectedImage}) => {
    const imageSource = selectedImage?.uri?{uri: selectedImage.uri,width:selectedImage.width,height:selectedImage.height}:placeholderImageSource
    return (
        <View style={style.image}>
            <Image  source={imageSource} ></Image>
        </View>
    )
}

const style = StyleSheet.create({
    // "width":"80%","height":"80%","borderRadius":18
    image: {
        // marginTop: 20,
        // width: "80%",
        // height: "80%",
        borderRadius: 18,
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    }
})

export default ImageViewer;