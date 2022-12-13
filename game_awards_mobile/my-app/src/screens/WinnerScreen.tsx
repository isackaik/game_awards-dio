import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function WinnerScreen(){
    
    return (
        <View style={styles.container}>
            <Text>Winner Works</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#FAF7F6',
        backgroundColor: '#02245B',
        alignItems: 'center',
        justifyContent: 'center',

    }
})