import React, {useState, useEffect} from "react";
import {Button, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [title, setTitle] = useState("");
  const list = [
    {
      id : 0,
      title : "Faire les courses",
    },
    {
      id : 1,
      title : "Monter à plus de 5000m d'altitude",
    },
    {
      id : 2,
      title : "Acheter mon premier appartement",
    },
  ]
  let [goals, setGoals] = useState(list);

  useEffect(() => {
    console.log("goals :", goals)});
  // }, [list]);

  return (
      <View style={styles.container}>
        { goals !== undefined &&  goals.map((goal) =>
            <View>
              <Text>{goal.title}</Text>
              <Pressable
                  onPress={() =>{setGoals(goals.filter(item => item.id !== goal.id))}}
              >
                <Text>Supprimer</Text>
              </Pressable>
            </View>

        )}

        <View>
          <TextInput
              onChangeText={setTitle}
              value={title}
          />
          <Pressable
              style={styles.input}
              onPress={(event) => {
                console.log("event :", event)
                const newGoal = {id: Date.now(), title: title}
                console.log(newGoal);
                setGoals([...goals, newGoal]);
              }}
          >
            <Text>Add</Text>
          </Pressable>
        </View>

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

