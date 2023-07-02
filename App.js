import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goal) {
    setGoals((prevState) => [
      ...prevState,
      { text: goal, key: Math.random().toString() },
    ]);
  }
  function deleteGoal(id) {
    setGoals((prevGoals) => prevGoals.filter((item) => item.key !== id));
  }

  function handleModal() {
    setShowModal((prevState) => !prevState);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add a Goal!" color="#a065ec" onPress={handleModal} />
        <GoalInput
          addGoal={addGoalHandler}
          showModal={showModal}
          toggleModal={handleModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item, index }) => {
              return (
                <GoalItem
                  text={item.text}
                  onPress={deleteGoal.bind(null, item.key)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 8,
    flex: 5,
    alignItems: "stretch",
  },
});
