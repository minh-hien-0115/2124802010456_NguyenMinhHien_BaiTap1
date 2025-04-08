import React from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const Bai2Screen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/react-native.png')} style={styles.logo} />
      <TextInput placeholder="Tên đăng nhập" style={styles.input} />
      <TextInput placeholder="Mật khẩu" secureTextEntry style={styles.input} />
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button title="Đăng nhập" color='#2196F3' onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Đăng ký" color='#FF9800' onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  input: { width: '100%', borderWidth: 1, padding: 10, marginVertical: 10 },
  logo: { width: 100, height: 100, marginBottom: 20 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  buttonContainer: {
    marginHorizontal: 10,
    width: 100
  }
});

export default Bai2Screen;