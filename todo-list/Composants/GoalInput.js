import React, {useState} from "react";
import {Pressable, TextInput, View, Text} from "react-native";

export default function GoalInput({addGoal}) {
    const [title, setTitle] = useState("");

    const addGoalHandler = () => {
        if (title.trim() === "") return;
        addGoal(title);
        setTitle(""); // Réinitialise l’input après ajout
    };
    return(
        <View>
            <TextInput
                placeholder="Ajouter un objectif..."
                onChangeText={setTitle}
                value={title}
            />
            <Pressable onPress={addGoalHandler}>
                <Text>Ajouter</Text>
            </Pressable>
        </View>
    )
}