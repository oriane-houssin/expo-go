import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function DisplayList({goal, deleteGoal}) {
    return(
        <View>
            <Text>{goal.title}</Text>
            <Pressable onPress={() => deleteGoal(goal.id)}>
                <Text>Supprimer</Text>
            </Pressable>
        </View>
    )
}