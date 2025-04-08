import { count } from 'console';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Bai3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bạn đã nhấn vào nút thêm <Text style={{}}>{count}</Text> lần.</Text>
      <Button title="Ấn để thêm" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const style = StyleSheet.create({
  count: {
    color: 'red',
    fontWeight: 'bold'
  }
})
export default Bai3Screen;
