import { Image, StyleSheet, Platform, View, Pressable, Text, ImageSourcePropType, ViewProps } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ImageViewer from '@/components/ImageViewer'
import Button from '@/components/Button';
import { RefObject, useRef, useState } from 'react';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
const SourceImage = require('@/assets/images/background-image.png')
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

export default function HomeScreen() {
  const [image,setImage] = useState<{uri:string|undefined,width:number|undefined,height:number|undefined}>({width: 0, height: 0,uri:undefined});
  const [showApp,setShowApp] = useState<boolean>(false)
  const [isModalVisible,setIsModalVisible] = useState<boolean>(false)
  const [pickedEmoji,setPickedEmoji] = useState<ImageSourcePropType>();

  //权限
  const [status,requestPermission] = MediaLibrary.usePermissions();

  const imageRef = useRef<any>();

  //平移
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const scaleImage = useSharedValue(100)
  const doubleTap = Gesture.Tap().numberOfTaps(1).onStart(()=>{
    console.log("taptap")
    if(scaleImage.value!==100*2){
      scaleImage.value=scaleImage.value*2;
    }
  })
  const drag = Gesture.Pan().onChange((event)=>{
    translateX.value+=event.changeX;
    translateY.value+=event.changeY;
  })
  const containerStyle = useAnimatedStyle(()=>{
    return {
      transform:[
        {translateX: translateX.value,},
        {translateY: translateY.value,},
      ]
    }
  })


  const imageStyle = useAnimatedStyle(()=>{ //useAnimatedStyle创建样式，动画发生时，更新共享值实时生成样式
    return {
      width: withSpring(scaleImage.value), //withSpring过渡动画弹簧化
      height: withSpring(scaleImage.value)
    }
  })

  const onSaveImageAsync = async()=>{
    try{

    if(Platform.OS!=='web'){
        const localUri=await captureRef(imageRef,{height:400,quality:1});
      await MediaLibrary.saveToLibraryAsync(localUri);
      if(localUri){alert("saved!")}else{
        alert("no uri")
      }
     
    }else{
      const dataUrl = await domtoimage.toJpeg(imageRef.current,{
        quality:1,
        width:320,
        height:440,
      });
      let link = document.createElement('a');
      link.download = 'sticker.jpeg';
      link.href=dataUrl;
      link.click();
      
    }
  }catch(e){
    console.log(e)
  }

  }

  return (

    <GestureHandlerRootView style={{padding:0,margin:0,borderWidth:0,height:"100%",width:"100%"}}>
      
      <View ref={imageRef} style={{flex:1,alignItems: 'center',backgroundColor:'gray',flexDirection:'column'}}>
       {/* style={{"width":"80%","height":"80%","borderRadius":18}} */}
       {/* 为什么这里不设置width，为0？一开始没元素的时候为0，后面点击进行了扩充，但元素宽度没有变化，即使不是Animated而是普通的Image，从没有到出现也不会撑大，是overflow为hidden导致的，直接隐藏了，而不会扩大 */}
        <View style={{flex:4,alignItems:'center',justifyContent:'center',overflow:'scroll'}} collapsable={false}>
          <ImageViewer placeholderImageSource={SourceImage} selectedImage={image}/>
          <GestureDetector gesture={drag}>
          {/* zIndex在absolute,relative,fixed时才生效 */}
          <Animated.View style={[containerStyle,{position:'absolute'}]}>

          <GestureDetector gesture={doubleTap}>
              <Animated.Image source={pickedEmoji} resizeMode='contain' height={100} width={100} style={[imageStyle,{width:100,height:100,position:'absolute'}]}/>
          </GestureDetector>
          </Animated.View>
          </GestureDetector>
        </View>
      {/* <Text>{pickedEmoji?.toString()}</Text> */}
        
         <View style={{flex:1}}>
            {
              showApp?
              <View/>
              :
              <View style={styles.footer}>
                <Button circle icon="refresh"></Button>
              <Button label='Choose a photo' imagePicker imageCallback={setImage} circle icon="add" onPress={()=>{alert('you pressed')}}></Button>
              <Button circle icon="save-alt" imagePicker={false} onPress={onSaveImageAsync}/>
              {/* <Button label='Use this photo'  type="primary" icon="arrow-down" onPress={()=>setShowApp(true)}></Button> */}
            </View>
            }
         </View>
          <View style={{flex:1}}>
            <EmojiPicker children={<EmojiList onSelect={setPickedEmoji}/>}/>
            
          </View>  
          <StatusBar style='auto'/>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  footer: {
      flexDirection: 'row',
      marginBottom: 10,
  }
});
