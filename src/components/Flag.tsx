import React from "react";
import { View, StyleSheet} from "react-native";

export default props => {
    return (
        <View style= {style.container}>
           <View style = {style.flagpole}/>
           <View style = {style.flag}/>
           <View style = {style.base1}/>
           <View style = {style.base2}/> 
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
       position: 'absolute',
       height: 5,
       width: 6,
       backgroundColor: '#F22',
       marginLeft: 3, 
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    }
})