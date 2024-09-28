import { ScrollView, StyleSheet, View } from "react-native"
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors"

type ColorProps = {
    color: string,
    opacity?: number,
}

const ColorList:React.FC<ColorProps> = ({color,opacity=1}) => {
    return (
        <ScrollView
            contentContainerStyle={styles.contianer}>
            {
                    <View key={opacity} style={[styles.color,{backgroundColor: color,opacity}]}/>
            }            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    color: {
        width: '100%',
        height: 150,
        borderRadius: 25,
        borderCurve: 'continuous',
        marginBottom: 15,
    },
    contianer: {
        paddingHorizontal: 20,

    }
})

export default ColorList;