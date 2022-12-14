import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native'

import { gameInterface } from '../interfaces/gameInterface'
import { clientGetWinner } from '../api/api';
import { Winner } from '../components/Winner/Winner';

export function WinnerScreen() {

    const [game, setGame] = useState<gameInterface>(
        {
            id: 0,
            name: "--",
            description: "--",
            cover: "",
            votes: 0,
        }
    )

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const winner = await clientGetWinner()
                setGame(winner)
                console.log(winner)
            })()
        }, [])

    )

    return (
        <View style={styles.container}>
            <Winner
                name={game.name}
                cover={game.cover}
                votes={game.votes}
            />
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