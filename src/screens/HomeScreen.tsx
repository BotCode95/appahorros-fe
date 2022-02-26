import React from 'react'
import { View,Text, StyleSheet, Button, TouchableOpacity, } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export const HomeScreen = () => {
    const top = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
        <View style={styles.containerNav}>

        </View>
        <Text style={{
            fontSize: 30, 
            textAlign: 'center', 
            marginTop: 20
        }}>
                App Ahorros
        </Text>
        <TouchableOpacity>
            <Icon name='add-outline' size={30}></Icon>

        </TouchableOpacity>
        
    </View>
  )
}

const styles  = StyleSheet.create({
    containerNav: {
        backgroundColor: '#0E6CDA',
        height: 70
    },
    btnPlus : {
        width: 30
    }
})
