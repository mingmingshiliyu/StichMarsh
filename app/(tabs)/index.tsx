import { Image, StyleSheet, Platform, View, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
const SourceImage = require('@/assets/images/background-image.png')

export default function HomeScreen() {
  return (
    <>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'gray',flexDirection:'column'}}>
        <Image source={SourceImage} style={{"width":"80%","height":"80%","borderRadius":18}}/>
          <View style={styles.footer}>
          <Button label='choose a photo' onPress={()=>{alert('you pressed')}}></Button>
          <Button label='Use this photo' icon="arrow-down"></Button>
          </View>
      </View>
      <View>
        <StatusBar style='auto'/>
      </View>
    </>
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
      flex: 1/3,
  }
});
