import React, {useState, useEffect} from "react";
import {Button, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import DisplayList from "./Composants/DisplayList";
import GoalInput from "./Composants/GoalInput";

export default function App() {
  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState([
    { id: 0, title: "Faire les courses" },
    { id: 1, title: "Monter à plus de 5000m d'altitude" },
    { id: 2, title: "Acheter mon premier appartement" },
  ]);

  useEffect(() => {
    console.log("goals :", goals)});

  const addGoalHandler = (title) => {
    setGoals([...goals, { id: Date.now(), title }]);
  };

  const deleteGoalHandler = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
      <View style={styles.container}>
            <View>
              <FlatList
                  data={goals}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                      <DisplayList goal={item} onDelete={deleteGoalHandler} />
                  )}
              />
            </View>
        <GoalInput addGoal={addGoalHandler} />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#a0a8a0',
    flexDirection: 'row',
  },
});

