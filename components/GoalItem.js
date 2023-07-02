import { StyleSheet, Text, Pressable, View } from "react-native";

const GoalItem = ({ text, onPress }) => {
  return (
    <View style={{ borderRadius: 8, marginBottom: 8 }}>
      <Pressable
        android_ripple={{ color: "gold" }}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#a065ec",
    color: "white",
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
