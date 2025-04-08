import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type SquareProps = {
  text: string;
  bgColor?: string;
};

const Square: React.FC<SquareProps> = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

const data = Array.from({ length: 20 }, (_, i) => i + 1);

const Bai6Screen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={index} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
});

export default Bai6Screen;